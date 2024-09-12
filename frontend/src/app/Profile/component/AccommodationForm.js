import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const AccommodationForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="max-w-3xl p-4 mx-auto">
      {/* Section 1: Accommodation */}
      <div className="p-4 mb-4 rounded-md">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-medium">1/2 Accommodation</h2>
          <span className="ml-2 text-gray-400">?</span>
        </div>
        <div className="">
          <div className='flex justify-between gap-20'>
            <label className="block text-sm font-medium text-gray-700">
              Accommodation <span className="text-red-500">*</span>
            </label>
            <select className="block w-full lg:w-[420px] p-2 mt-1 border border-gray-300 rounded-md">
              <option>Apartment Košice</option>
            </select>
          </div>
          <br/>
          <div className='flex justify-between gap-20'>
            <label className="block text-sm font-medium text-gray-700">
              Accommodation unit <span className="text-red-500">*</span>
            </label>
            <select className="block w-full lg:w-[420px] p-2 mt-1 border border-gray-300 rounded-md">
              <option>Apartment Košice</option>
            </select>
          </div>
          <div className="flex justify-between gap-20">
            <label className="block text-sm font-medium text-gray-700">
              The period from — to <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={onDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="dd.MM.yyyy"
                placeholderText="Select a date range"
                className="w-full lg:w-[420px] p-2 mt-1 border border-gray-300 rounded-md outline-none text-sm md:text-base text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Note */}
      <div className="p-4 mb-4 rounded-md">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-medium">2/2 Note</h2>
          <span className="ml-2 text-gray-400">?</span>
        </div>
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded-md"
          placeholder="Enter note"
        ></textarea>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button className="px-8 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default AccommodationForm;
