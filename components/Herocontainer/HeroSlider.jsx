'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Typography from '../GradientText/Typography';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = ({ slides = [], autoplay = true, autoplayInterval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {

        AOS.refresh();
    }, [currentSlide]);

    useEffect(() => {
        if (!autoplay) return;


        const interval = setInterval(() => {
            handleNextSlide();
        }, autoplayInterval); 
        
        return () => clearInterval(interval);
    }, [autoplay, autoplayInterval, currentSlide]);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const {
        title,
        subtitle,
        buttonText,
        href,
        imageSrc,
        mobileImageSrc,
        imageAlt = 'Hero Image',
        onButtonClick,
        color,
        price,
        conWidth,
        textAlign,
    } = slides[currentSlide] || {};

    return (
        <section className="relative w-full h-screen md:max-h-[91vh] overflow-hidden flex md:items-center items-start py-10">
            {/* Background Images Container */}
            <div className="absolute inset-0 w-full h-full">
                {/* Desktop Background */}
                <div
                    data-aos="fade-right"
                    className="hidden md:block w-full h-full"
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Mobile Background */}
                <div
                    data-aos="fade-right"
                    className="block md:hidden w-full h-full"
                >
                    <Image
                        src={mobileImageSrc || imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
                <div className="container px-6 sm:px-8 mx-auto flex flex-col md:items-center items-start justify-center h-full">
                    <div className="max-w-[1400px] md:px-20">
                        <div className={`md:space-y-6 ${textAlign ? textAlign : 'text-left'} w-full  ${conWidth ? `md:${conWidth}` : 'md:w-[40%]'} text-${color}`}>
                            {/* Animated Title */}
                            <div
                                className="mb-4"
                                data-aos="fade-right"
                                data-aos-delay="0" // Start immediately
                                data-aos-duration="1000" // 1 second duration
                                key={`title-${currentSlide}`}
                            >
                                <Typography as='h2' variant="h2-medium-magistral">{title}</Typography>                                
                            </div>

                            {/* Animated Subtitle */}
                            <div
                                className="mb-6 jakarta font-[400]"
                                data-aos="fade-right"
                                data-aos-delay="500" // 500ms delay after title
                                data-aos-duration="800" // 0.8 second duration
                                key={`subtitle-${currentSlide}`}
                            >
                                <Typography variant="body-regular-jakarta">{subtitle}</Typography>
                            </div>

                            {/* Button and Price */}
                            <div
                                className="flex items-center gap-4 font-jakarta"
                                data-aos="fade-up"
                                data-aos-delay="1000" // 1 second delay after subtitle
                                data-aos-duration="800" // 0.8 second duration
                                key={`button-${currentSlide}`}
                            >
                                <Link href={href}>
                                    <button className={`font-jakarta md:text-md text-sm border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}>
                                        Explore More <ArrowRight size={20} />
                                    </button>
                                </Link>
                                <div className=''>
                                    <p variant="body-regular-jakarta" className='md:text-sm text-xs'>Priced at</p>
                                    <span className='md:text-xl text-lg font-bold'>PKR {price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="absolute left-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40"
                onClick={handlePrevSlide}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                className="absolute right-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40"
                onClick={handleNextSlide}
            >
                <ArrowRight size={24}/>
            </button>
        </section>
    );
};

export default HeroSection;