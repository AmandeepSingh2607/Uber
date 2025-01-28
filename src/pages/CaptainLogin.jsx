import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [CaptainData , setCaptainData] = useState({})
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password:password
      })
   
    setEmail('')
    setPassword('')
}
  
  return (
    <div className=''>
    <div className='  h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat'
    style= {{ backgroundImage:  ` url('https://th.bing.com/th/id/OIP.reRbJikmMRg4k4oyKCf2ggHaLz?w=1060&h=1690&rs=1&pid=ImgDetMain')` }}
    >
      <div className='p-7 '>
        
        <img className='w-24 h-24  mb-10 ' src="https://th.bing.com/th/id/R.c19854362428bc5ec9067c90abca1940?rik=7%2faVqJK2jiFi4A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG30.png&ehk=6OxNZp32UbZQA9GftCZRHATmk3u6K1oi5VaJQzDLODE%3d&risl=&pid=ImgRaw&r=0" alt="" />
        
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
         <p className='mt-4'>Join as fleet? <Link to={'/captain-signup'} className='text-blue-600'> REgister as a Captain</Link></p>
        </form>
      </div>
      <div className='bg-gray-300 w-full p-9 rounded-t-3xl text-center '>
        <Link to={'/login'} className="flex items-center justify-center w-full bg-[#f3c164] text-white py-3 rounded-lg">Sign in as User</Link>
      </div>
    </div>
  </div>
  )
}

export default CaptainLogin