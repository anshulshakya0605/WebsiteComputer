import React from 'react'
import banner from '../assets/images/banner/computer-center.jpg'

function Header() {
  return (
    <>
    <div className='p-10 '>
    <img src={banner} className='w-[100%] rounded-2xl' alt="banner" />
    </div>
    </>
  )
}

export default Header;