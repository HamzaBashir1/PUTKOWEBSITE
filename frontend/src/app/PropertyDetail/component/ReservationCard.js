"use client";
import React, { useState, useEffect } from "react";
import { BsStarFill, BsWifi } from "react-icons/bs";
import { GiPoolDive, GiKnifeFork } from "react-icons/gi";
import { FaParking, FaSmokingBan, FaPaw } from "react-icons/fa";

const ReservationCard = ({ data }) => {
  const price = data?.price || [];
  const nightlyRate = price;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(0);
  const [reserved, setReserved] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNights(differenceInDays > 0 ? differenceInDays : 0);
    } else {
      setNights(0);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    const subtotal = nightlyRate * nights;
    const discount = nights >= 7 ? 28 : 0; // example: weekly discount
    const cleaningFee = 20;
    const serviceFee = 83;
    const taxesAndFees = 29;
    const totalPrice = subtotal - discount + cleaningFee + serviceFee + taxesAndFees;
    setTotal(totalPrice);
  }, [nights]);

  const handleReserve = () => {
    if (checkInDate && checkOutDate && guests > 0) {
      setReserved(true);
      alert("Reservation successful!");
    } else {
      alert("Please select valid check-in and check-out dates and number of guests.");
    }
  };

  
  const wifi = data?.wifi;
  const wellness = data?.wellness;
  const parking = data?.parking;
  const smoking = data?.smoking;
  const pets = data?.pets;
  const diet = data?.diet;


  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex flex-col p-4 lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <div className="bg-white p-4 sm:p-8 flex flex-col lg:flex-row lg:space-x-8 rounded-lg">
            {/* Features and Evaluation Section */}
            <div className="flex-1 lg:mb-0 mb-8 ">
              <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0">
                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-4 rounded-lg">
                  
                  {wifi && <Feature icon={<BsWifi size={24} />} title="Wi-Fi" description={wifi} />}
                  {wellness && <Feature icon={<GiPoolDive size={24} />} title="Wellness" description={wellness} />}
                  {parking && <Feature icon={<FaParking size={24} />} title="Parking" description={parking} />}
                  {smoking && <Feature icon={<FaSmokingBan size={24} />} title="Smoking" description={smoking} />}
                  {pets && <Feature icon={<FaPaw size={24} />} title="Pets" description={pets} />}
                  {diet && <Feature icon={<GiKnifeFork size={24} />} title="Diet" description={diet} />}
                 
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
          </div>
        </div>
        
        {/* Reservation and Pricing Section */}
        <div className="p-5 bg-white rounded-lg">
          <div className="flex justify-between mx-5 mb-4 sm:flex-row">
            <h1 className="text-xl font-bold sm:text-2xl">${price} /<span className="text-sm">night</span></h1>
            <p className="text-xl font-bold sm:text-2xl">5.0</p>
          </div>

          {/* Reservation Details */}
          <div className="p-4 mb-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between mb-4 space-y-4 sm:flex-row sm:space-y-0">
              <div className="relative flex flex-col flex-1">
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-lg h-[55px]"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
                <label className="absolute left-2 top-1 text-[8px] font-bold">CHECK-IN</label>
              </div>
              <div className="relative flex flex-col flex-1">
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-lg h-[55px]"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
                <label className="absolute left-2 top-1 text-[8px] font-bold">CHECK-OUT</label>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative mb-4">
                <input 
                  type="number" 
                  className="w-full p-2 border rounded-lg h-[55px]"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                />
                <label className="absolute text-[8px] font-bold left-2 top-2">GUESTS</label>
              </div>
              <button 
                className="w-full py-2 font-bold text-white bg-green-500 rounded-lg"
                onClick={handleReserve}
              >
                Reserve
              </button>
              {reserved ? (
                <p className="mt-2 text-sm text-center text-green-500">Reservation successful! You won't be charged yet.</p>
              ) : (
                <p className="mt-2 text-sm text-center">You won't be charged yet</p>
              )}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="p-4 bg-white rounded-lg">
            <div className="flex justify-between mb-2">
              <p>${nightlyRate} * {nights} nights</p>
              <p>${nightlyRate * nights}</p>
            </div>
            {nights >= 7 && (
              <div className="flex justify-between mb-2">
                <p>Weekly discount</p>
                <p>-$28</p>
              </div>
            )}
            <div className="flex justify-between mb-2">
              <p>Cleaning fee</p>
              <p>$62</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Service fee</p>
              <p>$83</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Occupancy taxes and fees</p>
              <p>$29</p>
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100" />
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
        </div>
      </div>
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

export default ReservationCard;
