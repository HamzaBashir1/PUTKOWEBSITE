import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  propertyType: {
    type: String,
    enum: [
      'Apartment', 'Flat', 'Glamping', 'Cottages', 'Motels/Hostel', 'Wooden Houses', 
      'Guest Houses', 'Secluded Accommodation', 'Hotels', 'Dormitories', 'Caves', 
      'Campsites', 'Treehouses', 'Houseboats', 'Rooms', 'Entire Homes', 'Luxury Accommodation'
    ]
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number
  },
  location: {
    address: {
      type: String,
      required: true
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  contactDetails: {
    host: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    website: {
      type: String
    },
    whatsapp: {
      type: String
    }
  },
  // Add userId to reference the user who created the accommodation
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true // Ensure that every accommodation has a user associated with it
  },
  additionalContactInformation: String,
  arrivalAndDeparture: {
    arrivalFrom: String,
    arrivalTo: String,
    departureFrom: String,
    departureTo: String
  },
  checkinCheckoutProcess: {
    type: String,
    enum: ['Reception', 'Reception 24/7', 'Self-Service Accommodation Process', 'By Agreement with Accommodation Provider']
  },
  wifi: {
    type: String,
    enum: ['Free of Charge', 'For a Fee', 'Not Available']
  },
  equipmentAndServices: [
    {
      type: String,
      enum: [
        'Free Wifi', 'High speed internet', 'Barrier-free access', 'Charging station', 'Reception', 
        'Invoicing possible', 'Card payment possible', 'Room service', 'Air conditioning', 'ATM', 
        'Parking', 'Kitchen', 'Exchange office', 'Restaurant', 'Bar', 'Wellness', 'Swimming pool', 
        'Hairdressing', 'Game room', 'Fireplace', 'Grill', 'Shelter', 'Terrace', 'Conference Room', 
        'Laundry Room', 'Cleaning plant'
      ]
    }
  ],
  children: [
    {
      type: String,
      enum: [
        'Children are welcome here', 'Family rooms', 'Children pool', 'Children Menu', 
        'Babysitting', 'Children corner', 'Children playground', 'Sandbox', 'Slide', 'Children Toys'
      ]
    }
  ],
  diet: [
    {
      type: String,
      enum: ['Own catering', 'Breakfast', 'Half board', 'Full board', 'All inclusive']
    }
  ],
  typeOfStay: [
    {
      type: String,
      enum: [
        'With children', 'For Seniors', 'Romance for two', 'For the demanding', 
        'For groups', 'Corporate action', 'With a pet', 'Without children', 'For the undemanding'
      ]
    }
  ],
  responseSpeed: {
    type: String,
    enum: [
      "I don't want state", 'Within an hour', 'Within 24 hours', 'The next day', 
      'Within an hour on weekdays', 'On working days up to 24 hours', 
      'We always try to respond as soon as possible'
    ]
  },
  pets: {
    type: String,
    enum: ["They are not allowed", 'Pets are allowed', 'Allowed for a fee', 'By agreement with accommodation provider']
  },
  loudMusic: {
    type: String,
    enum: ["It is not allowed", 'It is allowed']
  },
  smoking: {
    type: String,
    enum: ["It is not allowed", 'It is allowed']
  },
  parking: {
    type: String,
    enum: ["Free of charge", 'For a fee', 'We do not provide', 'Free and for a fee']
  },
  images: [
    {
      type: String
    }
  ],
  Calender: {
    type: String,
    
  }
});

export default mongoose.model('Accommodation', accommodationSchema);
