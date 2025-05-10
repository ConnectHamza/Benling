'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import shopIcon from '../../public/assets/Home/shops/Store.png';
import crownImage from '../../public/assets/Home/shops/crownshop.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const shops = [
    {
        id: 1,
        name: 'Benling Awami Markaz',
        address:
            'Plot # ST1/A2 Shop # LG 06 & 07 City Centre Mall Near Awami Markaz Oppo Lal Qila Main Shara-e-Faisla Karachi',
        phone: ['0321-2721818', '0321-2721818'],
    },
    {
        id: 2,
        name: 'Star Electronics',
        address: `Shop #B/7, B/8, KDA Flats Phase 2,
        Shadman Town No. 1, North Karachi`,
        phone: ['0316-3331332'],
    },
    {
        id: 3,
        name: 'ST Traders',
        address: `Shop # 01 B-142 Midway Commercial,
                Bahria Town Karachi`,
        phone: ['0339-8888991', '0321-8777941'],
    },
    {
        id: 4,
        name: 'Unique House',
        address: `Showroom No. 4, Ghulam Nabi Trust, Building AM-20, Frere Road, Saddar.`,
        phone: ['021-32727261', '0333-4224409'],
    }, {
        id: 5,
        name: 'SR Motors',
        address: `Shop # 01 B-142 Midway Commercial,
                Bahria Town Karachi`,
        phone: ['021-32743280', '0300-2167593'],
    },
];
export default function ShopSlider() {
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const scrollAmount = 320;

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
    // py-10 relative px-4 sm:px-10
    return (
        <section className="w-full bg-white">
            <div
                className="relative w-full bg-no-repeat bg-top bg-cover pt-10 pb-20"
                style={{ backgroundImage: `url(${crownImage.src})` }}
            >
              
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

                {/* Heading */}
                <div className="relative z-10 mx-auto mb-10 px-20">
                    <div className="font-magistral max-w-full md:max-w-[50%]">
                        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                            Explore Our Nationwide Network
                            <span className="text-orange-500"> Karachi</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-gray-800 font-jakarta">
                            Find your Crown partners — a trusted dealer network offering electric mobility near you.
                        </p>
                        <div className="mt-4 font-jakarta">
                            <p>Learn More About Crown Benling Dealer</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="relative z-10 overflow-x-auto scroll-smooth scrollbar-hide px-20"
                >
                    <div className="flex gap-4 items-stretch pr-4 sm:pr-[10vw] snap-x snap-mandatory">
                        {shops.map((shop) => (
                            <div
                                key={shop.id}
                                className="flex-shrink-0 w-[90vw] sm:w-[300px] h-[275px] bg-[#f5f5f5] rounded-lg shadow p-4 flex flex-col justify-between snap-start"
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
                                        <h3 className="text-black mb-1 font-normal font-magistral text-[23px]">
                                            {shop.name}
                                        </h3>
                                        <p className="text-[14px] text-gray-700 mb-2 font-jakarta h-[75px]">
                                            {shop.address}
                                        </p>
                                        <div className="text-sm text-gray-600 flex flex-wrap">
                                            {shop.phone.map((number, index) => (
                                                <span key={index} className="text-[#575BFF] text-[12px] mr-2">
                                                    {number}
                                                    {index !== shop.phone.length - 1 && (
                                                        <span className="mx-2 text-gray-400">—</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className=" text-[14px] mt-2 h-[40px] text-black px-4 py-2 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition">
                                    Get Direction
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows */}
                <div className="absolute bottom-6 left-6 z-20 flex gap-2 pl-12" >
                    <button
                        onClick={() => handleScroll('prev')}
                        className="w-10 h-10 rounded-full border bg-white shadow disabled:opacity-30 flex items-center justify-center"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => handleScroll('next')}
                        className="w-10 h-10 rounded-full border bg-white shadow disabled:opacity-30 flex items-center justify-center"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
