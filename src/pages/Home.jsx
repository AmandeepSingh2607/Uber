import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // w-[398px] h-[705px] 
    <div className="relative flex flex-col justify-between items-center h-screen w-fu bg-cover bg-center"
      style={{ backgroundImage: `url('https://cdn.gobankingrates.com/wp-content/uploads/2022/11/iStock-1311247904-1.jpg')` }}
    >
      {/* Logo at the top */}
      <div className=" mt-8 w-16 ">
        <img src="https://logospng.org/download/uber/logo-uber-4096.png" alt="Logo" className="w-24 h-24" />
      </div>

      {/* Bottom section with text and button */}
      <div className="bg-white w-full p-6 rounded-t-3xl text-center">
        <h2 className="text-xl font-bold mb-4">get started with uber</h2>
       
        <Link  to={'/login'}  className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg">
          Continue
          <span className="ml-2">→</span> {/* Arrow symbol */}
     
        </Link>
      </div>
    </div>
  );
}

export default Home