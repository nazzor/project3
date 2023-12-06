import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'
import { useState } from 'react'

const NavBar = () => {
const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1400px] mx-auto flex justify-between items-center p-4'>
      {/* Left Side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-2xl lg:text-3xl px-2'>
          The Best <span className='font-bold text-blue-500'>Coupons</span>
        </h1>
        
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[700px]'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Coupons...' />
      </div>

      {/* Login/Register Buttons */}
      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-blue-500 text-white rounded-full p-2'>Register</p>
          <p className='p-2'>Login</p>
      </div>

      {/* Cart Button */}
      <button className='bg-blue-500 text-white hidden md:flex items-center p-2 px-5 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full top-0 left-0 h-screen z-10'></div> : ''}

      {/* Side Menu */}
      <div className={nav ? 'fixed h-screen bg-white top-0 left-0 w-[300px] z-10 duration-300' : 'fixed h-screen bg-white top-0 left-[-100%] w-[300px] z-10 duration-300'}>
      <AiOutlineClose onClick={()=> setNav(!nav)}
      size={30} className='absolute right-4 top-4 cursor-pointer' />
      <h2 className='text-2xl p-4'>
          The Best <span className='font-bold'>Coupons</span>
      </h2>
      <nav>
        <ul>
          <li className='text-xl py-4 flex'>
            <TbTruckDelivery size={25} className='mx-4' /> Orders
          </li>
          <li className='text-xl py-4 flex'>
            <MdFavorite size={25} className='mx-4' /> Favorites
          </li>
          <li className='text-xl py-4 flex'>
            <FaWallet size={25} className='mx-4' /> Wallet
          </li>
          <li className='text-xl py-4 flex'>
            <MdHelp size={25} className='mx-4' /> Help
          </li>
          <li className='text-xl py-4 flex'>
            <AiFillTag size={25} className='mx-4' /> Promotions
          </li>
          <li className='text-xl py-4 flex'>
            <BsFillSaveFill size={25} className='mx-4' /> Best Ones
          </li>
          <li className='text-xl py-4 flex'>
            <FaUserFriends size={25} className='mx-4' /> Invite Friends
          </li>
        </ul>
      </nav>
      </div>
    
    </div>
  )
}

export default NavBar