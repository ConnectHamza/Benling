"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface Slide {
  image: string;
  heading: string;
}

interface CarouselProps {  
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className='w-full rounded-30 flex items-center justify-center mt-10 overflow-hidden relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000 }}        
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className='w-full md:h-[70vh] h-[50vh] flex items-end md:justify-start justify-center rounded-30'
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            >
              <h3 className='text-white font-bold md:text-[33px] text-[18px] p-5'>
                {slide.heading}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-button-prev custom-swiper-button"></div>
      <div className="swiper-button-next custom-swiper-button"></div> */}
    </div>
  );
};

export default Carousel;