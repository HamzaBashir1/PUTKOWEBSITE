"use client"
import React from 'react'
import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
// import Article from './component/Article'
import Footer from '../components/Footer/Footer'
// <ArticleLayout/>
function Page() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
    <Navbar onSearch={handleSearch}/>
      <Hero onSearch={handleSearch}/>
      
    <Footer/>
    </div>
  )
}

export default Page
