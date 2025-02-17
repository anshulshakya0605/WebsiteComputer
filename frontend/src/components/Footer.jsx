import React from 'react'
import {FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {FaPhoneVolume } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='w-full max-w-screen-2xl py-5 shadow-md bg-slate-100 mt-10'>

      <div className='flex items-center justify-center gap-4 pb-3'>
        <Link to='/about' className='hover:text-gray-800 hover:underline underline-offset-2 font-semibold'>About Us</Link>
        <Link to='/contact' className='hover:text-gray-800 hover:underline underline-offset-2 font-semibold'>Contact</Link>
        <Link to='/course' className='hover:text-gray-800 hover:underline underline-offset-2 font-semibold'>Course</Link>
        <Link to='/gallery' className='hover:text-gray-800 hover:underline underline-offset-2 font-semibold'>Gallery</Link>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <a href="https://www.instagram.com/shribalajicomputerbalaji/"> <FaInstagram className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' /> </a>
        <a href="https://wa.me/919548769563/?text=Hi"> <FaWhatsapp className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' /> </a>
        <a href="tel:+91-9548769563"> <FaPhoneVolume className='text-2xl hover:scale-90 transition-all duration-300 cursor-pointer' /> </a>
      </div>
      <div className='text-center pt-5 pb-3'>Copyright &copy; { new Date().getFullYear()} - All Right Reserved. </div>
      <div className='text-center '> Developed By: <span className='text-orange-700'>Anshul Shakya</span> </div>
    </footer>
  )
}

export default Footer;