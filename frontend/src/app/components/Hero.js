'use client';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const locationLabel = "Destination";
  const checkInLabel = "Check-in";
  const checkOutLabel = "Check-out";
  const guestLabel = "Who";

  return (
    <>
      <Hero
        locationLabel={locationLabel}
        checkInLabel={checkInLabel}
        checkOutLabel={checkOutLabel}
        guestLabel={guestLabel}
        openModal={openModal}
      />
      {isModalOpen && <SearchModal closeModal={closeModal} />}
    </>
  );
};

const Hero = ({ locationLabel, checkInLabel, checkOutLabel, guestLabel, openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, role, token } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="border-gray-200 bg-transparent dark:bg-transparent dark:border-gray-700 absolute top-0 left-0 w-full z-50">
        <div className="flex flex-wrap items-center justify-between mx-4 md:mx-20 p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/putko.png" className="h-8" alt="Logo" />
          </Link>
          <div className="flex items-center space-x-4">
            {token && user ? (
              <Link
                href={`/${role === "guest" ? "Profile" : "Profile"}`}
                className="flex items-center"
              >
                <figure className="w-[45px]">
                  <img src={user?.photo} className="w-full rounded-full" alt={user?.name} />
                </figure>
              </Link>
            ) : (
              <Link href="/login">
                <button className="bg-[#4FBE9F] py-2 px-6 text-white font-[600] flex items-center justify-center rounded-lg">
                  Login
                </button>
              </Link>
            )}
            <FaRegHeart className="text-gray-900 dark:text-gray-100 text-xl hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
            <button
              onClick={toggleMenu}
              className="p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`fixed top-0 right-0 mt-16 mr-4 w-80 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 z-40 rounded-lg shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
            <div className="relative h-full">
              <ul className="flex flex-col font-medium mt-8 rounded-lg">
                <h1 className='font-bold px-4 py-2'>For Customers</h1>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Customers</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">How Booking Works</a></li>
                <hr />
                <h1 className='font-bold px-4 py-2'>For Accommodation Providers</h1>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Providers</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Rent with Putko</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="pt-[230px] bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/bb47/c92b/c5bf527b8df6eb4e119ac00e8d535333?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALEXUeZPfeLyTULExIMJn6tmS2jwXJVE4hUeR16yTGIgQyg2hPSEsCHakcJnOaFukasSskvxGH-E0J-rC~3k5WbUWyGzbutcY5JQ0jqkmc7PvcYHbatT0AJjJQf4LDSeWYkpt5hitOR8xFFiE9TWPxanA0Y8YI3SgbKXyDUdFVf9MuUE6s2HPqfog4Vd0OLhPaJxHFC~ap0g0F58JlCg83MVgjZ28EfG3wK2uHmK0urt~7~Wr68ilMrFeMkUIeenuwTddpSBusdaUlUr1QXuJBoC-dvmvXoyVI0CpWKf1fUvV8DVTEm1Yphw0wRim-QjdwExDAvUsFiXHDeWEkILHg__')] h-[600px] sm:h-[500px] md:h-[600px] lg:h-[720px] xl:h-[720px] relative overflow-hidden bg-blend-darken"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="relative z-10 flex flex-col items-start ml-6 sm:ml-10 md:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            No matter where <br /> you're going to, we'll <br /> take you there
          </h1>

          <div
            onClick={openModal}
            className="mt-6 border w-full sm:w-[350px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-transparent border-gray-300"
          >
            <div className="flex flex-row items-center justify-between px-4">
              <div className="text-xs font-semibold text-white">{locationLabel}</div>
              <div className="hidden sm:block text-xs font-semibold border-x px-4 text-center text-white">
                {checkInLabel} - {checkOutLabel}
              </div>
              <div className="text-xs pl-4 font-semibold text-white">
                {guestLabel}
              </div>
              <BiSearch className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchModal = ({ closeModal }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, guests });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter a location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Number of guests"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#4FBE9F] text-white rounded-lg hover:bg-green-500"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
