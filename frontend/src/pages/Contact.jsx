import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-grey-500 text-center text-2xl pt-10'>
          <p>CONTACT <span className='text-grey-700 font-semibold'>US</span></p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_doctor} alt="" />
          <div className='flex flex-col items-start justify-center gap-6'>
            <p className='font-semibold text-grey-600 text-lg'>OUR OFFICE</p>
            <p className='text-grey-500'>54709 Willms station <br /> Suite 350, Washington, USA</p>
            <p className='text-grey-500'>ph:9876543210 <br />email:nikhilkorada7@gmail.com</p>
            <p className='font-semibold text-grey-600 text-lg'>CAREERS AT MEDISCHED</p>
            <p className='text-grey-500'>Learn more about our terms and openings.</p>
            <button className='border border-black py-4 px-8 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact