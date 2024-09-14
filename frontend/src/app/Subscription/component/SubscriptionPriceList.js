"use client";
import React from 'react';
import ProfessionalCard from './ProfessionalCard';
import StandardCard from './StandardCard';
import BasicCard from './BasicCard';

function SubscriptionPriceList({ setTab }) {
  return (
    <div>
      <div className="py-12 bg-gray-50">
        {/* Subscription Cards */}
        <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-8 xl:px-32">
          <div className="w-full h-full max-w-lg p-4 cursor-pointer border border-gray-200">
            <ProfessionalCard />
          </div>
          <div className="w-full h-full max-w-lg p-4 cursor-pointer border border-gray-200">
            <StandardCard />
          </div>
          <div className="w-full h-full max-w-lg p-4 cursor-pointer border border-gray-200">
            <BasicCard />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-end mx-8">
        <button
          className="py-2 text-gray-500 px-9 hover:text-gray-700 focus:outline-none"
          onClick={() => setTab(0)}
        >
          Back
        </button>
        <button
          className="py-2 text-white bg-pink-500 rounded-md shadow px-9 hover:bg-pink-600 focus:outline-none"
          onClick={() => setTab(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SubscriptionPriceList;
