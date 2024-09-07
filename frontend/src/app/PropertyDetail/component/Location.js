import React from 'react';
import Image from 'next/image';
import { ImCart, ImPieChart, ImSpoonKnife } from 'react-icons/im';
import location from '../../../../public/location.png';

const Location = () => {
  return (
    <div className='p-4 sm:p-6 mt-5 bg-white rounded-lg lg:mr-[440px] lg:ml-[18px]'>
      <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Location</h1>
      <p className='p-2 rounded-md mb-4 text-sm sm:text-base'>
        Slovakia / Martin district / Bela - Dulice
      </p>

      <Image src={location} alt="Location" className='w-full h-auto mb-4' />

      <p className='mb-4 text-sm sm:text-base'>
        <span className='font-bold'>Villa LIMACO Jasenská Dolina</span>
        Villa LIMACO Jasenská Dolina is located in the area of ​​Jasenská Dolina on the outskirts of the village of
        Turčianske Jaseno, just 1 km from the Jasenská Dolina Ski Center and the Jasenská Bike Park. You can also Show More
      </p>

      <hr className='mb-4' />

      <div className='space-y-4'>
        <div className='flex md:flex-row justify-between items-center'>
          <div className='flex flex-row items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImSpoonKnife />
            </div>
            <p className='text-sm sm:text-base'>Restaurant</p>
          </div>
          <p className='text-sm sm:text-base'>1.10KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex md:flex-row justify-between items-center'>
          <div className='flex flex-row items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImCart />
            </div>
            <p className='text-sm sm:text-base'>Food</p>
          </div>
          <p className='text-sm sm:text-base'>1.50KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex md:flex-row justify-between items-center'>
          <div className='flex flex-row items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImPieChart />
            </div>
            <p className='text-sm sm:text-base'>Supermarket</p>
          </div>
          <p className='text-sm sm:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex md:flex-row justify-between items-center'>
          <div className='flex flex-row items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <span className='text-xl'>🚍</span>
            </div>
            <p className='text-sm sm:text-base'>Train Station</p>
          </div>
          <p className='text-sm sm:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex md:flex-row justify-between items-center'>
          <div className='flex flex-row items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <span className='text-xl'>✈️</span>
            </div>
            <p className='text-sm sm:text-base'>Airport</p>
          </div>
          <p className='text-sm sm:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
      </div>
    </div>
  );
};

export default Location;
