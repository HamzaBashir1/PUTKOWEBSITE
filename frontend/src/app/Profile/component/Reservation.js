import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { BiFilter, BiPlus, BiSearch } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';

const Reservation = () => {
  return (
    <div className="p-4">
      {/* Navbar */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
          {/* Left Section: Title and Status */}
          <div className="flex flex-col">
            <h1 className="text-[#292A34] font-bold text-xl md:text-2xl">Reservation Requests</h1>
            <p className="text-[#292A34B2] text-sm md:text-xs font-medium">Apartment Kosice - 11 requests</p>
          </div>

          {/* Center Section: Add Accommodation Button */}
          <div className="hidden md:flex md:flex-col  md:items-center  md:gap-5">
            <CiSearch className="text-xl text-gray-500" />
            <button className="flex items-center bg-white text-black border border-gray-300 px-4 py-2 rounded-lg space-x-2 hover:bg-gray-100">
              <BiPlus className="text-lg" />
              <span>Add Accommodation</span>
            </button>
            <div className="flex items-center gap-2">
              <BsPersonCircle className="text-[#292A34] text-xl" />
              <h1 className="text-[#292A34] text-sm">Martin</h1>
            </div>
          </div>

        </div>

        {/* Button Container for Add Your Own Date */}
        <div className="flex justify-end">
          <button className="flex items-center bg-red-500 text-white rounded-full px-4 py-2 space-x-2 hover:bg-red-600">
            <BiPlus className="text-lg" />
            <span>Add Your Own Date</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Filter Buttons */}
        <div className="flex flex-row flex-wrap gap-4">
          <button className="bg-[#E7EAEE] flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200">
            <BiFilter className="text-lg" />
            <span>Filter</span>
          </button>
          <button className="bg-[#E7EAEE] flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200">
            <BiFilter className="text-lg" />
            <span>Filter</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-full md:max-w-sm">
          <input 
            type="text" 
            placeholder="Search for..." 
            className="border rounded-lg pl-10 pr-4 py-2 w-full"
          />
          <span className="absolute left-3 top-[50%] transform -translate-y-1/2 text-gray-500">
            <BiSearch />
          </span>
        </div>
      </div>

      {/* Reservation Details */}
      <div className="flex flex-col gap-4 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="flex flex-row items-center gap-4">
            <button className="bg-[#FFCB4E] rounded-lg py-2 px-4 text-white font-semibold">Import</button>
            <div>
              <h1 className="font-bold text-[#292A34] text-base">Apartment Kosice</h1>
              <h6 className="text-[#666666] text-sm font-bold">Sep 8 — Sep 10, 2024 (2 nights)</h6>
              <p className="text-[#666666] text-sm">Airbnb</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reservation
