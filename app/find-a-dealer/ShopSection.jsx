'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import shopIcon from '../../public/assets/Home/shops/Store.png';
import crownImage from '../../public/assets/Home/shops/crownshop.png';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { cities } from './data';

export default function ShopSlider() {
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const scrollAmount = 320;

    // Dropdown state
    const cityNames = Object.keys(cities);
    const [selectedCity, setSelectedCity] = useState(cityNames[0]);
    const shops = cities[selectedCity]?.data || [];

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
        <section className="w-full bg-white pt-[75px]">
            <div
                className="relative w-full bg-no-repeat bg-top bg-cover pt-10 pb-20"
                style={{ backgroundImage: `url(${crownImage.src})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

                {/* Heading Section */}
                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="font-magistral max-w-full md:max-w-[50%]">
                            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight font-magistral">
                                Find Your Nearest Crown Benling Dealer
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-black-200 font-jakarta">
                                Find your Crown partners - a trusted dealer network offering electric mobility near you.
                            </p>
                            <div className="mt-4 font-jakarta">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-black hover:underline transition"
                                >
                                    Learn More About Crown Benling Dealer
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                        {/* City Select Dropdown */}
                        <div className="mt-6 max-w-xs relative">
                          <select
                            value={selectedCity}
                            onChange={e => setSelectedCity(e.target.value)}
                            className="w-full border border-[#E5E7EB] rounded px-4 py-2 font-jakarta text-base outline-none appearance-none pr-10 bg-white"
                          >
                            {cityNames.map(city => (
                              <option key={city} value={city} className="font-jakarta">{city}</option>
                            ))}
                          </select>
                          {/* Chevron Down SVG absolutely positioned */}
                          <span className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                              <path d="M6 8l4 4 4-4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
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
                            {shops.map((shop) => (
                                <div
                                    key={shop.id}
                                    className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] min-h-[275px] bg-[#f5f5f5] rounded-lg shadow-md p-4 flex flex-col justify-between snap-start"
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
                                            <div className="text-sm text-gray-600 flex flex-wrap">
                                                {shop.phone.map((number, index) => (
                                                    <span key={index} className="text-[#575BFF] text-[12px] mr-2">
                                                        {number}
                                                        {index !== shop.phone.length - 1 && (
                                                            <span className="mx-2 text-gray-400">-</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-[14px] mt-2 h-[40px] text-black px-4 py-2 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition">
                                        Get Direction
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Buttons */}
                    <div className="mt-6 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleScroll('prev')}
                                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
                                disabled={atStart}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => handleScroll('next')}
                                className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
                                disabled={atEnd}
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
