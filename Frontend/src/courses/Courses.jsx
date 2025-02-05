import React from 'react'
import Course from '../components/course'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Courses() {
  
  return (
    <>
     <Navbar />
     <div className="min-h-screen">
        <Course />
     </div>   
     <Footer />
    </>
  )
}

export default Courses
