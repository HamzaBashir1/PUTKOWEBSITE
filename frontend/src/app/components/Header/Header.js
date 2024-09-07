import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BiPlus } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="p-4 bg-white rounded-lg ">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
        {/* Left Section: Title and Status */}
        <div className="flex flex-col md:items-start">
          <h1 className="text-[#292A34] font-bold text-2xl">Overview</h1>
          <p className="text-[#292A34B2] text-xs font-medium">No warning</p>
        </div>

        
        {/* Center Section: Add Accommodation Button */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
          <CiSearch />
          <button className="flex items-center bg-white text-blackk px-4 py-2 rounded-lg space-x-2">
            <BiPlus className="text-lg" />
            <span>Add Accommodation</span>
          </button>
          <div className="flex items-center gap-2">
            <BsPersonCircle className="text-[#292A34] text-xl" />
            <h1 className="text-[#292A34] text-sm">Martin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
