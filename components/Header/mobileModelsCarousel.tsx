'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { modelsData, modelsData2 } from "./data";

const TABS = [
  { key: 'legacy', label: 'Legacy Series', data: modelsData },
  { key: 'performance', label: 'Performance Series', data: modelsData2 },
];

function MobileModelsCarousel({
  onBack,
  setIsMegaMenuOpen,
}: {
  onBack: () => void;
  setIsMegaMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeSeries, setActiveSeries] = useState<'legacy' | 'performance'>('legacy');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current list based on tab
  const currentTab = TABS.find((tab) => tab.key === activeSeries)!;
  const models = currentTab.data;


  
  // Reset index when switching tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeSeries]);

  const closeMegaMenuAndNavigate = (href: string) => {
    if (setIsMegaMenuOpen) {
      setIsMegaMenuOpen(false);
    }
    setTimeout(() => {
      window.location.href = href;
    }, 0);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto ">
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
        <div className="text-lg mb-2 font-magistral font-regular text-black-200 text-center pt-4">
          View our Models
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 w-full justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSeries(tab.key as 'legacy' | 'performance')}
              className={`py-2 px-4 font-jakarta font-medium text-sm border-b-2 transition-all duration-200 ${
                activeSeries === tab.key
                  ? "border-[#F15C2A] text-[#F15C2A]"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${models.length * 100}%`,
          }}
        >
          {models.map((model) => (
            <div
              key={model.href}
              className="w-full flex-shrink-0 px-2"
              style={{ flex: "0 0 100%" }}
            >
              <a
                href={model.href}
                className="flex flex-col items-center"
                onClick={(e) => {
                  e.preventDefault();
                  closeMegaMenuAndNavigate(model.href);
                }}
              >
                <div className="relative">
                  <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                      src={model.img}
                      alt={model.href}
                      width={300}
                      height={200}
                      className="object-contain max-h-[40vh] mt-10"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <Image
                      src={model.logo}
                      alt={model.href}
                      width={100}
                      height={20}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-xs text-gray-600 text-center mt-4 h-[20px] font-jakarta">
                    {model.range} | {model.speed}
                  </div>
                  {model.disc && (
                    <div className="bg-[#FFE1DE] absolute top-0 left-10 p-1 rounded-md">
                      <span className="text-xs text-[#8D190F] font-medium">{model.disc}</span>
                    </div>
                  )}
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
          {models.map((_, index) => (
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