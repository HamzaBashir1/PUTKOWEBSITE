"use client"
import React, { useState } from 'react';

const images = [
    '/bedroom.jpg',
    '/bedroom.jpg',
    '/bedroom.jpg',
    '/bedroom.jpg',
    '/bedroom.jpg',
    '/bedroom.jpg',
    '/bedroom.jpg',
];

const Photo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div className="bg-white p-8">
            {/* Image Carousel */}
            <div className="relative flex flex-row w-full mb-8">
                {/* Main Image */}
                <div className="w-1/2 pr-2">
                    <img
                        src={images[currentIndex]}
                        alt="Property"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                {/* Thumbnails */}
                <div className="w-1/2 grid grid-cols-2 gap-2">
                    {images.slice(0, 4).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`rounded-md cursor-pointer ${
                                index === currentIndex ? 'border-2 border-black opacity-100' : 'opacity-60'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                {/* See All Photos Button */}
                <button
                    onClick={() => alert('See all photos clicked!')}
                    className="absolute bottom-2 right-2 px-4 py-2 bg-white text-black rounded-md border border-black"
                >
                    See All Photos
                </button>
            </div>
            </div>
    </div>
  )
}

export default Photo
