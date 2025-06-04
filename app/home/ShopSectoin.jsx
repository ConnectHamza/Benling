'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import shopIcon from '../../public/assets/Home/shops/Store.svg';
import crownImage from '../../public/assets/Home/shops/crownshop.webp';
import crownImageMbl from '../../public/assets/Home/shops/crownshop-mobile.webp';
import { ChevronLeft, ChevronRight, ArrowUpRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import Typography from '@/components/GradientText/Typography';
import { cities } from './data';
import Link from 'next/link';

export default function ShopSlider() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollAmount = 320;
  const [selectedCity, setSelectedCity] = useState("Karachi");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsModalOpen(false);
  };


  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newScrollLeft = direction === 'next' ? scrollLeft + scrollAmount : scrollLeft - scrollAmount;
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft <= 10);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScrollPosition);
      return () => ref.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);


  return (
    <section className="w-full bg-white z-40 ">


      {/* Don't remove it */}
      <div
        className="relative w-full bg-no-repeat bg-top bg-cover py-20 md:hidden hidden"
        style={{ backgroundImage: `url(${crownImage.src})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'top right',  
      }}
      >
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-xl rounded-lg shadow-lg relative max-h-[80vh] flex flex-col">
              {/* X Icon Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 overflow-y-auto mt-2 ">
                <Typography variant='h3-medium-magistral' className="mb-4 text-center">Select a City</Typography>
                <ul className="space-y-3">
                  {Object.keys(cities).map((city) => (
                    <li
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="cursor-pointer hover:underline text-center"
                    >
                      <Typography variant='body-regular-jakarta' className='text-[#000000] '>
                        {city}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

        {/* Heading Section */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 ">
            <div className="font-magistral max-w-full md:max-w-[50%]">
              <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                <Typography as="h2" variant='h3-medium-magistral' className='text-[#0A0A0A]'>
                  Explore Our Nationwide Network{" "}
                </Typography> <br />
                <Typography
                  as='h2'
                  variant='h3-medium-magistral'
                  onClick={() => setIsModalOpen(true)}
                  className="text-orange-500 inline-flex items-center cursor-pointer"
                >
                  {selectedCity}
                  {isModalOpen ? <ChevronUp className="ml-2 w-[1em] h-[1em] text-orange-500" /> : <ChevronDown className="ml-2 w-[1em] h-[1em] text-orange-500" />}</Typography>
              </h2>

              <Typography variant='extra-subtext-regular-jakarta' className="mt-2">
                From big cities to growing towns, our expanding dealer network brings electric mobility closer to you.
              </Typography>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-black hover:underline transition"
                >
                  <Typography variant='extra-subtext-regular-jakarta'>
                    Learn More About Crown Benling Dealer
                  </Typography>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Cards */}
        <div className="relative z-10">
          <div ref={scrollRef} className="overflow-x-auto no-scrollbar scroll-smooth">
            <div
              className={`
                flex items-stretch gap-4 snap-x snap-mandatory w-max
                pl-4 sm:pl-6 md:pl-8
                pr-4 sm:pr-6 lg:pr-8
                xl:pl-[calc((100vw-1300px)/2+1rem)]
              `}
            >
              {cities[selectedCity].data.map((shop) => (
                <div
                  key={shop.id}
                  className=" w-[85vw] sm:w-[280px] md:w-[320px] h-[300px] bg-[#f5f5f5] rounded-lg shadow-md p-4 flex flex-col justify-between snap-start"
                >
                  <div>
                    <div className="mb-3">
                      <Image
                        src={shopIcon.src}
                        alt="Shop Icon"
                        width={40}
                        height={40}
                        className="mb-2"
                      />
                      <Typography as="h5" variant='h5-medium-magistral' className="mb-1 text-[#0A0A0A]">
                        {shop.name}
                      </Typography>
                      <Typography variant='extra-subtext-regular-jakarta' className=" text-gray-700 mb-2 h-[100px]">
                        {shop.address}
                      </Typography>
                      <div className="text-gray-600 flex flex-wrap">
                        {shop.phone.map((number, index) => (
                          <Typography variant='extra-subtext-regular-jakarta' as="span" key={index} className="text-[#575BFF] text-[12px] mr-2">
                            {number}
                            {index !== shop.phone.length - 1 && (
                              <Typography variant='extra-subtext-regular-jakarta'  as="span" className="mx-0 text-[#575BFF]">—</Typography>
                            )}
                          </Typography>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href={shop.location} target='_blank'>
                  <button className="text-[14px] mt-2 h-[40px] text-black px-4 py-2 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition">
                    Get Direction
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Buttons (Bottom of Cards) */}
          <div className="mt-6 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll('prev')}
                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('next')}
                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Don't remove it */}


      <div
        className="relative w-full bg-no-repeat bg-top bg-cover md:py-20 py-10"
        style={{ backgroundImage: `url(${crownImage.src})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'top right',  
      }}
      >
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-xl rounded-lg shadow-lg relative max-h-[80vh] flex flex-col">
              {/* X Icon Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 overflow-y-auto mt-2 ">
                <Typography variant='h3-medium-magistral' className="mb-4 text-center">Select a City</Typography>
                <ul className="space-y-3">
                  {Object.keys(cities).map((city) => (
                    <li
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="cursor-pointer hover:underline text-center"
                    >
                      <Typography variant='body-regular-jakarta' className='text-[#000000] '>
                        {city}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

        {/* Heading Section */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 ">
            <div className="font-magistral max-w-full md:max-w-[50%]">
              <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                <Typography as="span" variant='h3-medium-magistral' className='text-[#0A0A0A]'>
                  Explore Our Nationwide Network{" "}
                </Typography> <br />
                <Typography
                  as='span'
                  variant='h3-medium-magistral'
                  onClick={() => setIsModalOpen(true)}
                  className="text-orange-500 inline-flex items-center cursor-pointer"
                >
                  {selectedCity}
                  {isModalOpen ? <ChevronUp className="ml-2 w-[1em] h-[1em] text-orange-500" /> : <ChevronDown className="ml-2 w-[1em] h-[1em] text-orange-500" />}</Typography>
              </h2>

              <Typography variant='extra-subtext-regular-jakarta' className="mt-2">
                From big cities to growing towns, our expanding dealer network brings electric mobility closer to you.
              </Typography>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-black hover:underline transition"
                >
                  <Typography variant='extra-subtext-regular-jakarta'>
                    Learn More About Crown Benling Dealer
                  </Typography>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Cards */}
        <div className="relative z-10">
          <div ref={scrollRef} className="overflow-x-auto no-scrollbar scroll-smooth">
            <div
              className={`
                flex items-stretch gap-4 snap-x snap-mandatory w-max
                pl-4 sm:pl-6 md:pl-8
                pr-4 sm:pr-6 lg:pr-8
                xl:pl-[calc((100vw-1300px)/2+1rem)]
              `}
            >
              {cities[selectedCity].data.map((shop) => (
                                <div
                                    key={shop.id}
                                    className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[350px] min-h-[275px] bg-[#f5f5f5] rounded-lg shadow-md p-4 flex flex-col justify-between snap-start"
                                >
                                    <div>
                                        <div className="mb-3">
                                            <Image
                                                src={shopIcon.src}
                                                alt="Shop Icon"
                                                width={28}
                                                height={28}
                                                className="mb-2"
                                            />
                                            <h3 className="text-black mb-1 font-normal font-magistral text-[20px] sm:text-[23px]">
                                                {shop.name}
                                            </h3>
                                            <p className="text-[14px] text-gray-700 mb-2 font-jakarta h-[75px] overflow-hidden text-ellipsis">
                                                {shop.address}
                                            </p>
                                        </div>
                                    </div>
                                            <div className="text-sm text-gray-600 flex flex-wrap">
                                                {shop.phone.map((number, index) => (
                                                    <span key={index} className="text-[#575BFF] text-[12px]">
                                                        {number}
                                                        {index !== shop.phone.length - 1 && (
                                                            <span className="mx-2 text-gray-400">-</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                    <button className="text-[14px] mt-2 h-[40px] text-black px-4 py-2 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition">
                                        Get Direction
                                    </button>
                                </div>
              ))}
            </div>
          </div>

          {/* Scroll Buttons (Bottom of Cards) */}
          <div className="mt-6 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll('prev')}
                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('next')}
                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
