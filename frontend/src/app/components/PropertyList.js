import React from 'react'
import { doctors } from './../../assets/data/doctors';
// import DoctorCard from './DoctorCard';
import { Base_URL } from '../config.js';
import useFetchData from '../hooks/useFetchData.js';
import Loader from './Loader/Loading.js';
import Error from './Error/Error.js';
import PropertyCard from './PropertyCard.js';

const PropertyList = () => {
  return (
    <>
        {loading && <Loader/>}
        {error && <Error/>}

            { !loading && !error && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {doctors.map(doctor=> (
                <PropertyCard key={Property.id} doctor={doctor}/>
                ))}
            </div>
        )}
    </>
  )
}

export default PropertyList
