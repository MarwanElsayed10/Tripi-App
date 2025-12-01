"use client"
import { useData } from '@/app/context/dataContext';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RatingHelper from './RatingHelper';
import { useState, useRef } from 'react'; 

const responsive = {
  largeDevices: {
    breakpoint: { max: 3000, min: 2024 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 2024, min: 1024 },
    items: 4,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 3,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 564 },
    items: 2,
    slidesToSlide: 1 
  },
  smallDevices: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const DestinationSlider = () => {
  const { place } = useData();
  const countries = place.map((p)=> p.country)
  // 2. Initialize State and Ref
  const [searchKey, setSearchKey] = useState('');
  const carouselRef = useRef<Carousel>(null); 

  // 3. Handle Search Logic
  const handleSearch = () => {
    // Find the index of the item where country matches the search key
    // We use toLowerCase() to make it case-insensitive
    const index = countries.findIndex(item =>
      item.toLowerCase() === searchKey.trim().toLowerCase()
    );
    if (index !== -1 && carouselRef.current) {
      // If found, move the carousel to that index
      // The second argument 'true' enables the smooth animation
      carouselRef.current.goToSlide(index , true); 
    } else {
      alert("Country not found in the slider!");
    }
  };

  function backToSlide(){
    carouselRef.current?.goToSlide(0,true)
  }
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      
      {/* --- Search Bar UI Start --- */}
      <div className=" flex justify-center gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Enter country name..." 
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Allow pressing Enter
          className="w-[70%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 text-black transition-all duration-500"
        />
        <button 
          onClick={handleSearch}
          className="bg-rose-500 w-[30%] text-white px-4 py-2 rounded-md hover:bg-rose-600 transition"
        >
          Find Country
        </button>
      </div>
      {/* --- Search Bar UI End --- */}

      <Carousel
        ref={carouselRef} // 4. Attach the Ref here
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        // infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-45-px"
        itemAriaLabel='destination'
        centerMode={true}
        focusOnSelect={true}
      >
        {place.map((dest) => {   
          return(
            <div key={dest.id} className='m-3'>
              <Link href={dest.image_url} target='_blank' scroll={false}>
              <div className='relative h-[400px]'>
                <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
                <Image src={dest.image_url} loading="eager" alt={dest.country} width={650} height={500} className='h-full w-full object-cover rounded-lg '/>
              </div>
              </Link>
              <div className='flex items-center justify-center flex-col '>
                <h4 className='text-[14px] font-semibold mt-4 mb-2 h-5'>{dest.name}</h4>
                <h1 className='text-[14px] font-bold mt-2'>{dest.city}</h1>
                <h1 className='text-[18px] font-bold'>{dest.country}</h1>
                <p className='text-sm text-gray-600 mt-1.5'>{dest.annual_visitors} Visitors</p>
                <RatingHelper rate={dest.rating}/>
              </div>
            </div>
          )
        })}
      </Carousel>
      <button onClick={backToSlide} className='w-full h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white cursor-pointer'>Back to slide 1</button>
    </div>
  )
}

export default DestinationSlider