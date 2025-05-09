import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

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
          className="absolute left-[15%] bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10"
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
          className="absolute right-[15%] bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10"
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
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href={items[current]?.brochureLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-crownOrange text-crownOrange hover:bg-crownOrange hover:text-white px-6 py-3 rounded transition"
        >
          Download Brochure
        </a>

        <a
          href={items[current]?.exploreLink}
          className="bg-white border-2 border-crownOrange text-black hover:bg-crownOrange hover:text-white px-6 py-3 rounded transition"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default HomeCarousel;