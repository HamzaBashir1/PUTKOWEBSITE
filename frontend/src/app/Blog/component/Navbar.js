"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);

  const handleScroll = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (menuRef.current) {
      menuRef.current.classList.toggle("show_menu");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-wrap items-center justify-between p-4 mx-4 md:mx-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/putko.png" className="h-8" alt="Logo" />
        </Link>

        {/* Centered Search Input */}
        <div className="flex justify-center flex-1">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-[400px]">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for articles..."
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FBE9F]"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
              <BiSearch />
            </button>
          </form>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {token && user ? (
            <Link href={`/${role === "guest" ? "Profile" : "Profile"}`} className="flex items-center">
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

          <FaRegHeart className="text-xl text-gray-900 cursor-pointer dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300" />
          <button
            onClick={toggleMenu}
            className="w-10 h-10 p-2 text-sm text-gray-900 rounded-lg dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
