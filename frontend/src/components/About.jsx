import React from 'react'
import fav from '../assets/images/logo/favicon.png'
function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-6 pt-6'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <img src={fav} alt="" className='mb-5 md:mb-0' />
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <div>
                <h1 className='text-orange-700 font-bold text-3xl mb-3'>About Us</h1>
                <h3 className='text-2xl font-semibold mb-3'>Shree BalaJi Computer Center</h3>
                <p className='text-xl'>Shree Balaji Computer Centre is a well-known basic to advanced computer education institute and training center in Mainpuri phatak near railway crossing Etawah, we are recognised for offering the best computer classes in Etawah at a reasonable & affordable cost. Shree Balaji Computer Center was founded in 2021 with the goal of developing an Basic & Advance knowledge in computers workforce through computer training. The institute has changed over time to serve as a support to the Skill India and Digital India Mission. Our Training has changed lives and our courses are designed by keeping in mind both beginner and advanced students. We are great at offering basic computer tutorials for beginners in Etawah.</p>
            </div>
        </div>
    </div>
  )
}

export default About;