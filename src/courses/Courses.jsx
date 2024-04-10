import React from 'react'
import NavBar from '../components/NavBar'
import Course from '../components/Course'
import Footer from '../components/Footer'


function Courses() {
  return (
    <div>
      <NavBar/>
     <div className='min-h-screen'>
     <Course/>
     </div>
      <Footer/>
    </div>
  )
}

export default Courses
