'use client';

import HeroSection from '@/components/Herocontainer/Herocontainer';
import HeroImage from '../../public/assets/Home/Header/heroimage.png';
import StickyBar from '@/components/StickyBar/stickyBar';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import VideoSection from './VideoSection';
import ShopSection from "./ShopSectoin"
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import Logo_Ezze from "../../public/assets/Home/Carousel/Logo_Ezze.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Logo_Flash.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Logo_Knight_Rider.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Logo_Mini_Scooty.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Logo_Roshni.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Logo_Roshnix.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Logo_Spark.svg"
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
import BrandingSection from "./BrandingSection";
import CrownLogo from '../../public/assets/Home/Branding/crownlogo.png';
import Pak from '../../public/assets/Home/Branding/pakistanmap.png';
import Image from 'next/image';

export default function Home() {
  const bikes = [
    {
      name: "Bike 1",
      image: CarouselImage.src,
      range: 150,
      maxSpeed: 70,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/flash",
      logo: CarouselLogo.src
    },
    {
      name: "Bike 2",
      image: CarouselImage2.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/knight-rider",
      logo: CarouselLogo.src

    },
    {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 110,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/roshnix",
      logo: CarouselLogo.src
    },
    {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 55,
      maxSpeed: 40,
      motorPower: 650,
      brochureLink: "",
      exploreLink: "/ezee",
      logo: CarouselLogo.src
    }, {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 120,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: "",
      exploreLink: "/roshni",
      logo: CarouselLogo.src
    }, {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: "",
      exploreLink: "/firefly",
      logo: CarouselLogo.src
    }, {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 40,
      maxSpeed: 40,
      motorPower: 600,
      brochureLink: "",
      exploreLink: "/spark",
      logo: CarouselLogo.src
    }, {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 35,
      maxSpeed: 35,
      motorPower: 450,
      brochureLink: "",
      exploreLink: "/mini-scooty",
      logo: CarouselLogo.src
    }
  ];
  return (
    <>
      <HeroSection
        title="Benling Redefining Electric Mobility"
        subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
        buttonText="Explore More"
        imageSrc={HeroImage.src}
        onButtonClick={() => console.log('Button Clicked')}
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
        <div>
          <VideoSection />
        </div>
        <div>
          <ShopSection />
        </div>
      </div>
    </>

  );
}
