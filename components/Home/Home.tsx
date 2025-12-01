"use client"
import { useEffect } from "react"
import Destination from "./Destination"
import Hero from "./Hero"
import Hotel from "./Hotel"
import News from "./News"
import NewsLetter from "./NewsLetter"
import Review from "./Review"
import WhyUs from "./WhyUs"

// AOS
import  AOS from "aos";
import "aos/dist/aos.css"
import Tours from "./Tours"

function Home() {
  useEffect(()=>{
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 600,
        easing:"ease-in-sine",
        delay:200,
        once: true,
        anchorPlacement: "top-bottom",
      })
    }
    initAos();
  },[])
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Destination/>
      <Tours/>
      <Hotel/>
      <WhyUs/>
      <Review />
      <News/>
      <NewsLetter/>
    </div>
  )
}

export default Home
