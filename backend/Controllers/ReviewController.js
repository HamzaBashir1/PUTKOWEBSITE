import Review from "../models/Review.js";
import Accommodation from "../models/Accommodation.js"; // Updated import to Accommodation

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).populate('user', 'name photo'); // Populate user data

        res.status(200).json({ success: true, message: 'Successful', data: reviews });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};

// Create a review
export const createReview = async (req, res) => {
    if (!req.body.accommodation) req.body.accommodation = req.params.accommodationId; // Update reference
    if (!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        // Add review to the accommodation
        await Accommodation.findByIdAndUpdate(req.body.accommodation, {
            $push: { reviews: savedReview._id }
        });

        // Calculate average ratings
        await Review.calAverageRatings(req.body.accommodation);

        res.status(200).json({ success: true, message: 'Review submitted', data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
