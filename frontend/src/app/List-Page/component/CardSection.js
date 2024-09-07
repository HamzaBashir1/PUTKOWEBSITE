import React from 'react';
import PropertyCard from '../../components/PropertyCard';

const CardSection = () => {
  return (
    <div className='mx-4 sm:mx-20 pt-10'>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:gap-6'>
        <div className='w-full lg:w-[calc(24%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(24%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(25%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(25%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(24%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(24%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(25%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
        <div className='w-full lg:w-[calc(25%-0.75rem)] mb-4 lg:mb-0'>
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
