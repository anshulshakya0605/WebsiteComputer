import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <footer className='w-full max-w-screen-2xl py-5 shadow-md bg-slate-100 mt-10'>

      <div className='flex items-center justify-center gap-4 pb-3'>
        <a href="" className='hover:text-gray-800 hover:underline underline-offset-2'>About Us</a>
        <a href="" className='hover:text-gray-800 hover:underline underline-offset-2'>Contact</a>
        <a href="" className='hover:text-gray-800 hover:underline underline-offset-2'>Course</a>
        <a href="" className='hover:text-gray-800 hover:underline underline-offset-2'>Press Kit</a>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <FaYoutube className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
        <FaFacebook className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
        <FaTwitter className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' />
      </div>
      <div className='text-center py-5'>Copyright &copy; {new Date().getFullYear()} - All Right Reserved. </div>
    </footer>
  )
}

export default Footer;