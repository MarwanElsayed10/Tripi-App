"use client"
import { useEffect, useState } from "react"
import DestinationSlider from "../Helper/DestinationSlider"
import SectionHeading from "../Helper/SectionHeading"

const Destination = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="destination" className="pt-20 pb-8">
      {/* Section Heading */}
      <SectionHeading heading="Exploring Popular Destinations" subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliquid quae cum omnis adipisci fugit sapiente nam odio, praesentium libero. Eaque repudiandae excepturi deleniti pariatur iusto ea." />
      {/* Section Content */}
      <div className="mt-14 w-[85%] mx-auto">
        {isLoading && (
          <div id='spin' className='flex justify-center items-center mx-auto my-auto pt-20'>
            <div className="loader">
              <div className="spinner"></div>
            </div>
          </div>
        )}
        <DestinationSlider />
      </div>
    </div>
  )
}

export default Destination