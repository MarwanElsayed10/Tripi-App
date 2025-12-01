"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards ,Autoplay } from 'swiper/modules';

import 'swiper/css/autoplay';

// react
import { useRef } from 'react';

// data
import { reviewData } from '@/public/data/data';
import RatingHelper from './RatingHelper';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

const ReviewSlider = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s:SwiperType, time:number, progress:number):void => {
    if (progressCircle.current) {
    progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
  }

  if (progressContent.current) {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }};

  return (
    <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="1800" data-aos-duration="1300">
      <Swiper effect={'cards'} autoplay={{delay:10000}} pagination={{clickable: true,}}navigation={true}  grabCursor={true} modules={[EffectCards ,Autoplay]} onAutoplayTimeLeft={onAutoplayTimeLeft} className='md:w-[360px] md:h-[350px] w-[90%] h-[300px]'>
        {reviewData.map((review)=> {
            return (
                <SwiperSlide key={review.id} className='bg-white rounded-3xl block'>
                    <div className='w-[80%] mx-auto mt-9'>
                        {/* text */}
                        <p className='text-xs sm:text-sm md:text-base font-semibold text-center'>{review.review}</p>
                        {/* rate */}
                        <div className='flex flex-col justify-center items-center pt-2'>
                            <RatingHelper rate={review.rate}/>
                        </div>
                        {/* user profile */}
                        <div className='mt-2'>
                            <div className='flex items-center justify-center space-x-4'>
                                <Image src={review.image} alt={review.name} width={60} height={60} className='rounded-full'/>
                                <div className='flex items-center justify-center flex-col'>
                                    <p className='text-sm sm:text-lg font-semibold'>{review.name}</p>
                                    <p className='text-gray-600 text-xs sm:text-base'>{review.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
                    <div className="autoplay-progress text-sm" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
      </Swiper>
    </div>
  )
}

export default ReviewSlider
