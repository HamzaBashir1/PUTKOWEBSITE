import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { CiSearch } from 'react-icons/ci';
import { BiPlus } from 'react-icons/bi';

function Synchronization () {
    const { user } = useContext(AuthContext);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
        {/* Navbar */}
        <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:justify-between">
          {/* Left Section: Title and Status */}
          <div className="flex flex-col">
            <h1 className="text-[#292A34] font-bold text-xl md:text-2xl">
            synchron  calendar
            </h1>
            <p className="text-[#292A34B2] text-sm md:text-xs font-medium">
              Apartment Košice
            </p>
          </div>

          {/* Center Section: Add Accommodation Button */}
          <div
            className="hidden gap-4 cursor-pointer md:flex md:flex-row md:items-center"
            onClick={toggleMenu}
          >
            <CiSearch className="text-xl text-gray-500" />
            <button className="flex items-center px-4 py-2 space-x-2 text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <BiPlus className="text-lg" />
              <span>Add Accommodation</span>
            </button>
            <div className="flex items-center gap-2">
              {user?.photo ? (
                <img
                  src={user?.photo}
                  alt="User Profile"
                  className="object-cover w-8 h-8 rounded-full"
                />
              ) : (
                <BsPersonCircle className="text-[#292A34] text-xl" />
              )}
              <h1 className="text-[#292A34] text-sm">{user?.name || "User"}</h1>
            </div>
          </div>
        </div>

        {/* Button Container for Add Your Own Date */}
        <div className="flex justify-end">
          
        </div>
      </div>
      <div className='min-h-screen bg-white'>
      <div className='flex justify-center text-4xl font-bold pt-11'>NO Record</div>
      </div>

    </div>
  )
}

export default Synchronization