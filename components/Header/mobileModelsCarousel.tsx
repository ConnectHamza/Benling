'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Import modelsData directly
import { modelsData } from "./header";

function MobileModelsCarousel({ onBack, setIsMegaMenuOpen }: { onBack: () => void; setIsMegaMenuOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // To handle transitions

  const closeMegaMenu = () => {
    if (setIsMegaMenuOpen) {
      setIsMegaMenuOpen(false); // Close the mega menu
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === modelsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelsData.length - 1 : prevIndex - 1
    );
  };

  // Reset the transition flag after a short delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Black header with back button and centered logo */}
      <div className="flex items-center justify-between bg-black-200 px-6 py-4" style={{ minHeight: "64px" }}>
        <button onClick={onBack} className="text-white text-2xl" aria-label="Back">
          ←
        </button>
        <Image
          src="/assets/Header-Footer/Benling-Logo.svg"
          alt="Logo"
          width={100}
          height={80}
          priority
        />
        <div className="w-8" />
      </div>      
      
      {/* Carousel Container */}
      <div className="relative flex flex-col items-center justify-center w-full h-[70vh] overflow-hidden px-4">
        {/* Carousel Slides */}
        <div className="text-lg mb-4 font-magistral font-regular text-black-200 text-center pt-4">
          View our Models
        </div>

        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {modelsData.map((model, index) => (
            <div 
              key={model.href}
              className="w-full flex-shrink-0 px-2"
              style={{ flex: "0 0 100%" }} // Ensure each slide takes up 100% width
            >
              <Link
                href={model.href}
                className="flex flex-col items-center h-full"
                onClick={closeMegaMenu} // Close mega menu when navigating
              >
                {/* Image Container */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <Image
                    src={model.img}
                    alt={model.href}
                    width={400} // Specify width
                    height={200}
                    className="object-contain max-h-[40vh]"
                  />
                </div>

                {/* Logo Container */}
                <div className="mt-4 h-[40px] flex items-center justify-center">
                  <Image
                    src={model.logo}
                    alt={model.href}
                    width={150}
                    height={20}
                    className="mx-auto"
                  />
                </div>

                {/* Text Info */}
                <div className="text-xs text-gray-600 text-center mt-2 h-[20px] font-jakarta">
                  {model.range} | {model.speed}
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous model"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next model"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {modelsData.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#F15C2A]' : 'bg-gray-300'}`}
              aria-label={`Go to model ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileModelsCarousel;