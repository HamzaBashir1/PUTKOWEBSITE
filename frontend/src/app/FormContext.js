"use client"
// FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
 // State to hold the selected data
 const [selectedPlan, setSelectedPlan] = useState('');
  
 // Function to update selected plan
 const updateSelectedPlan = (plan) => {
   setSelectedPlan(plan);
 };

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <FormContext.Provider value={{ selectedPlan, updateSelectedPlan }}>
      {children}
    </FormContext.Provider>
  );
};
