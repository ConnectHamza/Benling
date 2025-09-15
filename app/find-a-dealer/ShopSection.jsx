'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import shopIcon from '../../public/assets/Home/shops/Store.png';
import crownImage from '../../public/assets/Home/shops/crownshop.png';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Replace this with your full cities data
const cities =
{
  "Karachi": {
    "data": [
      {
        "id": 1,
        "name": "Benling Awami Markaz",
        "address": "Address: Plot # ST1/A2 Shop # LG 06 & 07 City Centre Mall Near Awami Markaz Oppo Lal Qila Main Shah rah e Faisal Karachi",
        "phone": ["032-12721818"]
      },
      {
        "id": 2,
        "name": "ST Traders Bahria Town",
        "address": "Shop # 01 B-142 Midway Commercial, Bahria Town Karachi",
        "phone": ["0339-8888991", "0321-8777941"]
      },
      {
        "id": 3,
        "name": "Al Hamd Electronics",
        "address": "SUH 14 Sector J Askari 5 Malir cantt",
        "phone": ["0300 2875705"]
      },
      {
        "id": 4,
        "name": "Star Electronics",
        "address": "hop #B/7, B/8, KDA Flats Phase 2, Shadman Town No. 1 North Karachi",
        "phone": ["3163331332"]
      },
      {
        "id": 5,
        "name": "SR Motors",
        "address": "Shop No. AM-301 C, Opposite, Naveed Clinic, Frere Road, Saddar",
        "phone": ["021-32743280", "0300-2167593"]
      },
      {
        "id": 6,
        "name": "Shari automobiles",
        "address": "Address: shop # 15 rizvi chamber akber road Karachi",
        "phone": ["3219253100"]
      },
      {
        "id": 7,
        "name": "Rafiq Auto Exchange",
        "address": "Up market -  North Karachi, Karachi",
        "phone": ["03111123787"]
      },
      {
        "id": 8,
        "name": "Unique House",
        "address": "Showroom No. 4, Ghulam Nabi Trust, Building AM-20, Frere Road, Saddar",
        "phone": ["02132727261", "0333-4224409"]
      },
      {
        "id": 27,
        "name": "Crown Solar",
        "address": "Shop # KS-315, Crown solar energy, Karachi",
        "phone": ["032-12721818"]
      },
      {
        "id": 28,
        "name": "M.Ayaan Ev Center",
        "address": "Main National highway, opposite Quaid e Azam Park, Steel Town",
        "phone": ["0334-3704587"]
      }
    ]
  },
  "Lahore": {
    "data": [
      {
        "id": 9,
        "name": "Agro Power",
        "address": "Main Zari Market, Opposite New Sabzi Mandi, Kacha Gajumata.",
        "phone": ["0322-4066637"]
      },
      {
        "id": 10,
        "name": "Agro Power",
        "address": "Plot # 10, Sector C-1 Block 2, Main College Road, Near Lajhna Chowk.",
        "phone": ["0310-0338666"]
      }
    ]
  },
  "Rawalpindi": {
    "data": [
      {
        "id": 11,
        "name": "Noman Brothers",
        "address": "Shop # R-286, Circular Road Waris Khan Rawalpindi",
        "phone": ["0347-7788884", "0323-8557588"]
      }
    ]
  },
  "Wah cant": {
    "data": [
      {
        "id": 12,
        "name": "Modern Auto Mart",
        "address": "P/134, Opposite Shareef Hospital, G.T. Road, Wah Cantt.",
        "phone": ["0321-9951052"]
      }
    ]
  },
  "Multan": {
    "data": [
      {
        "id": 13,
        "name": "Zavi's Garage",
        "address": "City Plaza, Opposite Allied Bank Near Rasheedabad Khanewal Road, Multan.",
        "phone": ["0328-8852815", "0328-8852814"]
      },
      {
        "id": 23,
        "name": "Multan Company Outlet",
        "address": "Benling by Crown Group - Multan Company Outlet Motorcycle Parts Auto Plaza, Near BCG CHOWK, Multan",
        "phone": ["3217309005"]
      }
    ]
  },
  "Rahim Yar Khan": {
    "data": [
      {
        "id": 14,
        "name": "Ghaznavi Traders(Main Branch )",
        "address": "Bypass Road, Opposite KIA Motors Showroom, Rahim Yar Khan",
        "phone": ["0302-8770666"]
      }
    ]
  },
  "Sadiqabad": {
    "data": [
      {
        "id": 15,
        "name": "Ghaznavi Traders(sub branch)",
        "address": "Jamal Din Road, Sadiqabad",
        "phone": ["0302-8770666"]
      }
    ]
  },
  "Sukkur": {
    "data": [
      {
        "id": 16,
        "name": "Ghauri Electric Showroom",
        "address": "Shop #13, 14, Ayub Gate, Sukkur",
        "phone": ["0313-3349701"]
      }
    ]
  },
  "Khanpur": {
    "data": [
      {
        "id": 17,
        "name": "Qadri Trading",
        "address": "Nawa Kot Road, Opposite Taqwa Islamic Bank, Khanpur",
        "phone": ["0303-6177797"]
      }
    ]
  },
  "Gujranwala": {
    "data": [
      {
        "id": 18,
        "name": "Sunny Motors",
        "address": "Next to Sunny Star F/S,Attock Petrol Pump, Sialkot Bypass Road, Gujranwala, Punjab, Pakistan",
        "phone": ["03456541144", "03007888020", "03007888024"]
      }
    ]
  },
  "Hasilpur": {
    "data": [
      {
        "id": 19,
        "name": "SM Motors",
        "address": "17B Block-Y Satellite Town, Chunawala Road, Hasilpur",
        "phone": ["0308-1266664", "0300-1266664"]
      }
    ]
  },
  "Lodhran": {
    "data": [
      {
        "id": 20,
        "name": "Al Ahmad Motors",
        "address": "Mall of Lodhran, Opposite Hamsafar Petrol Pump, Lodhran.",
        "phone": ["0300-5466685"]
      },
      {
        "id": 21,
        "name": "Welcome Motors",
        "address": "Lodhran Road, Malsi Chowk. Kehror Pakka",
        "phone": ["0301-7724408"]
      }
    ]
  },
  "Mardan": {
    "data": [
      {
        "id": 22,
        "name": "Fazl e Raziq Motors",
        "address": "Opposite Allied Bank Cantt Bazar Mardan",
        "phone": ["0937-861234"]
      }
    ]
  },
  "Umerkot": {
    "data": [
      {
        "id": 24,
        "name": "Dileep Evs",
        "address": "Main Mirpurkhas Road, Umarkot",
        "phone": ["03333308209", "03423645691"]
      }
    ]
  },
  "Mithi": {
    "data": [
      {
        "id": 25,
        "name": "S.S Ev Center",
        "address": "Mian Mithi, Islamkot road, Gari Khuta Mithi",
        "phone": ["3332510525"]
      }
    ]
  },
  "Nawabshah": {
    "data": [
      {
        "id": 26,
        "name": "Karam Sarkar EV's Center",
        "address": "House #64 Talha Residency near qenci pull Nawabshah",
        "phone": ["3353226900"]
      }
    ]
  }
}

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
                                    className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] h-[275px] bg-[#f5f5f5] rounded-lg shadow p-4 flex flex-col justify-between snap-start"
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
                                className="w-10 h-10 rounded-full border bg-white shadow disabled:opacity-30 flex items-center justify-center"
                                disabled={atStart}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => handleScroll('next')}
                                className="w-10 h-10 rounded-full border bg-white shadow disabled:opacity-30 flex items-center justify-center"
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
