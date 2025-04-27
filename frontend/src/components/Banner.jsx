import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row items-center bg-blue-500 text-white rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 py-10 shadow-2xl relative overflow-hidden'>
      {/* Left Section */}
      <div className='flex flex-col gap-4 md:w-1/2 text-center md:text-left z-10 md:pr-10'>
        <h2 className='text-3xl font-semibold'>Book Appointment With 100+ Trusted Doctors</h2>
        <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white sm:text-base text-gray-600 cursor-pointer px-8 py-3 rounded-full mt-6 font-medium hover:bg-gray-200 transition duration-300 shadow-lg'>
          Create Account
        </button>
      </div>
      {/* Right Section */}
      <div className='hidden md:flex justify-center md:w-1/2 relative z-10 md:pl-10'>
        <img className='w-72 lg:w-96 transform scale-110 md:scale-125 drop-shadow-2xl transition duration-500 ease-in-out' src={assets.appointment_img} alt='Appointment' />
      </div>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-72 h-72 bg-white opacity-20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-72 h-72 bg-white opacity-20 rounded-full blur-3xl'></div>
    </div>
  );
};

export default Banner;
