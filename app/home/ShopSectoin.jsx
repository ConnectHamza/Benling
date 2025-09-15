'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import shopIcon from '../../public/assets/Home/shops/Store.png';
import crownImage from '../../public/assets/Home/shops/crownshop.png';
import { ChevronLeft, ChevronRight, ArrowUpRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import Typography from '@/components/GradientText/Typography';

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
    <section className="w-full bg-white">
      <div
        className="relative w-full bg-no-repeat bg-top bg-cover pt-10 pb-20"
        style={{ backgroundImage: `url(${crownImage.src})` }}
      >
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm rounded-lg shadow-lg relative max-h-[80vh] flex flex-col">
              {/* X Icon Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 overflow-y-auto mt-2">
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
          <div className="mb-10">
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
                  className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] h-[300px] bg-[#f5f5f5] rounded-lg shadow p-4 flex flex-col justify-between snap-start"
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
                      <Typography variant='h5-medium-magistral' className="mb-1 text-[#0A0A0A]">
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
                              <Typography variant='extra-subtext-regular-jakarta'  as="span" className="mx-2 text-gray-400">—</Typography>
                            )}
                          </Typography>
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

          {/* Scroll Buttons (Bottom of Cards) */}
          <div className="mt-6 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
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
        </div>
      </div>
    </section>
  );
}
