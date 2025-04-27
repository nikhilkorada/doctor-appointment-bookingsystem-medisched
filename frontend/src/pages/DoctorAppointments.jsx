import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const DoctorAppointments = () => {

  const { backendUrl, token } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const months = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const navigate = useNavigate()

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
  }

  const getDoctorAppointments = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/doctor/appointments', {headers:{token}})
      if(data.success){
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      getDoctorAppointments()
    } else {
      navigate('/login')
    }
  },[token])

  return (
    <div>
      <p className='pb-3 text-xl mt-12 text-zinc-700 font-medium border-b'>My Appointments</p>
      <div>
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 h-32 bg-indigo-50' src={item.userData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.userData.name}</p>
                <p>{item.userData.email}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.userData.address.line1}</p>
                <p className='text-xs'>{item.userData.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)}| {item.slotTime}</p>
              </div>
              <div className='flex flex-col gap-2 justify-end'>
                {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                {!item.cancelled && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Active</button>}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-4 text-gray-500">No appointments found</p>
        )}
      </div>
    </div>
  )
}

export default DoctorAppointments 