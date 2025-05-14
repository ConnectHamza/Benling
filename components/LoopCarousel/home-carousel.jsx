import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle, Download, ArrowUpRight } from "lucide-react";
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
    <div className="w-full bg-white-500 relative overflow-hidden py-6">
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
          className="absolute left-[15%] [@media(max-width:640px)]:left-[5%] bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-1"
        >
          <ArrowLeftCircle size={30} />
        </button>


        {/* Current Bike */}
        <div className="w-[70%] mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
              src={items[current]?.image}
              alt={items[current]?.name}
              width={600}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-[15%] [@media(max-width:640px)]:right-[5%] bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10 "
        >
          <ArrowRightCircle size={30} />
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
          className="mx-auto"
        />
      </div>

      {/* Motorcycle Details */}
      <div className="mt-4 text-center">
        <div className="flex justify-center gap-8 text-sm md:text-base text-gray-600 font-magistral font-normal">
          <p >
            Range: <span className="font-medium">{items[current]?.range} km</span>
          </p>
          <p>
            Max Speed: <span className="font-medium">{items[current]?.maxSpeed} km/h</span>
          </p>
          <p>
            Motor Power: <span className="font-medium">{items[current]?.motorPower} W</span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap px-4">
        {/* Download Brochure Button */}
        <a
          href={items[current]?.brochureLink}
          download
          className="flex items-center gap-2 border-2 border-black hover:border-crownOrange text-black-200 hover:bg-crownOrange hover:text-white px-5 py-2.5 rounded font-medium text-sm sm:text-base transition"
        >
          <Download size={16} />
          Download Brochure
        </a>

        {/* Explore More Button */}
        <a
          href={items[current]?.exploreLink}
          className="flex items-center gap-2 bg-crownOrange text-white hover:bg-[#e6531f] px-5 py-2.5 rounded font-medium text-sm sm:text-base transition"
        >
          Explore More
          <ArrowUpRight size={16} />
        </a>
      </div>

    </div>
  );
};

export default HomeCarousel;