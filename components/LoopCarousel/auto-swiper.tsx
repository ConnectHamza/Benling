"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import GradientText from "../GradientText/gradientHeading";

// Type for each slide
type Slide = {
  image: string | StaticImageData;
  width: number;
  alt: string;
};

interface ColorStop {
  color: string;
  percentage: number;
}

type AutoSwiperProps = {
  slideData: Slide[];
  height?: string | number; 
  maxWidth?: string | number;
  heading: string;
  colors: ColorStop[];
};

export default function AutoSwiper({
  slideData,
  height = "634px",
  maxWidth = "1920px",
  heading,
  colors,
}: AutoSwiperProps) {
  return (
    <div className='w-full flex flex-col md:py-20 md:justify-center justify-center text-center gap-10'>
      <div data-aos="zoom-in">
        <GradientText heading={heading} colors={colors} />
      </div>
      <div
        className="auto-swiper-container"
        style={{
          width: "100%",
          height,
          maxWidth,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={32}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={10000}
          allowTouchMove={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: `${slide.width}px`,
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index < 2}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Responsive styles */}
        <style jsx global>{`
          @media (max-width: 768px) {
            .auto-swiper-container {
              height: 450px !important;
              max-height: 450px !important;
              min-height: 150px;
            }
            .swiper-slide {
              width: 70vw !important;
            }
          }
          @media (max-width: 480px) {
            .auto-swiper-container {
              height: 450px !important;
              max-height: 450px !important;
              min-height: 100px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}