import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { BsMailbox, BsReply, BsCheck } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';

const Information = () => {
  return (
    <div className='rounded-lg p-6 mt-5 bg-white lg:mr-[440px] lg:ml-[18px]'>
      <h1 className='font-bold text-xl mb-4'>Information about accommodation</h1>
      <p className='mb-4'>
        The entire object | <span>8 persons</span> | 3 bedrooms | 3 bathrooms
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Villa LIMACO Jasenská Dolina</span> is located in the ski recreation center Jasenská Dolina with a direct view of the lifts and slopes in the Martin district and provides accommodation with an outdoor swimming pool in season and an outdoor heated Miweba Whirlpool MSpa Whirlpool pool with an ozone generator and Led Light, including 136 massage jets with UV-C technology for a hygienically flawless and beautiful bathing experience in always freshly prepared clean water as well as an indoor hydromassage whirlpool and a Finnish sauna. The ROYAL&SPA Turčianske Teplice thermal spa with many water attractions and healing pools for children and adults can be found at an accessible distance of approx. 18 km. The satisfaction of our accommodated guests is also evidenced by the 10/10 reviews from the last 45 ratings, which places our accommodation in the TOP 3 accommodation facilities on the portal.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Accommodation</span> with a capacity of 8 basic beds offers a fully equipped kitchen with a living area with a dining area, a fireplace, and access to the terrace, as well as a bathroom with a toilet. The night part on the floor consists of 3 bedrooms, two with access to the balcony, a bathroom, and a separate toilet. On the ground floor, there is a children's corner, a Finnish sauna, a bathroom, a separate toilet, a summer kitchen, and a room for storing skis and bicycles. A high-speed Wi-Fi connection is provided in the accommodation and in the surrounding area. After each occupancy of the accommodation by our guests, the facility is cleaned and disinfected with a professional antibacterial cleaner.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>The exterior</span> also offers an outdoor children's pool in the summer season, a gazebo with seating, a grill, and a stainless steel kettle. You can relax on the garden swing and in the hammocks on the terrace. 5 parking spaces are available near the building.
      </p>

      <hr className='my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
        <div className='bg-[#E7EAEE] p-5'>
          <h1 className='font-bold mb-2'>Equipment and services</h1>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Free Wi-Fi</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>High-speed internet</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Card payment possible</p>
          </div>
          <div className='flex items-center'>
            <BsCheck className='mr-2' />
            <p>Issuing an invoice possible</p>
          </div>
        </div>

        <div className='bg-[#E7EAEE] p-5'>
          <h1 className='font-bold mb-2'>Wellness & spa</h1>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Outdoor pool</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Children's pool</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Hot tub</p>
          </div>
          <div className='flex items-center'>
            <BsCheck className='mr-2' />
            <p>Sauna</p>
          </div>
        </div>

        <div className='bg-[#E7EAEE] p-5'>
          <h1 className='font-bold mb-2'>Sport and entertainment</h1>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Bicycle storage</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Ski room</p>
          </div>
          <div className='flex items-center'>
            <BsCheck className='mr-2' />
            <p>Social games</p>
          </div>
        </div>

        <div className='bg-[#E7EAEE] p-5'>
          <h1 className='font-bold mb-2'>Children</h1>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Children are welcome here</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Family rooms</p>
          </div>
          <div className='flex items-center mb-2'>
            <BsCheck className='mr-2' />
            <p>Children's pool</p>
          </div>
          <div className='flex items-center'>
            <BsCheck className='mr-2' />
            <p>Children's corner</p>
          </div>
        </div>
      </div>

      <hr className='my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />

      <div className='mb-12'>
        <div className='flex items-center mb-2'>
          <CiLock className='mr-2' />
          <p>
            Check-in: <span className='font-bold'>from 15:00 to 23:00</span>, Check-out: <span className='font-bold'>from 5:00 to 11:00</span>
          </p>
        </div>
        <div className='flex items-center mb-2'>
          <BiGlobe className='mr-2' />
          <p>
            Language: <span className='font-bold'>Slovak, Czech, English, German</span>
          </p>
        </div>
        <div className='flex items-center'>
          <BsReply className='mr-2' />
          <p>
            Response speed: <span className='font-bold'>We always try to respond as soon as possible</span>
          </p>
        </div>
      </div>

      <hr className='my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />

      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <img src='/map' alt='Map' className='rounded-full h-12 w-12 mr-4' />
          <div>
            <h1 className='font-bold'>"Villa LIMACO Jasensk</h1>
            <p>Member since February 2, 2023</p>
          </div>
        </div>

        <div>
          <button className='bg-blue-500 text-white p-2 rounded-lg flex items-center'>
            <BsMailbox className='mr-2' />
            Contact accommodation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
