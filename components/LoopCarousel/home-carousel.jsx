'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button/AppButton";
import { ArrowLeft, ArrowLeftCircle, ArrowLeftIcon, ArrowRightCircle, BookDown, ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../GradientText/Typography";

const HomeCarousel = ({ items = [], autoplay = false }) => {
  const [current, setCurrent] = useState(0);


  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000); // 5 seconds autoplay interval

    return () => clearInterval(interval);
  }, [autoplay, items.length]);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  return (
    <div className="w-full h-full bg-white-500 relative overflow-hidden md:py-40 py-20">
      <div className="w-full flex flex-col items-center justify-center mb-8">
         <Typography variant='h2-medium-magistral' className="mb-2">
         Choose Your Perfect Ride
                        </Typography>
                        <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A] text-center'>
                        Explore Crown Benling’s electric scooter lineup, each model built with key features to suit your ride style and everyday needs.
                        </Typography>

      </div>
      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-center h-full">
        
        {/* Previous Bike (Partially Visible) */}
        <div className="absolute left-[-25%] hidden md:block lg:block ">
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
          onClick={prev}
          className="absolute left-[15%] [@media(max-width:640px)]:left-[5%] text-black-30 rounded-full p-3 hover:scale-110 transition z-1"
        >
          <ChevronLeft size={35} />
        </button>


        {/* Current Bike */}
        <div className="w-[70%] mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
              src={items[current]?.image}
              alt={items[current]?.name}
              width={900}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-[15%] [@media(max-width:640px)]:right-[5% text-black-30 rounded-full p-3 hover:scale-110 transition z-10 "
        >
          <ChevronRight size={40} />
        </button>

        {/* Next Bike (Partially Visible) */}
        <div className="absolute right-[-25%] hidden md:block lg:block">
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
      <div className="text-center mt-8">
        <Image
          src={items[current]?.logo}
          alt={`${items[current]?.name} Logo`}
          width={150}
          height={20}
          className="mx-auto h-10"
        />
      </div>

      {/* Motorcycle Details */}
      <div className="mt-4 text-center">
        <div className="flex justify-center gap-8 text-sm md:text-base text=[#0A0A0A] font-magistral font-normal">
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
      <div className="mt-8 flex justify-center gap-4 flex-wrap px-4">
        {/* Download Brochure Button */}
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