import React, { useState } from 'react';
import Review from './Review';

const Ratings = () => {
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const handleWriteReviewClick = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when the close button is clicked
  };

  return (
    <div>
      <div className="p-8 my-10 bg-white rounded-lg shadow-lg lg:mr-[440px] lg:ml-[18px]">
        {/* Title Section */}
        <div className="flex flex-col items-start justify-between mb-6 lg:items-center sm:flex-row">
          <div className="text-left lg:text-left">
            <h2 className="mb-2 text-2xl font-bold">Ratings</h2>
            <p className="text-gray-600">Our goal is to display only relevant reviews from guests</p>
          </div>
          <button 
            className="px-4 py-2 mt-4 font-bold text-gray-700 bg-gray-100 rounded-lg sm:mt-0 hover:bg-gray-200"
            onClick={handleWriteReviewClick} // Call the function to show the modal
          >
            Write a review
          </button>
        </div>

        {/* Ratings Overview Section */}
        <div className="flex flex-col items-start justify-between mb-8 lg:items-center sm:flex-row">
          <div className="flex items-center text-center sm:text-left">
            <span className="text-5xl font-bold">5.0</span>
            <div className="ml-3">
              <div className="flex items-center mb-1">
                <span className="text-xl text-red-500">★★★★★</span>
              </div>
              <p className="text-gray-600">4 ratings</p>
            </div>
          </div>
        </div>

        {/* Ratings Details Section */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2">
          {['Location', 'Communication with accommodation', 'Equipment', 'Cleanliness', 'Client care', 'WiFi', 'Activities in the vicinity', 'Price/quality ratio'].map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <p>{item}</p>
                <p>5.0</p>
              </div>
              <div className="bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Section */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <img 
              src="your-avatar-url.jpg" 
              alt="User avatar" 
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <p className="font-bold">Luke <span className="text-sm text-gray-500">26 January 2024</span></p>
              <p className="text-red-500">★★★★★</p>
            </div>
          </div>
          <p className="text-gray-700">Everything is great, we will only go here. Thank you</p>
        </div>
      </div>

      {/* Modal for Review */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-xl font-semibold">Write a Review</h3>
              <button 
                className="text-gray-500 hover:text-gray-800" 
                onClick={handleCloseModal} // Close the modal when clicked
              >
                &times;
              </button>
            </div>

            {/* Modal Body - Make this scrollable */}
            <div className="overflow-y-auto max-h-[70vh] p-4">
              <Review /> {/* Show the Review component inside the modal */}
            </div>

            {/* Modal Footer (Optional) */}
            <div className="flex justify-end pt-4 mt-4 border-t">
              <button 
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ratings;
