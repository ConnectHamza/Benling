'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../Button/AppButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../GradientText/Typography";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";

interface HomeCarouselProps {
  items: Array<any>;
  autoplay?: boolean;
  autoplayInterval?: number;
  heading?: string;
  subText?: string;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({
  items = [],
  autoplay = true,
  autoplayInterval = 5000,
  heading,
  subText
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="w-full h-full bg-white-500 relative overflow-hidden ">
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <div data-aos="fade-up">
          <Typography variant='h2-medium-magistral' className="mb-2 text-center">
            {heading}
          </Typography>
          <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A] text-center'>
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
          autoplay={autoplay ? {
            delay: autoplayInterval,
            disableOnInteraction: false,
          } : false}
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
            }
          }}
          className="w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="w-full relative">
                  {/* Main Slide */}
                  <div className="flex items-center justify-center">
                    <Link href={item.exploreLink}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      className="object-contain mx-auto"
                      data-aos="fade-up"
                    />
                    </Link>
                  </div>

                  {isActive && (
                    <>
                      {/* Flash Title (Logo) */}
                      <div className="text-center mt-8" data-aos="zoom-in">
                        <Image
                          src={item.logo}
                          alt={`${item.name} Logo`}
                          width={150}
                          height={20}
                          className="mx-auto h-10"
                        />
                      </div>

                      {/* Motorcycle Details */}
                      <div className="mt-4 text-center" data-aos="fade-up">
                        <div className="flex flex-wrap justify-center md:gap-x-8 gap-x-4 text-xs md:text-base text=[#0A0A0A] font-magistral font-normal">
                          <Typography variant="body-regular-magistral">
                            <Typography as="span" variant="body-regular-magistral">{item.range}</Typography>
                          </Typography>
                          <Typography variant="body-regular-magistral">
                            <Typography variant="body-regular-magistral" as="span">{item.maxSpeed}</Typography>
                          </Typography>
                          <Typography variant="body-regular-magistral">
                            <Typography variant="body-regular-magistral" as="span">{item.motorPower}</Typography>
                          </Typography>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-8 flex justify-center gap-4 flex-wrap px-4" data-aos="fade-up">
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
                          textColor='text-[#000]'
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

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 -translate-y-1/2 left-[15%] [@media(max-width:640px)]:left-[0%] text-black-30 rounded-full p-2 hover:scale-110 transition z-10 bg-white/80 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={35} className="stroke-2" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 -translate-y-1/2 right-[15%] [@media(max-width:640px)]:right-[0%] text-black-30 rounded-full p-2 hover:scale-110 transition z-40 bg-white/80 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={35} className="stroke-2" />
        </button>

      </div>
    </div>
  );
};

export default HomeCarousel;