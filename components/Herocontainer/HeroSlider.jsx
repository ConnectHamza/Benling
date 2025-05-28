'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../GradientText/Typography';
import Button from '../Button/AppButton';
import { ArrowRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = ({ slides = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

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
    } = slides[currentSlide] || {};

    return (
        <section className="relative w-full h-screen md:max-h-[91vh] overflow-hidden flex md:items-center items-start py-10">
            {/* Background Images Container */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                    {/* Desktop Background */}
                    <motion.div
                        key={`desktop-${imageSrc}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden md:block w-full h-full"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>

                    {/* Mobile Background */}
                    <motion.div
                        key={`mobile-${mobileImageSrc || imageSrc}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="block md:hidden w-full h-full"
                    >
                        <Image
                            src={mobileImageSrc || imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
                <div className="container px-6 sm:px-8 mx-auto flex flex-col md:items-center items-start justify-center h-full">
                    <motion.div
                        key={`content-${title}`}
                        className="max-w-[1400px] md:px-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={`md:space-y-6 text-left w-full md:w-[40%] text-${color}`}>
                            <div className="mb-4">
                                <Typography variant="h2-medium-magistral">{title}</Typography>
                            </div>
                            <div className="mb-6 jakarta font-[400]">
                                <Typography variant="body-regular-jakarta">{subtitle}</Typography>
                            </div>
                            <div className='flex items-center gap-4 font-jakarta'>
                            <Link href={href}>
                            <button className={`font-jakarta md:text-md text-sm border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}>Explore More <ArrowRight size={20}/></button>
                            </Link>
                            <div className='md:block hidden'>
                            <p variant="body-regular-jakarta" className='md:text-sm text-xs'>Priced at</p>
                            <span className='md:text-xl text-lg font-bold'>PKR {price}</span>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;