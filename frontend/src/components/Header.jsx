import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-4 md:px-6 lg:px-8'>
        {/* Left side of the header */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]md:mb-[-30px]'> 
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight '>
                Book Appointment <br/>With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.groupprofiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors and schedule your appointment </p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 '>Book Appointment</a>
        </div>
        {/* Right side of the header */}
        <div className='md:w-1/2 relative'>
            <img className=' bottom-0 h-auto rounded-lg' src={assets.groupdoctors} alt="" />
        </div>
    </div>
  )
}

export default Header