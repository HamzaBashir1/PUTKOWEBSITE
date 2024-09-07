import React from 'react';

const Email = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] mb-10">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Image */}
      <img
        src='/Email1.png'
        alt='Email Banner'
        className='w-full h-full object-cover object-center'
      />

      {/* Content Positioned at the Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-[24px] sm:text-lg md:text-3xl lg:text-3xl mb-2 font-bold leading-10">
          Action, news, and interesting things to email
        </h1>
        <p className="text-white mb-4 text-sm sm:text-lg md:text-xl lg:text-lg">
          Be the first to know about releases, industry news, and insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-md">
          <input 
            placeholder='Enter your email' 
            className='bg-white rounded-lg py-2 px-4 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto'
          />
          <button className='rounded-lg bg-[#4FBE9F] py-2 px-4 text-white w-full sm:w-auto'>
            Subscribe
          </button>
        </div>
        <p className='text-white text-xs mt-2'>
          We care about your data in our <span className='underline'>privacy policy</span>
        </p>
      </div>
    </div>
  );
}

export default Email;
