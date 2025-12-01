"use client";
import { useState } from "react";
import Overlay from "../Helper/Overlay";
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
    const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div id="news-letter" className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
        <BsEnvelopePaper className='w-16 h-16 mt-20 text-white '/>
        <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>your Travel Journey Starts Here</h1>
        <p className='mt-3  text-white text-xs sm:text-sm'>Sign Up And We Will Send The Best Deals For You</p>
        {/* Subscription */}
        <div className='w-full '>
            <input type="text"  className='text-sm px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto  rounded-lg outline-none' placeholder='Email'/>
            <button onClick={() => setShowOverlay(true)} className='cursor-pointer text-sm px-6 py-3.5 bg-blue-800 text-white hover:bg-blue-950 transition-all duration-200 mt-3 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] block mx-auto  rounded-lg outline-none'>Subscribe</button>
        </div>
        {/* Overlay */}
        {showOverlay && (
        <Overlay onClose={() => setShowOverlay(false)} />
      )}  
    </div>
  )
}

export default NewsLetter
