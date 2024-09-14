"use client"
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const LastStep = ({setTab}) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1'>
          <h1 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
            Billing data
          </h1>
          <p className='mb-4 text-sm sm:text-base'>
            Fill in the invoicing data for the company or individual, where the pre-invoice will be sent and, after payment, the invoice for the selected services.
          </p>
          <div>
            <div onClick={togglePopup} className='flex items-center cursor-pointer'>
              <button className='p-2 mr-2 text-white bg-red-600 rounded-full'>
                <BiPlus size={24} />
              </button>
              <p className='text-sm sm:text-base'>Add Billing address</p>
            </div>
          </div>
        </div>

        <div className='flex-1 max-w-xl'>
          <h1 className='mb-4 text-lg font-bold sm:text-xl md:text-2xl'>Summarization</h1>
          <hr className='mb-4 h-[2px] bg-gray-400' />
          <div className='flex flex-col mb-4 md:flex-row md:justify-between'>
            <div className='flex flex-col'>
              <p className='text-sm md:text-base'>Subscription for 12 months</p>
              <p className='text-sm md:text-base'>From 13.9.2024 to 13.9.2025</p>
            </div>
            <div>
              <h2 className='font-bold '>Included in the price</h2>
            </div>
          </div>
          <hr className='mb-4 h-[2px] bg-gray-400' />
          <div className='flex justify-between mb-4'>
            <h2 className='text-sm md:text-base'>Service "Profi 12 months"</h2>
            <p className='text-sm font-bold md:text-base'>€179</p>
          </div>
          <hr className='mb-4 h-[2px] bg-gray-400' />
          <div className='flex justify-between mb-4'>
            <h2 className='text-sm md:text-base'>Total without VAT</h2>
            <p className='text-sm font-bold md:text-base'>€149.17</p>
          </div>
          <hr className='h-1 mb-4 bg-gray-300' />
          <div className='flex justify-between mb-10'>
            <h2 className='text-xl'>Including VAT</h2>
            <p className='text-xl font-bold'>€179</p>
          </div>
          <p className='text-sm md:text-base'>
            The stated amount represents the final price including VAT. After payment, you will receive an invoice by email, which you can also find in your account.
          </p>
        </div>
      </div>

      <div className='flex items-end mt-8'>
        <button className='px-4 py-2 bg-gray-300 rounded' onClick={() => setTab(2)}>Back</button>
        <button className='px-4 py-2 text-white bg-blue-600 rounded'>Finish</button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-full max-w-md p-6 bg-white rounded-lg'>
            <h2 className='mb-4 text-xl font-bold'>Add Billing Address</h2>
            <form className='space-y-4'>
              <div>
                <label className='block mb-1 text-sm font-bold'>Name</label>
                <input
                  type='text'
                  className='w-full p-2 border rounded'
                  placeholder='Company or Individual Name'
                />
              </div>
              <div>
                <label className='block mb-1 text-sm font-bold'>Address</label>
                <input
                  type='text'
                  className='w-full p-2 border rounded'
                  placeholder='Billing Address'
                />
              </div>
              <div>
                <label className='block mb-1 text-sm font-bold'>Tax ID</label>
                <input
                  type='text'
                  className='w-full p-2 border rounded'
                  placeholder='Tax Identification Number'
                />
              </div>
              <div className='flex justify-end space-x-4'>
                <button
                  type='button'
                  
                  onClick={() => setTab(2)}
                  className='px-4 py-2 bg-gray-300 rounded'>
                  Cancel
                </button>
                <button type='submit' className='px-4 py-2 text-white bg-blue-600 rounded'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default LastStep;
