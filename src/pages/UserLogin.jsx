import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData , setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password:password
    })
   
    setEmail('')
    setPassword('')
  
  }
  return (
    <div className=''>
      <div className='  h-screen flex flex-col justify-between bg-cover  bg-no-repeat'
      style= {{ backgroundImage:  ` url('https://freepngimg.com/thumb/building/148536-building-photos-vector-free-clipart-hd.png')` }}
      >
        <div className='p-7'>
          <div className='flex justify-center'>

          <img className='w-24 h-24  mb-10 ' src="https://th.bing.com/th/id/OIP.jZpY3PhRMasAlxoQYBmr-AHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             required 
             type='email' 
             placeholder='email@example.com' 
             className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required type="password"
              placeholder='password'
            />
          <button className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg">Login </button>
           <p className='mt-4 text-red-600'>New User? <Link to={'/signup'} className='text-blue-600'> Create new Account</Link></p>
          </form>
        </div>
        <div className='bg-gray-300 w-full p-9 rounded-t-3xl text-center '>
          <Link to={'/captain-login'} className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg">Sign in as Captain</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin