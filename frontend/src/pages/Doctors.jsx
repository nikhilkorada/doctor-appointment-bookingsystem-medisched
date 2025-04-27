import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'

const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc,setFilterDoc]= useState([])
  const navigate = useNavigate()
  
  const {doctors} = useContext(AppContext)

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc =>doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-grey-600'>Browse through our doctors speciality.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-grey-600 text-sm'>
          <p onClick={()=>speciality === 'General Physician'? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
          <p onClick={()=>speciality === 'Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatrician'? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? "bg-indigo-100 text-black" : ""}`}>Pediatrician</p>
          <p onClick={()=>speciality === 'Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-4 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300 shadow-lg' key={index}>
                <img className='w-full h-40 object-cover bg-blue-50' src={item.image} alt={item.name} />
                <div className='p-4 text-center'>
                  <div className={`flex items-center justify-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                    <span className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></span>
                    <p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-gray-500 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors