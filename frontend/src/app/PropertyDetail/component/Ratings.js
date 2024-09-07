import React from 'react'

const Ratings = () => {
  return (
    <div>
    <div className=" p-8  my-10 bg-white rounded-lg shadow-lg lg:mr-[440px] lg:ml-[18px] ">
    {/* Title Section */}
    <div className="flex flex-col items-start justify-between mb-6 lg:items-center sm:flex-row">
      <div className="text-left lg:text-left">
        <h2 className="mb-2 text-2xl font-bold">Ratings</h2>
        <p className="text-gray-600">Our goal is to display only relevant reviews from guests</p>
      </div>
      <button className="px-4 py-2 mt-4 font-bold text-gray-700 bg-gray-100 rounded-lg sm:mt-0 hover:bg-gray-200">
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
      <div>
        <div className="flex items-center justify-between">
          <p>Location</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Communication with accommodation</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Equipment</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Cleanliness</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Client care</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>WiFi</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Activities in the vicinity</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Price/quality ratio</p>
          <p>5.0</p>
        </div>
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full w-full"></div>
        </div>
      </div>
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
    </div>
  )
}

export default Ratings
