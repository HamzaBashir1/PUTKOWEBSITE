import React, { useState } from 'react';

const AddAccommodation = () => {

  const [propertyType, setPropertyType] = useState(""); // State to store selected property type

  const propertyTypes = [
    "Apartment",
    "Flat",
    "Glamping",
    "Cottages",
    "Motels/Hostel",
    "Wooden Houses",
    "Guest Houses",
    "Secluded Accommodation",
    "Hotels",
    "Dormitories",
    "Caves",
    "Campsites",
    "Treehouses",
    "Houseboats",
    "Rooms",
    "Entire Homes",
    "Luxury Accommodation",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const accommodationData = {
      propertyType, // Selected propertyType
      // Add other form fields here
    };
  }

  return (
    <div className=''>
      {/* Name Section */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Name of the Object</h1>
        <input
          placeholder='Please Enter a Name'
          className='mt-2 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* Description Section */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Object Description</h1>
        <textarea
          rows={4}
          placeholder='Enter a Description'
          className='mt-2 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* Property Type Section */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Object Type</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {[
            'Apartment',
            'Flat',
            'Glamping',
            'Cottages',
            'Motels/Hostel',
            'Wooden Houses',
            'Guest Houses',
            'Secluded Accommodation',
            'Hotels',
            'Dormitories',
            'Caves',
            'Campsites',
            'Treehouses',
            'Houseboats',
            'Rooms',
            'Entire Homes',
            'Luxury Accommodation',
          ].map((type, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`property-type-${index}`}
                type='radio'
                name='property-type'
                checked={propertyType === type}
                onChange={(e) => setPropertyType(e.target.value)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`property-type-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Price */}
        <div className="bg-white p-5 mb-4 ">
            <h1 className="text-lg font-bold mb-2">Price</h1>
            <div className="relative">
                <input
                type="text"
                className="w-full p-2 pl-3 pr-12 border border-gray-300 rounded-md"
                placeholder="Enter price"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                €
                </span>
            </div>
        </div>

        {/* Discount */}
        <div className="bg-white p-5 mb-4">
            <h1 className="text-lg font-bold mb-2">Discount</h1>
            <div className="relative">
                <input
                type="text"
                className="w-full p-2 pl-3 pr-12 border border-gray-300 rounded-md"
                placeholder="Enter discount amount"
                />
            </div>
        </div>



      {/* Location Section */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Location on the Map</h1>
        <input
          placeholder='Search Accommodation Address'
          className='mt-2 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* Accommodation Address */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-2'>Accommodation Address:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='font-medium'>Street and Number</label>
            <input
              placeholder='Enter Street and Number'
              className='mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label className='font-medium'>City (Municipality)</label>
            <input
              placeholder='Enter City'
              className='mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label className='font-medium'>Zip Code</label>
            <input
              placeholder='Enter Zip Code'
              className='mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label className='font-medium'>Country</label>
            <input
              placeholder='Enter Country'
              className='mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
              required
            />
          </div>
        </div>
      </div>

      {/* Location Description */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Location Description</h1>
        <textarea
          rows={4}
          placeholder='Describe the location'
          className='mt-2 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* Places Nearby */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-2'>Places Nearby</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            'Restaurant',
            'Supermarket',
            'Bus Station',
            'Train Station',
            'Airport',
            'Ski Slope',
            'Aqua Park',
            'Tourist Trail',
            'Cycle Route',
            'ATM',
            'Gas Station',
            'Charging Station',
            'Cable Car',
            'Swimming Pool',
            'Water Area',
            'The Sea',
            'Beach',
            'Castle',
            'Zoo',
            'Museum',
            'Business Center',
          ].map((place, index) => (
            <div key={index} className='flex justify-between items-center'>
              <p>{place}</p>
              <div className='relative'>
                <input
                  type='number'
                  min='0'
                  placeholder='0'
                  className='mt-2 w-24 border border-gray-300 p-2 pr-8 rounded focus:outline-none focus:ring focus:ring-blue-500'
                />
                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>KM</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Contact Details</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='host' className='font-medium'>The Host</label>
            <input id='host' placeholder='Enter Host Name' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' className='font-medium'>Phone</label>
            <input id='phone' placeholder='Enter Phone Number' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='font-medium'>Email</label>
            <input id='email' placeholder='Enter Email' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='web' className='font-medium'>Website</label>
            <input id='web' placeholder='Enter Website' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='whatsapp' className='font-medium'>WhatsApp</label>
            <input id='whatsapp' placeholder='Enter WhatsApp Number' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' required />
          </div>
        </div>
      </div>

      {/* Additional Contact Information */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Additional Contact Information</h1>
        <textarea
          rows={3}
          placeholder='Enter additional details'
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* Arrival and Departure */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Arrival and Departure</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='arrival-from' className='font-medium'>Arrival From</label>
            <input type='time' id='arrival-from' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='arrival-to' className='font-medium'>Arrival To</label>
            <input type='time' id='arrival-to' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='departure-from' className='font-medium'>Departure From</label>
            <input type='time' id='departure-from' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='departure-to' className='font-medium'>Departure To</label>
            <input type='time' id='departure-to' className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500' />
          </div>
        </div>
      </div>

      {/* Check-in/Check-out Process */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Check-in/Check-out Process</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            'Reception',
            'Reception 24/7',
            'Self-Service Accommodation Process',
            'By Agreement with Accommodation Provider',
          ].map((process, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`process-${index}`}
                type='radio'
                name='checkin-process'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`process-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {process}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Wi-Fi Section */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Wi-Fi</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            'Free of Charge',
            'For a Fee',
            'Not Available',
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`wifi-${index}`}
                type='radio'
                name='wifi'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`wifi-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
        
      {/* Equipment and Services */}
      <div className='bg-white p-5 mb-4'>
      <h1 className='text-lg font-bold mb-4'>Equipment and Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {[
          { id: 'wifi', label: 'Free Wifi' },
          { id: 'high-speed', label: 'High speed internet' },
          { id: 'barrier-free', label: 'Barrier-free access' },
          { id: 'charging', label: 'Charging station' },
          { id: 'reception', label: 'Reception' },
          { id: 'invoicing-possible', label: 'Invoicing possible' },
          { id: 'card-payment', label: 'Card payment possible' },
          { id: 'room-service', label: 'Room service' },
          { id: 'air-conditioning', label: 'Air conditioning' },
          { id: 'atm', label: 'ATM' },
          { id: 'parking', label: 'Parking' },
          { id: 'kitchen', label: 'Kitchen' },
          { id: 'exchange-office', label: 'Exchange office' },
          { id: 'restaurant', label: 'Restaurant' },
          { id: 'bar', label: 'Bar' },
          { id: 'wellness', label: 'Wellness' },
          { id: 'swimming-pool', label: 'Swimming pool' },
          { id: 'hairdressing', label: 'Hairdressing' },
          { id: 'game-room', label: 'Game room' },
          { id: 'fireplace', label: 'Fireplace' },
          { id: 'grill', label: 'Grill' },
          { id: 'shelter', label: 'Shelter' },
          { id: 'terrace', label: 'Terrace' },
          { id: 'conference-room', label: 'Conference Room' },
          { id: 'laundry-room', label: 'Laundry Room' },
          { id: 'cleaning-plant', label: 'Cleaning plant' },
        ].map(({ id, label }) => (
          <div key={id} className='flex items-center space-x-2'>
            <input
              id={id}
              type='checkbox'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
            />
            <label
              htmlFor={id}
              className='text-sm font-medium text-gray-900'
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>


      {/* Children */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Children</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[
            { id: 'children-welcome-here', label: 'Children are welcome here',  },
            { id: 'family-room', label: 'Family rooms',  },
            { id: 'children-pool', label: 'Children pool',  },
            { id: 'children-menu', label: 'Children Menu',  },
            { id: 'babysitting', label: 'Babysitting',  },
            { id: 'children-corner', label: 'Children corner', },
            { id: 'children-playground', label: 'Children playground', },
            { id: 'sandbox', label: 'Sandbox', },
            { id: 'slide', label: 'Slide', },
            { id: 'children-toys', label: 'Children Toys', },
          ].map(({ id, label }, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={id}
                type='checkbox'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={id}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Diet*/}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Diet</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[
            { id: 'own-catering', label: 'Own catering',  },
            { id: 'breakfast', label: 'Breakfast',  },
            { id: 'half-board', label: 'Half board',  },
            { id: 'full-board', label: 'Full board',  },
            { id: 'all-inclusive', label: 'All inclusive',  },
          ].map(({ id, label }, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={id}
                type='checkbox'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={id}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>


      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Type of Stay</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[
            { id: 'with-children', label: 'With children',  },
            { id: 'for-seniors', label: 'For Seniors',  },
            { id: 'romance-for-two', label: 'Romance for two',  },
            { id: 'for-demanding', label: 'For the demanding',  },
            { id: 'for-group', label: 'For groups',  },
            { id: 'corporate-action', label: 'Corporate action',  },
            { id: 'with-pet', label: 'With a pet',  },
            { id: 'without-children', label: 'Without children',  },
            { id: 'for-undemanding', label: 'For the undemanding',  },
          ].map(({ id, label }, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={id}
                type='checkbox'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={id}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Response speed */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold'>Response speed</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            "I don't want state",
            'Within an hour',
            'Within 24 hours',
            'The next day',
            'Within an hour on weekdays',
            'On working days up to 24 hours',
            'We always try to respond as soon as possible'
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`response-speed-${index}`}
                type='radio'
                name='wifi'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`response-speed-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Pets */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Pets</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            "They are not allowed",
            'Pets are allowed',
            'Allowed for a fee',
            'By agreement with accommodation provider',
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`pets-${index}`}
                type='radio'
                name='pets'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`pets-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Loud Music */}
      <div className='bg-white p-5  mb-4'>
        <h1 className='text-lg font-bold mb-4'>Loud Music</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            "It is not allowed",
            'It is allowed',
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`loud-music-${index}`}
                type='radio'
                name='loud-music'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`loud-music-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Smoking */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Smoking</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            "It is not allowed",
            'It is allowed',
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`smoking-${index}`}
                type='radio'
                name='smoking'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`smoking-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Parking</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            "Free of charge",
            'For a fee',
            'We do not provide',
            'Free and for a fee'
          ].map((option, index) => (
            <div key={index} className='flex items-center'>
              <input
                id={`parking-${index}`}
                type='radio'
                name='parking'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor={`parking-${index}`}
                className='ml-2 text-sm font-medium text-gray-900'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* Upload Image */}
      <div className='bg-white p-5 mb-4'>
        <h1 className='text-lg font-bold mb-4'>Upload an Image</h1>
        {/* Implement file upload functionality here */}
        <input
          type='file'
          accept='image/*'
          className='w-full border border-gray-300 rounded py-2 px-3'
        />
      </div>
        

      <div className='bg-white p-5 flex justify-center'>
        <button 
            className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            type='button'
        >
            Submit
        </button>
      </div>


    </div>
  );
};

export default AddAccommodation;
