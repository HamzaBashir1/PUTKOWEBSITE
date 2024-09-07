"use client";
import React, { useState, useEffect } from 'react';
import { BsStarFill, BsWifi } from 'react-icons/bs';
import { GiPoolDive, GiKnifeFork } from 'react-icons/gi';
import { FaParking, FaSmokingBan, FaPaw } from 'react-icons/fa';

const Overview = () => {
  

  return (
    <div className="bg-white p-4 sm:p-8 flex flex-col lg:flex-row lg:space-x-8 rounded-lg">
      {/* Features and Evaluation Section */}
      <div className="flex-1 lg:mb-0 mb-8 ">
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-4 rounded-lg">
            <Feature icon={<GiPoolDive size={24} />} title="Wellness" description="Outdoor pool, children's pool,..." />
            <Feature icon={<BsWifi size={24} />} title="Wi-Fi" description="For free" />
            <Feature icon={<FaParking size={24} />} title="Parking" description="For free" />
            <Feature icon={<FaSmokingBan size={24} />} title="Smoking" description="Allowed only on reserved..." />
            <Feature icon={<FaPaw size={24} />} title="Pets" description="Are not allowed" />
            <Feature icon={<GiKnifeFork size={24} />} title="Diet" description="Own catering" />
          </div>

          {/* Evaluation Section */}
          <div className="flex flex-col items-center flex-shrink-0 w-full md:w-1/3 bg-white p-4 rounded-lg">
            <h1 className="font-bold text-lg mb-2">Evaluation</h1>
            <h2 className="font-bold text-4xl mb-2">5.0</h2>
            <div className="flex mb-2">
              <BsStarFill size={24} color="#00FF00" />
              <BsStarFill size={24} color="#00FF00" />
              <BsStarFill size={24} color="#00FF00" />
              <BsStarFill size={24} color="#00FF00" />
              <BsStarFill size={24} color="#00FF00" />
            </div>
            <p className="text-sm">4 ratings</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="flex items-center p-4 space-x-4">
    <div className="p-2 rounded-full bg-gray-100">{icon}</div>
    <div>
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default Overview;
