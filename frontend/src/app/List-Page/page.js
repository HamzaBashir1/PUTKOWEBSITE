import React from 'react'
import Title from './component/Title'
import CardSection from './component/CardSection'
import Discount from './component/Discount'
import Section from './component/Section'
import Pagination from './component/Pagination'
import Filter from './component/Filter'
import CommonSection from './component/CommonSection'
import Email from './component/Email'
import Navbar from './component/Navbar'


const Page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar/>
      
      <div className='bg-[#F3F4F6]'>
        <Title/>
        <CardSection />
        <Discount />
        <Section />
        <CardSection />
        <Pagination/>
        <Filter/>
        <CommonSection/>
        <Email/>
      </div>
    </div>
  )
}

export default Page
