"use client"
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
import { Base_URL } from "../config.js";
import useFetchData from '../hooks/useFetchData.js';
import Loading from './Loader/Loading.js';
import Error from './Error/Error.js';

const PropertyCard = () => {

    const {data: accommodationData, loading, error} = useFetchData(`${Base_URL}/accommodation`);

    console.log(accommodationData);

  return (
    <>
    {loading && <Loading/>}
    {error && <Error/>}

    { !loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accommodationData && accommodationData.map((property) => (
            <div key={property.id} className='flex flex-col border rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <div className='relative w-full h-56 sm:h-64'>
                    {/* Using Image component if available */}
                    <img 
                        src={property.images[0] || '/bedroom.jpg'} 
                        alt={property.name} 
                        className="w-full h-full object-cover" 
                    />
                    <div className='absolute top-2 right-2 bg-[#00000059] rounded-full p-1 sm:p-2'>
                        <BiHeart className='text-xl sm:text-2xl text-[#4FBE9F]' />
                    </div>
                </div>
                <div className='p-3 sm:p-4'>
                    <h1 className='font-bold text-base sm:text-lg text-[#1F2937]'>{property.name}</h1>
                    <p className='text-xs sm:text-sm text-[#666666]'>{property.description}</p>
                    {property.equipmentAndServices && Array.isArray(property.equipmentAndServices) && (
                        <div className='flex flex-wrap gap-2 mt-2 sm:mt-3'>
                            {property.equipmentAndServices.includes('waves') && (
                            <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                                <LuWaves className='text-[#292A34]' />
                            </div>
                            )}
                            {property.equipmentAndServices.includes('Parking') && (
                            <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                                <MdLocalParking className='text-[#292A34]' />
                            </div>
                            )}
                            {property.equipmentAndServices.includes('Free Wifi') && (
                                <div className="border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]">
                                <IoWifi className="text-[#292A34]" />
                                </div>
                            )}
                            {property.pets.includes('They are not allowed') && (
                            <div className='border rounded-lg p-1 sm:p-2 flex items-center border-[#292A34]'>
                                <MdOutlinePets className='text-[#292A34]' />
                            </div>
                            )}
                        </div>
                        )}

                    <div className='flex items-center mt-2 sm:mt-3'>
                        <CiLocationOn className='text-[#292A34]' />
                        <p className='text-xs sm:text-sm text-[#292A34] ml-1 sm:ml-2'>
                            {property.location && property.location.address ? property.location.address : "Unknown location"}
                        </p>
                    </div>

                    <hr className="my-3 sm:my-4 h-0.5 bg-neutral-100 dark:bg-white/10" />
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-sm sm:text-base'>${property.price} <span className='text-xs sm:text-sm font-normal'>/night</span></h1>
                        <div className='flex items-center'>
                            <CiStar className='text-[#DC2626]' />
                            <h1 className='ml-1 font-bold text-sm'>{property.rating}</h1>
                            <p className='text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2'>({property.reviewsCount})</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )}
    </>
  );
}

export default PropertyCard;
