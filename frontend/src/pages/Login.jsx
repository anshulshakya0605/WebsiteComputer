import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate,} from 'react-router-dom'

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9001/auth/login', {email, password});
      console.log(response.data);
      navigate('/')
      
    } catch (err) {
      setError(err.response ? err.response.data.message: "Server error")
    }

  } 

  return (
   <div className='flex items-center justify-center min-h-screen'>
    <div className='bg-slate-100 p-8  rounded-lg w-full max-w-sm shadow-lg dark:text-gray-800'>
      <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Login</h1>
       
       <form onSubmit={handleSubmit} >
        
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <div className='w-full border p-1 rounded-md mt-1 focus-within:border-blue-300'>
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter you email...' className='outline-none bg-transparent w-full' />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <div className='w-full border p-1 mt-1 rounded-md focus-within:border-blue-300'>
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password...' className='outline-none bg-transparent w-full' />
          </div>
          
        </div>
          <button type='submit' className='bg-pink-600 text-white py-2 w-1/3 mt-2 rounded-lg hover:bg-pink-700 hover:scale-95 duration-300'>Login</button>

          <p className='mt-4'>You don't have account? {" "} <Link to='/register' className='text-pink-500 hover:underline' >Register</Link> </p>
       </form>
    </div>
   </div>
  )
}

export default Login;