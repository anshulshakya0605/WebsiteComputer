import React, { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import { FaCaretDown, FaCaretUp, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className='container min-w-full sticky z-50 top-0'>
      <div className='flex w-full p-1 items-center justify-between mx-auto bg-slate-100 shadow-md px-6'>
        <img src={logo} className='w-72' alt="" />
        <div className='hidden md:flex items-center justify-between gap-8'>
          <NavLink to='/' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`}>Home</NavLink>

          <NavLink to='/about' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700`}>About</NavLink>

          <div className='relative' onMouseEnter={() => setIsCourseDropdownOpen(true)} onMouseLeave={() => setIsCourseDropdownOpen(false)} >
          <NavLink to='/course' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700 flex items-center justify-center`}>Courses <span className='ml-1'> {!isCourseDropdownOpen ? <FaCaretDown/> : <FaCaretUp/>} </span> </NavLink>

            {isCourseDropdownOpen && (
              <div className='absolute left-0 w-48 bg-white shadow-lg rounded-md p-3'>
                <NavLink className="block font-semibold text-black p-1 rounded hover:bg-orange-100">BCC</NavLink>
                <NavLink className="block font-semibold text-black p-1 rounded hover:bg-orange-100">CCC</NavLink>
                <NavLink className="block font-semibold text-black p-1 rounded hover:bg-orange-100">DCA</NavLink>
                <NavLink className="block font-semibold text-black p-1 rounded hover:bg-orange-100">ADCA</NavLink>
              </div>
            )}

          </div>

          <NavLink to='/gallery' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700`}>Gallery</NavLink>

          <NavLink to='/contact' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700`}>Contact</NavLink>

          <div className='hidden lg:flex p-1 w-full rounded-md shadow border focus-within:ring-1 focus-within:border-blue-300  items-center justify-between'>
            <input type="text" placeholder='Search here...' className='outline-none bg-transparent' />
            <FaSearch className='mr-2 cursor-pointer' />
          </div>
          <button className='bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-800 duration-200'>Login</button>
        </div>

        {/* mobile-menu-hamburger  */}

        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu}> <GiHamburgerMenu className='text-2xl font-bold' /> </button>
        </div>

      </div>

      {/* mobile-menu-dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-slate-100 space-y-3 px-6'>
          <NavLink to='/' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`} onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`} onClick={closeMobileMenu}>About</NavLink>
          <NavLink to='/course' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`} onClick={closeMobileMenu}>Courses</NavLink>
          <NavLink to='/gallery' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`} onClick={closeMobileMenu}>Gallery</NavLink>
          <NavLink to='/contact' className={({ isActive }) => `block font-semibold hover:underline duration-200 ${isActive ? 'text-orange-700' : 'text-black'}`} onClick={closeMobileMenu}>Contact</NavLink>

          {/* mobile-menu-search bar & button */}

          <div className='p-1 w-full rounded-md shadow border focus-within:ring-1 focus-within:border-blue-300 flex items-center justify-between'>
            <input type="text" placeholder='Search here...' className='outline-none bg-transparent' />
            <FaSearch className='mr-2 cursor-pointer' />
          </div>
          <button className='bg-orange-700 text-white font-semibold py-2 w-full rounded-lg hover:bg-orange-800 duration-200 mb-3'>Login</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;