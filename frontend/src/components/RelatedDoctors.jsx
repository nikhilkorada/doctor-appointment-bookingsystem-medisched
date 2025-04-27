import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc,setRelDoc] = useState([])

    useEffect(()=>{
        if(doctors.length >0 && speciality){
            const doctorsData = doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    },[doctors,speciality,docId])


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-grey-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Related Doctors</h1>
    <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='w-full grid grid-cols-4 grid-rows-1 gap-6 pt-5 px-3 sm:px-0'>
      {relDoc.slice(0, 5).map((item, index) => (
        <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300 shadow-lg' key={index}>
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
      ))}
    </div>
    <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-100 text-grey-600 px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all duration-300 cursor-pointer'>More</button>
  </div>
  )
}

export default RelatedDoctors