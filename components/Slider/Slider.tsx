"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Slide1 from '../../public/assets/Knight-Rider/Knight-Rider-Slide1.webp';
import Slide2 from '../../public/assets/Knight-Rider/Knight-Rider-Slide2.webp';
import styles from './Slider.module.css';

const ImageCarousel: React.FC = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        effect="fade"
        speed={1000}
        className={styles.swiperContainer}
      >
        <SwiperSlide>
          <div className={styles.slideContent}>
            <Image
              src={Slide1}
              alt="Knight Rider Slide 1"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className={styles.sliderImage}
            />
            <h2 className={`${styles.heading} heading2 text-white text-center`}>
              Operations Button
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContent}>
            <Image
              src={Slide2}
              alt="Knight Rider Slide 2"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className={styles.sliderImage}
            />
            <h2 className={`${styles.heading} heading2 text-white text-center`}>
              Slide 2 Title
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;