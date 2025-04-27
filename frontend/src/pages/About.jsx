import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2xl pt-10 text-grey-500'>
          <p>ABOUT <span className='text-grey-700 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_doctor} alt="" />
          <div className='flex flex-col gap-6 justify-center md:w-2/4 text-sm text-grey-600'>
            <p>Welcome to MediSched, your trusted platform for seamless doctor appointment booking. We are committed to simplifying healthcare access by connecting patients with top healthcare professionals effortlessly.</p>
            <b className='text-grey-800'>Our Mission</b>
            <p>At MediSched, our mission is to bridge the gap between patients and healthcare providers by offering a convenient, efficient, and hassle-free appointment scheduling experience. We believe that timely medical care should be accessible to everyone, and our platform ensures just that.</p>
            <b className='text-grey-800'>Why Choose MediSched?</b>
            <ul className="list-none list-inside space-y-1">
              <li>✅ Easy Booking - Find and book appointments with experienced doctors in just a few clicks.</li>
              <li>✅ Verified Doctors - Access a network of certified and trusted healthcare professionals.</li>
              <li>✅ 24/7 Availability - Book appointments anytime, anywhere, without long waiting hours.</li>
              <li>✅ Reminders & Notifications - Stay updated with appointment reminders and real-time updates.</li>
              <li>✅ Secure & Confidential - Your health data and personal information are protected with top-tier security measures.</li>
            </ul>
          </div>
        </div>
        <div className='text-sm space-y-4 justify-center'>
          <b className='text-grey-800 text-xl'>Our Vision</b>
          <p>We envision a future where healthcare is accessible at the fingertips of every individual. With MediSched, we aim to enhance patient experience, optimize healthcare efficiency, and eliminate the stress of waiting times.</p>
          <b className='text-grey-800 text-xl'>Join MediSched Today!</b>
          <p>Experience the future of healthcare with MediSched. Book your appointment today and take the first step toward a healthier tomorrow.</p>
        </div>
    </div>
  )
}

export default About