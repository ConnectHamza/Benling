'use client';

import HeroImageSlide from '@/components/Herocontainer/HeroSlider';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import VideoSection from './VideoSection';
import ShopSection from "./ShopSectoin";
import BlogSection from './BlogSection';
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import Logo_Ezze from "../../public/assets/Home/Carousel/Ezee_Logo.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Flash_Logo.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Knightrider_Logo.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Miniscooty_Logo.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Roshni_Logo.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Logo.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Spark_Logo.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.png";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.png";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.png";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.png";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooty_Image.png";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.png";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.png";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.png";
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
import BrandingSection from "./BrandingSection";
import CrownLogo from '../../public/assets/Home/Branding/crownlogo.png';
import Pak from '../../public/assets/Home/Branding/pakistanmap.png';
import Image from 'next/image';
import Faqs from '@/components/Faqs/Faqs'


import { faqsData, Slides } from './data';
import Typography from '@/components/GradientText/Typography';


export default function Home() {
  const bikes = [
    {
      name: "Bike 1",
      image: Image_Flash.src,
      range: 150,
      maxSpeed: 70,
      motorPower: 1500,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Flash_Brochure.pdf',
      exploreLink: "/flash",
      logo: Logo_Flash.src
    },
    {
      name: "Bike 2",
      image: Image_KnightRider.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "../../public/assets/Brouchers/Crown_Benling_Knight_Rider_Brochure.pdf",
      exploreLink: "/knight-rider",
      logo: Logo_Knight_Rider.src

    },
    {
      name: "Bike 3",
      image: Image_Roshnix.src,
      range: 110,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_X_Brochure.pdf',
      exploreLink: "/roshnix",
      logo: Logo_Roshnix.src
    },
    {
      name: "Bike 3",
      image: Image_Ezee.src,
      range: 55,
      maxSpeed: 40,
      motorPower: 650,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Ezee_Brochure.pdf',
      exploreLink: "/ezee",
      logo: Logo_Ezze.src
    }, {
      name: "Bike 3",
      image: Image_Roshni.src,
      range: 120,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_Brochure.pdf',
      exploreLink: "/roshni",
      logo: Logo_Roshni.src
    }, {
      name: "Bike 3",
      image: Image_Firefly.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Firefly_Brochure.pdf',
      exploreLink: "/firefly",
      logo: Logo_Firefly.src
    }, {
      name: "Bike 3",
      image: Image_Spark.src,
      range: 40,
      maxSpeed: 40,
      motorPower: 600,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Spark_Brochure.pdf',
      exploreLink: "/spark",
      logo: Logo_Spark.src
    }, {
      name: "Bike 3",
      image: Image_Miniscooter.src,
      range: 35,
      maxSpeed: 35,
      motorPower: 450,
      brochureLink: "../../public/assets/Brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf",
      exploreLink: "/mini-scooty",
      logo: Logo_Mini_Scooty.src
    }
  ];

  return (
    <>
      <div className='pt-[75px]'>
        <HeroImageSlide
          slides={Slides}
        />
      </div>

      <HeroSubSection
        title="Crown Benling Electric Mobility, proudly operated by"
        highlightText="Crown Group"
        description="leads the EV revolution with sustainable, high-performance scooters designed for efficiency, reliability, and innovation."
        buttonLabel="Read More About Crown"
        onButtonClick={() => { console.log("Button") }}
        backgroundImage={HeroImageSub.src} // This is key!
      />
      <div>
        <MotorcycleCarousel items={bikes} autoplay={true} />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <BrandingSection />
      </div>
      <div>
        <section className="py-12 px-4 mb-20 mt-10 flex justify-center">
          <div className="w-full max-w-[1250px] rounded-xl bg-gradient-to-l from-[rgba(11,5,45,1)] to-[rgba(30,20,60,1)] px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-4">
              {/* Left: Text Block */}
              <div className="text-white flex flex-col space-y-6">
                <Image src={CrownLogo.src} alt="Crown Logo" width={150} height={150} />
                <Typography variant='h3-medium-magistral' >
                  Pakistan Largest EV Scooter Growing Network
                </Typography>
                <Typography variant="subtext-regular-jakarta">
                  Crown Benling is driving the EV revolution with a fast-growing network, making electric mobility accessible, reliable, and future-ready across Pakistan.
                </Typography>
              </div>

              {/* Right: Map */}
              <div className="flex justify-center items-start">
                <Image
                  src={Pak.src}
                  alt="Map of Pakistan"
                  width={500}
                  height={500}
                  className="h-auto w-full max-w-sm md:max-w-md lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <div className='mb-20'>
          <VideoSection />
        </div>
        <div>
          <ShopSection />
        </div>
        <div>
          <BlogSection />
        </div>
        <Faqs data={faqsData} />
      </div>
    </>

  );
}
