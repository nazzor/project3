import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const LoginPage = () => {
  return (
    <div>
        <div>
        <div className='relative w-full h-screen bg-black/50'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src='https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="/" />
    
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center p-14'>Coupons.</h2>
            {/*<div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>*/}
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2 rounded-lg' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 rounded-lg' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-blue-500 hover:bg-blue-600 relative text-white rounded-xl'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Forgot your password?</p>
        </form>
    </div>
    </div>
        </div>
    </div>
  )
}

export default LoginPage
