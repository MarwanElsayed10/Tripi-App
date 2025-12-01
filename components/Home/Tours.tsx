import { useEffect, useState } from "react";
import SectionHeading from "../Helper/SectionHeading"
import { useData } from '@/app/context/dataContext';
import Carousel from "react-multi-carousel";
import Image from "next/image";
import RatingHelper from "../Helper/RatingHelper";

const Tours = () => {
    const {tourData} = useData()
    const [isLoading, setIsLoading] = useState(true)
    
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
}
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 4000)
  return () => clearTimeout(timer)
}, [])
  return (
    <div id="tours" className="pt-16 pb-16">
        {/* Section Heading */}
      <SectionHeading heading="Tours all over world" subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliquid quae cum omnis adipisci fugit sapiente nam odio, praesentium libero. Eaque repudiandae excepturi deleniti pariatur iusto ea."/>
        {/* Section Content */}
        {isLoading && (
          <div id='spin' className='flex justify-center items-center mx-auto my-auto mt-36'>
            <div className="loader">
              <div className="spinner"></div>
            </div>
          </div>
        )}
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-anchor-placement="top-center" className='w-[80%] mx-auto mt-16'>
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
                        itemAriaLabel='tour'
                        >
                            {tourData.map((tour)=>{
                              return(
                                <div key={tour.id}>
                                  <div className={`relative h-[250px] w-[90%] rounded-lg cursor-pointer group overflow-hidden `}>
                                      {/* overlay */}
                                      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                                      {/* Image */}
                                      <Image loading="eager" src={tour.image} alt={tour.title} width={500} height={500} className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"/>
                                      {/* TextContent */}
                                    </div>
                                    <div className={`flex items-center justify-center flex-col w-[90%] `}>
                                        <h1 className={`text-center mt-4 h-6 text-[18px] font-medium hover:text-black cursor-pointer transition-all duration-200 `}>{tour.title}</h1>
                                        <p className="text-[16px] mt-7 font-bold mb-6 ">{tour.location}</p>
                                        <div className="flex flex-row">
                                          <p className="text-sm text-gray-800">Exceptional&nbsp;/</p>
                                          <p className="text-sm text-gray-800 font-bold"> &nbsp; {tour.reviews} Reviews</p>
                                        </div>
                                        <p className="mt-3 text-gray-700 font-medium text-lg">AVG Price:&nbsp;{tour.price}$</p>
                                        <p className="text-gray-700 font-medium text-sm">{tour.type}</p>
                                        <p className="text-gray-700 font-medium text-sm">{tour.time}</p>
                                        <RatingHelper rate={tour.rating}/>
                                      </div>
                                </div>
                              )
                            })}
                </Carousel>
            </div>

    </div>
  )
}

export default Tours
