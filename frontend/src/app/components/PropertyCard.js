import React from 'react';
import Image from 'next/image';
import { BiHeart } from 'react-icons/bi';
import { LuWaves } from "react-icons/lu";
import { MdLocalParking } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import putko from '../../../public/bedroom.jpg';

const PropertyCard = () => {
  return (
    <div className='flex flex-col border rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
        <div className='relative w-full h-56 sm:h-64'>
            <Image src={putko} alt="Bedroom" layout='fill' objectFit='cover' />
            <div className='absolute top-2 right-2 bg-[#00000059] rounded-full p-1 sm:p-2'>
                <BiHeart className='text-xl sm:text-2xl text-[#4FBE9F]' />
            </div>
        </div>
        <div className='p-3 sm:p-4'>
            <h1 className='font-bold text-base sm:text-lg text-[#1F2937]'>The Lounge & Bar</h1>
            <p className='text-xs sm:text-sm text-[#666666]'>12 persons, 220 m², 4 bedrooms, 2 bathrooms</p>
            <div className='flex flex-wrap gap-2 mt-2 sm:mt-3'>
                <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                    <LuWaves className='text-[#292A34]' />
                </div>
                <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                    <MdLocalParking className='text-[#292A34]' />
                </div>
                <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                    <IoWifi className='text-[#292A34]' />
                </div>
                <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                    <MdOutlinePets className='text-[#292A34]' />
                </div>
            </div>
            <div className='flex items-center mt-2 sm:mt-3'>
                <CiLocationOn className='text-[#292A34]' />
                <p className='text-xs sm:text-sm text-[#292A34] ml-1 sm:ml-2'>Cottage, Oščadnica, Slovakia</p>
            </div>
            <hr className="my-3 sm:my-4 h-0.5 bg-neutral-100 dark:bg-white/10" />
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-sm sm:text-base'>$311 <span className='text-xs sm:text-sm font-normal'>/night</span></h1>
                <div className='flex items-center'>
                    <CiStar className='text-[#DC2626]' />
                    <h1 className='ml-1 font-bold text-sm'>4.9</h1>
                    <p className='text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2'>(122)</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PropertyCard;
