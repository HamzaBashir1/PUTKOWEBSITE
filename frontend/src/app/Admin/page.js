import React from 'react'
import Navbar from './component/Navbar'
import MyAccount from './component/MyAccount'

const page = () => {
  return (
    <div className=''>
      <section>
        <Navbar/>
        <MyAccount/>
      </section>
    </div>
  )
}

export default page
