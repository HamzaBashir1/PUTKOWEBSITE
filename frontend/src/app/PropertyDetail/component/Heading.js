import React from 'react';
import Image from 'next/image';
import { BsBox, BsPersonBadgeFill, BsStar } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { BiHeart, BiUpload } from 'react-icons/bi';
import map from '../../../../public/map.png'; // Adjust the path if necessary

const Heading = () => {
    return (
        <div className="px-4 md:px-10 lg:px-20 pt-40 bg-[#f8f8f8]">
            {/* Heading Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                {/* Left Section */}
                <div className="flex flex-col space-y-2 mb-4 lg:mb-0">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Villa LLIMIACO Jasenka Dolina</h1>
                    
                    <div className="flex flex-col md:flex-row md:space-x-4 md:items-center space-y-2 md:space-y-0">
                        <h2 className="text-sm md:text-base">Slovakia / Martin district / Bela - Dulice</h2>
                        
                        <div className="flex items-center space-x-1">
                            <h2 className="font-bold text-sm md:text-base">5.0</h2>
                            <div className="flex space-x-1">
                                <BsStar className="text-yellow-500" />
                                <BsStar className="text-yellow-500" />
                                <BsStar className="text-yellow-500" />
                                <BsStar className="text-yellow-500" />
                                <BsStar className="text-yellow-500" />
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <BsPersonBadgeFill />
                            <h2 className="text-sm md:text-base">8 persons</h2>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <MdVerified className="text-green-500" />
                            <h2 className="font-bold text-sm md:text-base">Verified accommodation</h2>
                        </div>
                    </div>
                </div>
                
                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <Image src={map} alt="Location map" width={50} height={50} className="rounded-md" />
                    <BiHeart className="text-xl md:text-2xl cursor-pointer hover:text-red-500" />
                    <BiUpload className="text-xl md:text-2xl cursor-pointer hover:text-blue-500" />
                    <BsBox className="text-xl md:text-2xl cursor-pointer hover:text-gray-500" />
                </div>
            </div>
        </div>
    );
}

export default Heading;
