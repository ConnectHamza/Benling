'use client';

import HeroSection from '@/components/Herocontainer/Herocontainer';
import HeroImage from '../../public/assets/Home/Header/heroimage.png';
import StickyBar from '@/components/StickyBar/stickyBar';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import VideoSection from './VideoSection';
import ShopSection from "./ShopSectoin";
import BlogSection from './BlogSection';
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import Logo_Ezze from "../../public/assets/Home/Carousel/Ezee_Logo.webp"
import Logo_Flash from "../../public/assets/Home/Carousel/Flash_Logo.webp"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Knightrider_Logo.webp"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Miniscooter_Logo.webp"
import Logo_Roshni from "../../public/assets/Home/Carousel/Roshni_Logo.webp"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Logo.webp"
import Logo_Spark from "../../public/assets/Home/Carousel/Spark_Logo.webp"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.webp"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.webp";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.webp";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.webp";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.webp";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooter_Image.webp";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.webp";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.webp";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.webp";
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
import BrandingSection from "./BrandingSection";
import CrownLogo from '../../public/assets/Home/Branding/crownlogo.png';
import Pak from '../../public/assets/Home/Branding/pakistanmap.png';
import Image from 'next/image';
import Faqs from '@/components/Faqs/Faqs'

import MiniScootyBroucher from "../../public/assets/Brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf";
import RoshniXBroucher from "../../public/assets/Brouchers/Crown_Benling_Roshni_X_Brochure.pdf";

import { faqsData } from './data';
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
      <section className="py-12 px-4 mb-20 mt-10 flex justify-center">
  <div className="w-full max-w-[1250px] rounded-xl bg-gradient-to-l from-[rgba(11,5,45,1)] to-[rgba(30,20,60,1)] px-4 md:px-6 py-12">
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
