import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='w-full max-w-screen-2xl py-5 shadow-md bg-slate-100 mt-10'>

      <div className='flex items-center justify-center gap-4 pb-3'>
        <Link to='/about' className='hover:text-gray-800 hover:underline underline-offset-2'>About Us</Link>
        <Link to='/contact' className='hover:text-gray-800 hover:underline underline-offset-2'>Contact</Link>
        <Link to='/course' className='hover:text-gray-800 hover:underline underline-offset-2'>Course</Link>
        <Link to='/' className='hover:text-gray-800 hover:underline underline-offset-2'>Press Kit</Link>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <FaYoutube className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
        <FaFacebook className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
        <FaTwitter className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
      </div>
      <div className='text-center pt-5 pb-3'>Copyright &copy; { new Date().getFullYear()} - All Right Reserved. </div>
      <div className='text-center '> Developed By: <span className='text-orange-700'>Anshul Shakya</span> </div>
    </footer>
  )
}

export default Footer;