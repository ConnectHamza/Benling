'use client';

import React, { useState } from "react";
import HomeCarousel from "@/components/LoopCarousel/home-carousel";
import PerformanceCarousel from "../crown-benling-performance-series/performance-carousel";
import { bikes, performanceBikes } from "./data";
import Typography from "@/components/GradientText/Typography";

const TabbedCarousel = () => {
  const [activeTab, setActiveTab] = useState("performance"); 

   const heading =
    activeTab === "performance"
      ? "Choose Your Perfect Ride"
      : "Choose Your Next Generation Ride";

  const subText =
    activeTab === "performance"
      ? "Explore Crown Benling’s electric scooter lineup, each model built with key features to suit your ride style and everyday needs."
      : "Explore Crown Benling’s electric scooter lineup, each model built with key features to suit your ride style and everyday needs.";

  return (
    <div className="w-full h-full bg-white-500 relative overflow-hidden md:py-40 py-20">

         <div data-aos="fade-up" className="px-2">
                  <Typography as="h2" variant='h2-medium-magistral' className="mb-2 text-center">
                    {heading}
                  </Typography>
                  <Typography as="p" variant='subtext-regular-jakarta' className='text-[#0A0A0A] text-center'>
                    {subText}
                    </Typography>
                </div>
      {/* Tabs */}
      <div className="flex justify-center md:gap-8 gap-4 mt-8">
         <button
          onClick={() => setActiveTab("performance")}
          className={`px-6 py-2 md:text-lg text-sm font-bold rounded-md transition ${
            activeTab === "performance" ? "bg-[#FFF9EC] text-[#FF7700]" : "text-[#989898]"
          }`}
        >
          Performance Series
        </button>
        <button
          onClick={() => setActiveTab("legacy")}
          className={`px-6 py-2 md:text-lg text-sm font-bold rounded-md transition ${
            activeTab === "legacy" ? "bg-[#FFF9EC] text-[#FF7700]" : "text-[#989898]"
          }`}
        >
          Legacy Series
        </button>      
      </div>

      {/* Carousel Content */}
      <div className="mt-0">
        {activeTab === "legacy" ? (
          <HomeCarousel  items={bikes} autoplay={true} />
        ) : (
          <PerformanceCarousel  items={performanceBikes} autoplay={true}/>
        )}
      </div>
    </div>
  );
};

export default TabbedCarousel;