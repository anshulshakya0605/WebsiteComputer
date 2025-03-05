import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:9001/auth/register', {username, email, password});
            console.log(response.data);
            Navigate('/login')
        }
        catch (err) {
            setError(err.response ? err.response.data.message: "Server error")
        }
    }
 
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm w-full dark:text-black'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Register</h1>

        <form onSubmit={handleSubmit}>
          
          <div className='mb-4'>
              <label htmlFor="username">UserName:</label>
            <div className='w-full p-1 mt-1 border rounded-md focus:ring-2 focus-within:border-blue-300'>
              <input 
              type="text" 
              name="username" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
               placeholder='Enter your fullname' className='outline-none bg-transparent w-full'/>
            </div>

          </div>

          <div className='mb-4'>
            <label htmlFor="email">Email:</label>
            <div className='w-full p-1 mt-1 border rounded-md focus:ring-2 focus-within:border-blue-300'>
              <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email' className='outline-none bg-transparent w-full'/>
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor="password">Password:</label>
            <div className='w-full p-1 mt-1 border rounded-md focus:ring-2 focus-within:border-blue-300'>
              <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password' className='outline-none bg-transparent w-full' />
            </div>
          </div>
          
          <div className="mb-3 ">
            <button type='submit' className='bg-pink-600 text-white px-6 py-2 rounded-lg hover:scale-95 hover:bg-pink-700 duration-200'>Register</button>
          </div>
          {error && <p className='text-red-500 mb-3'> {error} </p>}

          <p> You have an account? {" "} <Link to='/login' className='text-pink-500 hover:underline font-semibold cursor-pointer'> Login</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Register;