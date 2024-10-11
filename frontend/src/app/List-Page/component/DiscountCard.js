import React from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import useFetchData from '@/app/hooks/useFetchData';
import { Base_URL } from '@/app/config';
import Loading from '@/app/components/Loader/Loading';
import Error from '@/app/components/Error/Error';

const DiscountCard = () => {
  const { data: accommodationData, loading, error } = useFetchData(`${Base_URL}/accommodation`);

  const handleCardClick = (id) => {
    // Navigate to the PropertyDetails page with the property id
    router.push(`/PropertyDetail/${id}`);
  };

  return (
    <>
     {loading && <Loading />}
      {error && <Error />}

      {!loading && !error && (
        <div className='p-4'>
        <div className='flex flex-col rounded-lg bg-white shadow-md'>
          <Image src="/bedroom.jpg" 
          width={1000}
          height={50}
          alt="Bedroom"
          style={{ objectFit: 'cover', width: '100%' }}
          className='rounded-t-lg w-full h-48 sm:h-64' />  
          <div className='p-4 flex justify-between items-center'>
            <div className='flex flex-col'>
              <h1 className='text-[#DA0034] text-lg sm:text-xl'>
                from <span className='font-bold'>€243</span>
              </h1>
              <p className='text-sm mt-1'>1 night</p>
            </div>
            <CiHeart className='text-[#DA0034] cursor-pointer' />
          </div>
        </div>
      </div>
      )}
    </>
    
  );
};

export default DiscountCard;
