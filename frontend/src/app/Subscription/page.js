"use client"
import React, { useState } from 'react'
import SubscriptionPriceList from './component/SubscriptionPriceList'
import RentOptions from './component/RentOptions'
import Navbar from './component/Navbar'

import FormControl from './component/FormControl'

const page = () => {
  const [currentTab, setCurrentTab] = useState(0); 
  const setTab = (newTab) => {
    setCurrentTab(newTab);
  };
  return (
    <div>
    <Navbar/>
    <FormControl/>
      
    </div>
  )
}

export default page
