"use client"
import { useData } from "@/app/context/dataContext"

import SectionHeading from '../Helper/SectionHeading'
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

import Carousel from 'react-multi-carousel';
import RatingHelper from "../Helper/RatingHelper";

const Hotel = () => {
    const {hotelData} = useData();
    const responsive = {
  largeDevices: {
    breakpoint: { max: 3000, min: 2024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 2024, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 564 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  smallDevices: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  return (
    <div className='pt-20 pb-20'>
      {/* Section Heading */}
      <SectionHeading heading="Recommended Hotels"  subHeading= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliquid quae cum omnis adipisci fugit sapiente nam odio, praesentium libero. Eaque repudiandae excepturi deleniti pariatur iusto ea."/>
      {/* Hotel Content */}
      <div className='w-[80%] mx-auto mt-16'>
        <Carousel
                swipeable={true}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-45-px"
                itemAriaLabel='destination'
                >
        
        {hotelData.map((hotel)=> {
        return (
            <div key={hotel.id}>
                {/* Hotel card */}
                <div className="relative h-[300px] w-[90%] rounded-lg cursor-pointer group overflow-hidden">
                    {/* add to fav button */}
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
                        <FaHeart className="w-3 h-3 "/>
                    </div>
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                    {/* Image */}
                    <Image loading="eager" src={hotel.image} alt={hotel.name} width={500} height={500} className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"/>
                    {/* TextContent */}
                </div>
                    <div className="flex items-center justify-center flex-col w-[90%]">
                      <h1 className="mt-4 h-6 text-[18px] font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200 ">{hotel.name}</h1>
                      <p className="text-[16px] text-gray-600 mt-3 font-medium mb-6 ">{hotel.location}</p>
                      <div className="flex flex-row">
                        <p className="text-sm text-gray-800">Exceptional&nbsp;/</p>
                        <p className="text-sm text-gray-800 font-bold"> &nbsp; {hotel.reviews} Reviews</p>
                      </div>
                      <p className="mt-3 text-gray-700 font-medium text-lg">Starting From&nbsp;{hotel.price}$</p>
                      <RatingHelper rate={hotel.rating}/>
                    </div>
            </div>
        )
      })}
        </Carousel>
      </div>
      
     </div>
  )
}

export default Hotel
