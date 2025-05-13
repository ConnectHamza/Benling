'use client';

import HeroSection from '@/components/Herocontainer/Herocontainer';
import HeroImage from '../../public/assets/Home/Header/heroimage.png';
import StickyBar from '@/components/StickyBar/stickyBar';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import VideoSection from './VideoSection';
import ShopSection from "./ShopSectoin";
import BlogSection from './BlogSection';
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import Logo_Ezze from "../../public/assets/Home/Carousel/Logo_Ezze.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Logo_Flash.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Logo_Knight_Rider.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Logo_Mini_Scooty.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Logo_Roshni.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Logo_Roshnix.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Logo_Spark.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Logo_firefly.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Image_Ezee.svg";
import Image_Firefly from "../../public/assets/Home/Carousel/Image_Firefly.svg";
import Image_Flash from "../../public/assets/Home/Carousel/Image_Flash.svg";
import Image_KnightRider from "../../public/assets/Home/Carousel/Image_KnightRider.svg";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Image_Miniscooter.svg";
import Image_Roshni from "../../public/assets/Home/Carousel/Image_Roshni.svg";
import Image_Roshnix from "../../public/assets/Home/Carousel/Image_Roshnix.svg";
import Image_Spark from "../../public/assets/Home/Carousel/Image_Spark.svg";
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
import BrandingSection from "./BrandingSection";
import CrownLogo from '../../public/assets/Home/Branding/crownlogo.png';
import Pak from '../../public/assets/Home/Branding/pakistanmap.png';
import Image from 'next/image';
import Faqs from '@/components/Faqs/Faqs';
import { faqsData } from './data';
export default function Home() {
  const bikes = [
    {
      name: "Bike 1",
      image: Image_Flash.src,
      range: 150,
      maxSpeed: 70,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/flash",
      logo: Logo_Flash.src
    },
    {
      name: "Bike 2",
      image: Image_KnightRider.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/knight-rider",
      logo: Logo_Knight_Rider.src

    },
    {
      name: "Bike 3",
      image: Image_Roshnix.src,
      range: 110,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/roshnix",
      logo: Logo_Roshnix.src
    },
    {
      name: "Bike 3",
      image: Image_Ezee.src,
      range: 55,
      maxSpeed: 40,
      motorPower: 650,
      brochureLink: "",
      exploreLink: "/ezee",
      logo: Logo_Ezze.src
    }, {
      name: "Bike 3",
      image: Image_Roshni.src,
      range: 120,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: "",
      exploreLink: "/roshni",
      logo: Logo_Roshni.src
    }, {
      name: "Bike 3",
      image: Image_Firefly.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: "",
      exploreLink: "/firefly",
      logo: Logo_Firefly.src
    }, {
      name: "Bike 3",
      image: Image_Spark.src,
      range: 40,
      maxSpeed: 40,
      motorPower: 600,
      brochureLink: "",
      exploreLink: "/spark",
      logo: Logo_Spark.src
    }, {
      name: "Bike 3",
      image: Image_Miniscooter.src,
      range: 35,
      maxSpeed: 35,
      motorPower: 450,
      brochureLink: "",
      exploreLink: "/mini-scooty",
      logo: Logo_Mini_Scooty.src
    }
  ];
  return (
    <>
      <HeroSection
        title="Benling Redefining Electric Mobility"
        subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
        buttonText="Explore More"
        imageSrc={HeroImage.src}
      />
      <HeroSubSection
        title="Crown Benling Electric Mobility, proudly operated by"
        highlightText="Crown Group of Companies"
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
        <section className="bg-gradient-to-l from-[rgba(11,5,45,1)] to-[rgba(30,20,60,1)] py-12 px-8 mx-10 mb-20 mt-10 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Text Block */}
            <div className="text-white flex flex-col space-y-6">
              <Image src={CrownLogo.src} alt="Crown Logo" width={150} height={150} />
              <p className="text-4xl md:text-5xl font-semi-bold leading-tight font-magistral">
                Pakistan Largest EV Scooter Growing Network
              </p>

              <p className="text-base md:text-lg font-light font-jakarta">
                Crown Benling is driving the EV revolution with a fast-growing network, making electric mobility accessible, reliable, and future-ready across Pakistan.
              </p>
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
