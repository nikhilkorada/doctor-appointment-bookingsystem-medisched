import React,{useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const navigate = useNavigate();

    const {token, setToken, userData} = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false);

    const logout =()=>{
        setToken(false)
        localStorage.removeItem('token')
    }
  
  return (
    <div className='flex items-center justify-between text -sm py-4 mb-5 border-b border-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/' >
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to ='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token && userData
                ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={userData.image} alt="" />
                <img className='w-2.5' src={assets.downArrow} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        {userData.role === 'doctor' && (
                            <p onClick={()=>navigate('doctor-appointments')} className='hover:text-black cursor-pointer'>Doctor Appointments</p>
                        )}
                        <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
                :<button onClick={()=>navigate('/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300">Create Account</button>
            }
            {/* Menu Icon (Hamburger) */}
            <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt=""/>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 z-20 h-screen bg-white transition-all duration-300 ease-in-out ${
                showMenu ? 'w-3/4 p-4' : 'w-0 p-0 overflow-hidden'} md:hidden shadow-lg`}>
                <div className="flex items-center justify-between mb-6">
                    <img src={assets.logo} alt="Logo" className="w-24" />
                    <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" className="w-6 h-6 cursor-pointer"/>
                </div>
                <ul className="flex flex-col gap-4 text-lg font-medium">
                    <NavLink to="/" className="hover:text-blue-600 transition-colors duration-200"><p>HOME</p></NavLink>
                    <NavLink to="/doctors" className="hover:text-blue-600 transition-colors duration-200"><p>ALL DOCTORS</p></NavLink>
                    <NavLink to="/about" className="hover:text-blue-600 transition-colors duration-200"><p>ABOUT</p></NavLink>
                    <NavLink to="/contact" className="hover:text-blue-600 transition-colors duration-200"><p>CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar