"use client"
import { useRef, useState } from "react";
import SearchBox from "../Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleVideoEnd = () => {
    // شغّل الأنيميشن
    setShowOverlay(true);

    // رجّع الفيديو لأول ثانية بعد شوية (وقت الأنيميشن)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }

      // شيل الأوفرلاي بعد الأنيميشن
      setShowOverlay(false);
    }, 250); // مدة الأنيميشن
  };

  return (
    <div className="relative w-full h-[120vh] sm:h-screen">
      {/* overlay */}
      <div className="absolute w-full h-full top-0 left-0 opacity-50 bg-gray-500"></div>
      {/* Overlay Animation */}
      <div
        className={`
          absolute inset-0 bg-white
          pointer-events-none
          transition-opacity duration-500 ease-in-out
          ${showOverlay ? "opacity-15" : "opacity-0"}
        `}
      ></div>
      {/* video bg */}
      <video ref={videoRef} onEnded={handleVideoEnd} src="/images/hero1.mp4" playsInline autoPlay muted preload="metadata" className="w-full h-full object-cover"></video>
      {/* Text Content */}
      <div className="z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full sm:mt-7 md:mt-0">
        <div className=" flex items-center justify-center flex-col w-full h-full">
          <div>
            <h1 className="text-[25px] mb-4 md:mb-2 md:mt-4 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">Let&apos;s Enjoy The Nature</h1>
            <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">Get the best prices on +2,000,000 properties worldwide</p>
          </div>
          <SearchBox/>
          {/*  Search Button */}
          <Link href="#">
          <div className="flex items-center space-x-4">
                    <button className=" md:px-20 md:py-2.5 mt-[-5%] px-10 py-2 text-white font-medium text-base hover:scale-110 bg-rose-500 hover:bg-rose-600 transition-all duration-200 rounded-lg cursor-pointer">
                        Search Now
                    </button>
                </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
