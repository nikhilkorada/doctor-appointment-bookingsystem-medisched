import React from 'react';
import { SpecialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center text-gray-800 gap-6 py-16 px-4' id='speciality'>
      <h1 className='text-3xl font-medium'>Find By Speciality</h1>
      <p className='text-center text-sm max-w-lg'>
        Browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
      </p>
      <div className='flex flex-wrap justify-center gap-6 pt-5 w-full'>
        {SpecialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-transform transform hover:-translate-y-2 duration-300'
            key={index} 
            to={`/doctors/${item.speciality}`}
          >
            <img className='w-16 sm:w-24 mb-2 rounded-full shadow-md' src={item.image} alt={item.speciality} />
            <p className='font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
