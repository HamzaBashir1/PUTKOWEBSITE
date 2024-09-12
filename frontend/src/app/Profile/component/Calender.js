"use client";
import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { BiPlus } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import DateRangePicker from "./DateRangePicker";
import { AuthContext } from "../../context/AuthContext";
import AccommodationForm from "./AccommodationForm";

// Helper function to get the number of days in a month
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month (0 is Sunday, 1 is Monday, etc.)
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Calendar component
const Calendar = ({ year, months }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(null); // New state for hovered date
  const [showForm, setShowForm] = useState(false);

  const handleDateChange = (start, end) => {
    console.log("Start Date:", start);
    console.log("End Date:", end);

    setStartDate(start);
    setEndDate(end);
    setShowDatePicker(false);

    // Automatically show the form when both dates are selected
    if (start && end) {
      setShowForm(true);
      console.log("Form should be visible now");
    }
  };

  const isDateInRange = (date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateHovered = (date) => {
    if (!hoveredDate) return false;
    return date.toDateString() === hoveredDate.toDateString();
  };

  const closeForm = () => {
    setShowForm(false); // Close the form and show the original content
    console.log("Form closed");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user } = useContext(AuthContext);

  // Render the form if showForm is true
  if (showForm) {
    return (
      <div className="py-4">
        <button className="text-gray-600 text-2xl" onClick={closeForm}>
          Close Form
        </button>
        <AccommodationForm startDate={startDate} endDate={endDate} />
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Navbar */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:justify-between">
          {/* Left Section: Title and Status */}
          <div className="flex flex-col">
            <h1 className="text-[#292A34] font-bold text-xl md:text-2xl">
              Occupancy calendar
            </h1>
            <p className="text-[#292A34B2] text-sm md:text-xs font-medium">
              Apartment Košice
            </p>
          </div>

          {/* Center Section: Add Accommodation Button */}
          <div
            className="hidden md:flex md:flex-row md:items-center gap-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <CiSearch className="text-xl text-gray-500" />
            <button className="flex items-center bg-white text-black border border-gray-300 px-4 py-2 rounded-lg space-x-2 hover:bg-gray-100">
              <BiPlus className="text-lg" />
              <span>Add Accommodation</span>
            </button>
            <div className="flex items-center gap-2">
              {user?.photo ? (
                <img
                  src={user?.photo}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full object-cover"
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
          <button
            className="flex items-center bg-red-500 text-white rounded-full px-4 py-2 space-x-2 hover:bg-red-600"
            onClick={() => setShowForm(true)}
          >
            <BiPlus className="text-lg" />
            <span className="sm:block hidden">Add Your Own Date</span>
          </button>
        </div>
      </div>

      {/* Date Range Picker */}
      {showDatePicker && (
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDateChange={handleDateChange}
        />
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {months.map((monthIndex, index) => {
          const daysInMonth = getDaysInMonth(year, monthIndex);
          const firstDay = getFirstDayOfMonth(year, monthIndex);

          return (
            <div key={index} className="p-4">
              <h2 className="mb-3 text-lg font-semibold">
                {new Date(year, monthIndex).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {/* Days of the week */}
                {["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"].map(
                  (day) => (
                    <div key={day} className="text-sm text-gray-500">
                      {day}
                    </div>
                  )
                )}

                {/* Empty spaces for days before the first day */}
                {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, i) => (
                  <div key={i}></div>
                ))}

                {/* Dates */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const date = i + 1;
                  const currentDate = new Date(year, monthIndex, date);
                  const isInRange = isDateInRange(currentDate);
                  const isHovered = isDateHovered(currentDate);

                  return (
                    <div
                      key={i}
                      className={`p-2 text-sm rounded cursor-pointer transition-colors duration-200 ${
                        isHovered ? "bg-blue-200" : ""
                      } ${isInRange ? "bg-pink-300" : ""} ${
                        i % 7 === 5 || i % 7 === 6 ? "bg-[#FF1D5340]" : ""
                      }`}
                      onClick={() => {
                        if (!startDate) {
                          setStartDate(currentDate);
                        } else if (!endDate) {
                          setEndDate(currentDate);
                          setShowDatePicker(false);
                          handleDateChange(startDate, currentDate); // Trigger the handleDateChange after setting endDate
                        } else {
                          setStartDate(currentDate);
                          setEndDate(null);
                        }
                      }}
                      onMouseEnter={() => setHoveredDate(currentDate)}
                      onMouseLeave={() => setHoveredDate(null)}
                    >
                      {date}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main component to render calendar for specific months
const App = () => {
  const currentYear = new Date().getFullYear();
  const monthsToShow = [8, 9, 10, 11, 0, 1, 2, 3, 4]; // Array of months index starting from September (8) to May (4) next year

  return (
    <div>
      <Calendar year={currentYear} months={monthsToShow} />
    </div>
  );
};

export default App;
