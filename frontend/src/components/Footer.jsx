import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left side */}
            <div>
                <img className='mb-5 w-50' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-grey-600 leading-6'>Your trusted healthcare partner, making it easy to connect with experienced doctors and book appointments effortlessly. We ensure a smooth and secure experience, so you can focus on what matters most your health. Reliable, convenient, and expert care at your fingertips.</p>
            </div>
            {/* center side */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-grey-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            {/* right side */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-grey-600'>
                    <li>1234567890</li>
                    <li>nikhilkorada7@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer