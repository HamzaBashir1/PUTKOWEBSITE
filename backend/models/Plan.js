import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  phoneNumber: {
    type: String,
    required: true
  },
  planName: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  accommodationName: {
    type: String,
    required: true
  },
  websiteInformation: {
    type: String,
    required: false
  },
  noteOnFilling: {
    type: String,
    required: false
  },
  companyName: {
    type: String,
    required: false
  },
  streetNumber: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  zipcode: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  idNumber: {
    type: String,
    required: false
  },
  tin: {
    type: String,
    required: false
  },
  vatNumber: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
