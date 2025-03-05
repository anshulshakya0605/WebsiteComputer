import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'

function Contact() {
  return (
    <div className='flex items-center justify-center mt-5 '>
      <div className='w-full max-w-md bg-slate-100 rounded-lg p-8 shadow-md'>
        <h1 className='text-3xl font-semibold'>Contact Us</h1>
        <div className='text-2xl font-semibold mt-3 pb-3'>
          Director : <span className='text-orange-700'>Mr. Amit Shakya</span>
        </div>
        <div className='mt-5 font-semibold text-xl'>Inquiry For Any Question</div>
        <div className='mt-4'>
          <p className='mt-2 flex items-center justify-start text-xl'> <FaWhatsapp className='inline mr-2 text-green-600' /> 
          <a href="https://wa.me/919548769563/?text=Hi">+91-9548769563</a> </p>
          <p className='mt-2 flex items-center justify-start text-xl'> <FaWhatsapp className='inline mr-2 text-green-600' /> 
          <a href="https://wa.me/917505509970/?text=Hi">+91-7505509970</a> </p>
          <p className='mt-2 flex items-center justify-start text-xl'> <FaWhatsapp className='inline mr-2 text-green-600' /> 
          <a href="https://wa.me/916397214317/?text=Hi">+91-6397214317</a> </p>
          
          <p className='mt-2 flex items-center justify-start text-xl'> <MdEmail className='inline mr-2 text-gray-800' /> 
          <a className='text-md' href="mailto:shribalajicomputer9548@gmail.com">shribalajicomputer9548@gmail.com</a> </p>
        </div>

        <div className='mt-4'>
            <p className='text-xl font-semibold'>Address:</p>
            <p className='font-semibold'>Shanti Colony Mainpuri Phatak Etawah</p>
        </div>

      </div>
    </div>
  )
}

export default Contact;