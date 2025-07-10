'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/AppButton';
import Typography from '@/components/GradientText/Typography';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

interface PerformanceCarouselProps {
  items: Array<any>;
  autoplay?: boolean;
  autoplayInterval?: number;
  heading?: string;
  subText?: string;
}

const PerformanceCarousel: React.FC<PerformanceCarouselProps> = ({
  items = [],
  autoplay = true,
  autoplayInterval = 5000,
  heading,
  subText,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="w-full h-full bg-white-500 relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <div data-aos="fade-up">
          <Typography as="h2" variant="h2-medium-magistral" className="mb-2 text-center">
            {heading}
          </Typography>
          <Typography variant="subtext-regular-jakarta" className="text-[#0A0A0A] text-center">
            {subText}
          </Typography>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={
            autoplay
              ? {
                delay: autoplayInterval,
                disableOnInteraction: false,
              }
              : false
          }
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 1.6,
            },
          }}
          className="w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="w-full relative">
                  <div className="flex items-center justify-center">
                    <Link href={item.exploreLink}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={600}
                        className="object-contain mx-auto"
                        data-aos="fade-up"
                      />
                    </Link>
                  </div>

                  {isActive && (
                    <>
                      {/* Logo */}
                      <div className="text-center mt-8" data-aos="zoom-in">
                        <Image
                          src={item.logo}
                          alt={`${item.name} Logo`}
                          width={300}
                          height={20}
                          className="mx-auto md:h-[70px] h-[50px] md:w-[350px] w-[200px] object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div className="mt-4 text-center flex justify-center" data-aos="fade-up">
                        <div className="grid grid-cols-2 gap-y-10 md:gap-0 md:flex w-[90%] md:w-full flex-wrap justify-center  text-xs md:text-base text-[#0A0A0A] font-magistral font-normal">
                          <Typography variant="body-regular-magistral" className='border-r-2 border-gray-100 md:px-4 px-2'>
                            <Typography as="span" variant="body-regular-magistral"><b className='md:text-xl text-lg md:bg-transparent bg-[#fff8ea] rounded-xl px-2 py-1'>{item.range}</b><br></br>Range</Typography>
                          </Typography>
                          <Typography variant="body-regular-magistral" className='md:border-r-2 border-gray-100 md:px-4 px-2'>
                            <Typography variant="body-regular-magistral" as="span"><b className='md:text-xl text-lg md:bg-transparent bg-[#fff8ea] rounded-xl px-2 py-1'>{item.maxSpeed}</b><br></br>Speed</Typography>
                          </Typography>
                          <Typography variant="body-regular-magistral" className='border-r-2 border-gray-100 md:px-4 px-2'>
                            <Typography variant="body-regular-magistral" as="span"><b className='md:text-xl text-lg md:bg-transparent bg-[#fff8ea] rounded-xl px-2 py-1'>{item.motorPower}</b><br></br>Motor</Typography>
                          </Typography>
                          <Typography variant="body-regular-magistral" className=' md:px-4 px-2'>
                            <Typography variant="body-regular-magistral" as="span"><b className='md:text-xl text-lg md:bg-transparent bg-[#fff8ea] rounded-xl px-2 py-1'>LiFePO₄</b><br></br>Battery</Typography>
                          </Typography>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-8 flex justify-center gap-4 flex-wrap px-4">
                        <Button
                          variant="outline"
                          label="Download Brochure"
                          iconName="BookDown"
                          iconPosition="left"
                          href={item.brochureLink}
                          className="border-2 border-black-30 text-black-30 hover:bg-gray-100 px-5 py-2.5 rounded font-medium text-sm sm:text-base transition"
                          target="_blank"
                          download={true}
                        />

                        <Button
                          variant="solid"
                          label="Explore More"
                          iconName="ArrowUpRight"
                          iconPosition="right"
                          href={item.exploreLink}
                          textColor="text-[#000]"
                          className="bg-crownOrange text-[#000] hover:bg-[#e6531f] px-5 py-2 rounded font-medium text-sm sm:text-base transition"
                          target="_blank"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 -translate-y-1/2 left-[15%] [@media(max-width:640px)]:left-[0%] text-black-30 rounded-full p-2 hover:scale-110 transition z-10 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={35} className="stroke-2" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 -translate-y-1/2 right-[15%] [@media(max-width:640px)]:right-[0%] text-black-30 rounded-full p-2 hover:scale-110 transition z-10 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={35} className="stroke-2" />
        </button>
      </div>
    </div>
  );
};

export default PerformanceCarousel;
