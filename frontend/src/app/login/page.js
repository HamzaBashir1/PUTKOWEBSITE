import React from 'react'
import Navbar from './component/Navbar'
import Login from './component/login'

const page = () => {
  return (
    <div >
      <Navbar/>
      <div className='my-44'>
        <Login/>
      </div>
      
    </div>
  )
}

export default page
