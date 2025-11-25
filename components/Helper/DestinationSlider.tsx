"use client"
import { useData } from '@/app/context/dataContext';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RatingHelper from './RatingHelper';

const responsive = {
  largeDevices: {
    breakpoint: { max: 3000, min: 2024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 2024, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 3,
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

const DestinationSlider = () => {
  const {place} = useData();
  return (
    <div>
    <Carousel
        swipeable={true}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-45-px"
        itemAriaLabel='destination'
        centerMode={true}
        
        >
          {place.map((dest)=>{
            return(
              <div key={dest.id} className='m-3'>
                <Link href={dest.image_url} target='_blank' scroll={false}>
                <div className='relative h-[400px]'>
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
                  {/* Image */}
                  <Image src={dest.image_url} loading="eager" alt={dest.country} width={650} height={500} className='h-full w-full object-cover rounded-lg '/>
                </div>
                </Link>
                {/* Text Content*/}
                <div className='flex items-center justify-center flex-col '>
                  <h4 className='text-[16px] font-semibold mt-4 h-5'>{dest.name}</h4>
                  <h1 className='text-[18px] font-bold mt-2'>{dest.country}</h1>
                  <p className='text-sm text-gray-600 mt-1.5'>{dest.annual_visitors} Visitors</p>
                  <RatingHelper rate={dest.rating}/>
                </div>
              </div>
            )
          })}
    </Carousel>
    </div>
  )
}

export default DestinationSlider
