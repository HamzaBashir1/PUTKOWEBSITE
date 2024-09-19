import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi';

const Review = () => {
  const [overallRating, setOverallRating] = useState(0);
  const [categoryRatings, setCategoryRatings] = useState({
    Location: 0,
    Communication: 0,
    Equipment: 0,
    Cleanliness: 0,
    ClientCare: 0,
    WiFi: 0,
    Activities: 0,
    PriceQuality: 0,
  });

  const handleOverallStarClick = (index) => {
    setOverallRating(index + 1);
  };

  const handleCategoryStarClick = (category, index) => {
    setCategoryRatings({ ...categoryRatings, [category]: index + 1 });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Overall Rating:", overallRating);
    console.log("Category Ratings:", categoryRatings);
    // You can add more functionality such as sending the data to an API
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="font-bold text-3xl mb-4">Evaluation</h1>
      <p className="mb-4">
        Write a review that reflects your experience and can help future guests make a choice. Please refrain from profanity, personal attacks, false or misleading information. Such posts are not allowed and will be deleted.
      </p>
      <hr className="my-4" />
      <div className="flex items-center gap-3 mb-4">
        <img src='bedroom.png' alt="Apartment" className='w-16 h-16 rounded-full' />
        <h1 className="text-xl font-semibold">Apartment Kosice</h1>
      </div>
      <hr className="my-4" />

      <input type='text' placeholder='Name' required className="w-full mb-2 p-2 border rounded" />
      <input type='text' placeholder='Surname' required className="w-full mb-2 p-2 border rounded" />
      <input type='email' placeholder='Email' required className="w-full mb-4 p-2 border rounded" />

      <hr className="my-4" />
      <div className='flex items-center mb-4'>
        <h1 className="mr-4">Overall Rating</h1>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <BiStar
              key={index}
              className={`cursor-pointer ${index < overallRating ? 'text-yellow-500' : 'text-gray-400'}`}
              size={24}
              onClick={() => handleOverallStarClick(index)}
            />
          ))}
        </div>
      </div>

      <label className="block mb-1">Evaluation</label>
      <textarea placeholder='Describe your experience' className="w-full mb-4 p-2 border rounded" rows={4} />

      <label className="block mb-1">Pluses</label>
      <textarea placeholder='What did you like' className="w-full mb-4 p-2 border rounded" rows={2} />

      <label className="block mb-1">Cons</label>
      <textarea placeholder='What were you not happy with...' className="w-full mb-4 p-2 border rounded" rows={2} />

      <h1 className="font-bold text-lg mb-2">Refinement of assessment</h1>
      <hr className="my-4" />
      {Object.keys(categoryRatings).map((category, index) => (
        <div key={index} className='flex justify-between items-center mb-2'>
          <h1>{category}</h1>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star, idx) => (
              <BiStar
                key={idx}
                className={`cursor-pointer ${idx < categoryRatings[category] ? 'text-yellow-500' : 'text-gray-400'}`}
                size={24}
                onClick={() => handleCategoryStarClick(category, idx)}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default Review;
