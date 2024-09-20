"use client";
import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi';
import { Base_URL } from '../../config';

const Review = ({ userId, data  }) => {
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
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    reviewText: '',
    pluses: '',
    cons: '',
  });
  const [loading, setLoading] = useState(false);

  const handleOverallStarClick = (index) => {
    setOverallRating(index + 1);
  };

  const handleCategoryStarClick = (category, index) => {
    setCategoryRatings((prev) => ({ ...prev, [category]: index + 1 }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const accommodationId = data?._id

  console.log('Accommodation ID:', accommodationId);
    console.log('User ID:', userId);

  const handleSubmit = async () => {
    setLoading(true); // Start loading state

    // Check if accommodationId and userId are defined
    if (!accommodationId || !userId) {
        alert("Accommodation and user information is required.");
        setLoading(false);
        return;
    }
    

    const reviewData = {
        ...formData,
        overallRating,
        categoryRatings,
        accommodationId, // Use accommodationId directly
        userId, // Use userId directly
    };

    try {
        const response = await fetch(`${Base_URL}/reviews/${accommodationId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        if (!response.ok) {
            const errorResult = await response.json();
            throw new Error(errorResult.message || 'Failed to submit the review');
        }

        const result = await response.json();
        console.log('Review Data:', reviewData);
        alert(result.message); // Success message
    } catch (error) {
        console.error('Error submitting the review:', error);
        alert(`Error: ${error.message}`); // More detailed error message
    } finally {
        setLoading(false); // Reset loading state
    }
};


  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="font-bold text-3xl mb-4">Evaluation</h1>
      <p className="mb-4">
        Write a review that reflects your experience and can help future guests make a choice.
      </p>
      <hr className="my-4" />

      {/* User Input Fields */}
      <input type='text' name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' required className="w-full mb-2 p-2 border rounded" />
      <input type='text' name="surname" value={formData.surname} onChange={handleInputChange} placeholder='Surname' required className="w-full mb-2 p-2 border rounded" />
      <input type='email' name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' required className="w-full mb-4 p-2 border rounded" />

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
              aria-label={`Rate ${index + 1} star`}
            />
          ))}
        </div>
      </div>

      {/* Review Text Area */}
      <label className="block mb-1">Evaluation</label>
      <textarea name="reviewText" value={formData.reviewText} onChange={handleInputChange} placeholder='Describe your experience' className="w-full mb-4 p-2 border rounded" rows={4} />

      <label className="block mb-1">Pluses</label>
      <textarea name="pluses" value={formData.pluses} onChange={handleInputChange} placeholder='What did you like' className="w-full mb-4 p-2 border rounded" rows={2} />

      <label className="block mb-1">Cons</label>
      <textarea name="cons" value={formData.cons} onChange={handleInputChange} placeholder='What were you not happy with...' className="w-full mb-4 p-2 border rounded" rows={2} />

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
                aria-label={`Rate ${category} ${idx + 1} star`}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading} // Disable button while loading
        className={`mt-4 w-full p-2 ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded hover:bg-blue-600`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default Review;
