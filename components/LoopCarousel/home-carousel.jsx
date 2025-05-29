'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button/AppButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../GradientText/Typography";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeCarousel = ({ items = [], autoplay = true, autoplayInterval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Prevent rapid clicks
  const [direction, setDirection] = useState(""); // Track navigation direction

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [current]);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayInterval); // Autoplay interval (default is 5000 ms)

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [autoplay, autoplayInterval, items.length, current]);

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent rapid clicks
    setIsTransitioning(true);
    setDirection("left");
    setCurrent((current - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 800); // Transition duration
  };

  const handleNext = () => {
    if (isTransitioning) return; // Prevent rapid clicks
    setIsTransitioning(true);
    setDirection("right");
    setCurrent((current + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 800); // Transition duration
  };

  return (
    <div className="w-full h-full bg-white-500 relative overflow-hidden md:py-40 py-20 px-4">
      <div className="w-full flex flex-col items-center justify-center mb-8">
         <Typography variant='h2-medium-magistral' className="mb-2 text-center" data-aos="fade-up">
         Choose Your Perfect Ride
         </Typography>
         <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A] text-center'>
         Explore Crown Benling’s electric scooter lineup, each model built with key features to suit your ride style and everyday needs.
         </Typography>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-center h-full">
        {/* Previous Bike (Partially Visible) */}
        <div
          className="absolute left-[-25%] hidden md:block lg:block"
          data-aos={direction === "right" ? "fade-right" : "fade-left"}
        >
          <Image
            src={items[(current - 1 + items.length) % items.length]?.image}
            alt="Previous Bike"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[15%] [@media(max-width:640px)]:left-[5%] text-black-30 rounded-full p-3 hover:scale-110 transition z-10"
        >
          <ChevronLeft size={35} />
        </button>

        {/* Current Bike */}
        <div className="w-[70%] mx-auto">
          <div
            key={current}
            data-aos={direction === "right" ? "fade-left" : "fade-right"}
            className="flex items-center justify-center"
          >
            <Image
              src={items[current]?.image}
              alt={items[current]?.name}
              width={900}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-[15%] [@media(max-width:640px)]:right-[5% text-black-30 rounded-full p-3 hover:scale-110 transition z-10"
        >
          <ChevronRight size={40} />
        </button>

        {/* Next Bike (Partially Visible) */}
        <div
          className="absolute right-[-25%] hidden md:block lg:block"
          data-aos={direction === "right" ? "fade-right" : "fade-left"}
        >
          <Image
            src={items[(current + 1) % items.length]?.image}
            alt="Next Bike"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Flash Title (Logo) */}
      <div className="text-center mt-8" data-aos="zoom-in">
        <Image
          src={items[current]?.logo}
          alt={`${items[current]?.name} Logo`}
          width={150}
          height={20}
          className="mx-auto h-10"
        />
      </div>

      {/* Motorcycle Details */}
      <div className="mt-4 text-center" data-aos="fade-up">
        <div className="flex justify-center md:gap-8 gap-2 text-xs md:text-base text=[#0A0A0A] font-magistral font-normal">
          <Typography variant="body-regular-magistral" >
            Range: <Typography as="span" variant="body-regular-magistral">{items[current]?.range} km</Typography>
          </Typography>
          <Typography variant="body-regular-magistral">
            Max Speed: <Typography variant="body-regular-magistral" as="span" >{items[current]?.maxSpeed} km/h</Typography>
          </Typography>
          <Typography variant="body-regular-magistral">
            Motor Power: <Typography variant="body-regular-magistral" as="span" >{items[current]?.motorPower} W</Typography>
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
          href={items[current]?.brochureLink}
          className="border-2 border-black bg-black-30 hover:bg-orange-300 hover:text-black-30 hover:border-black-30 px-5 py-2.5 rounded font-medium text-sm sm:text-base transition hover:text-black"
          target="_blank"
          download={true}        
        />

        <Button
          variant="solid"
          label="Explore More"
          iconName="ArrowUpRight"
          iconPosition="right"
          href={items[current]?.exploreLink}
          textColor='text-[#000]'
          className="bg-crownOrange text-[#000] hover:bg-[#e6531f] px-5 py-2 rounded font-medium text-sm sm:text-base transition"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;