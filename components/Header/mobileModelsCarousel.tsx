'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { modelsDataMob } from "./header";

function MobileModelsCarousel({ onBack, setIsMegaMenuOpen }: { onBack: () => void; setIsMegaMenuOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // To handle transitions

  const closeMegaMenuAndNavigate = (href: string) => {
    if (setIsMegaMenuOpen) {
      setIsMegaMenuOpen(false); // Close the mega menu
    }
    setTimeout(() => {
      window.location.href = href; // Explicitly navigate after state update
    }, 0); // Allow state update to complete
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === modelsDataMob.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelsDataMob.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); 

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
          {modelsDataMob.map((model, index) => (
            <div 
              key={model.href}
              className="w-full flex-shrink-0 px-2"
              style={{ flex: "0 0 100%" }} 
            >
              <a
                href={model.href}
                className="flex flex-col items-center h-full"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  closeMegaMenuAndNavigate(model.href); // Close mega menu and navigate
                }}
              >
                {/* Image Container */}
                <div className="relative">
                <div className="flex-1 flex items-center justify-center w-full">
                  <Image
                    src={model.img}
                    alt={model.href}
                    width={400}
                    height={200}
                    className="object-contain max-h-[40vh]"
                  />
                </div>

                {/* Logo Container */}
                <div className="mt-2 flex items-center justify-center">
                  <Image
                    src={model.logo}
                    alt={model.href}
                    width={100}
                    height={20}
                    className="mx-auto"
                  />
                </div>

                {/* Text Info */}
                <div className="text-xs text-gray-600 text-center mt-4 h-[20px] font-jakarta">
                  {model.range} | {model.speed}
                </div>
                  <div className="bg-[#FFE1DE] absolute top-0 left-10 p-1 rounded-md" >
                                <span className="text-xs text-[#8D190F] font-medium">{model.disc}</span>
                            </div>
                            </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-black-30 p-2 rounded-full"
          aria-label="Previous model"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-black-30 p-2 rounded-full"
          aria-label="Next model"
        >
          <ChevronRight size={32} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {modelsDataMob.map((_, index) => (
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