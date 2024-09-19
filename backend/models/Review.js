import mongoose from 'mongoose';
import Accommodation from './Accommodation.js'; // Correct model name

const reviewSchema = new mongoose.Schema(
  {
    accommodation: { 
      type: mongoose.Types.ObjectId,
      ref: 'Accommodation', // Reference to the Accommodation model
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Pre-hook to populate user data when fetching reviews
reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name photo', // Adjust fields as necessary
  });

  next();
});

// Static method to calculate average ratings for an accommodation
reviewSchema.statics.calAverageRatings = async function(accommodationId) {
  const stats = await this.aggregate([
    {
      $match: { accommodation: accommodationId }
    },
    {
      $group: {
        _id: '$accommodation',
        numOfRatings: { $sum: 1 }, // Fixed to numOfRatings
        avgRating: { $avg: '$rating' }
      }
    }
  ]);

  // If no ratings found, stats[0] will be undefined
  if (stats.length > 0) {
    await Accommodation.findByIdAndUpdate(accommodationId, {
      totalRating: stats[0].numOfRatings,
      averageRating: stats[0].avgRating,
    });
  } else {
    await Accommodation.findByIdAndUpdate(accommodationId, {
      totalRating: 0,
      averageRating: 0,
    });
  }
};

// Post-hook to recalculate average ratings after saving a review
reviewSchema.post('save', function() {
  this.constructor.calAverageRatings(this.accommodation);
});

export default mongoose.model('Review', reviewSchema);
