'use client';

import HeroSection from '@/components/Herocontainer/Herocontainer';
import HeroImage from '../../public/assets/Home/Header/heroimage.png';
import StickyBar from '@/components/StickyBar/stickyBar';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import CarouselImage from '../../public/assets/Home/Carousel/carousel1.png';
import CarouselImage2 from '../../public/assets/Home/Carousel/carousel2.png';
import CarouselImage3 from '../../public/assets/Home/Carousel/carousel3.png';

import FlashTitle from "../../public/assets/Home/Carousel/Logo.png"
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
export default function Home() {
  const bikes = [
    {
      name: "Bike 1",
      image: CarouselImage.src,
      range: 150,
      maxSpeed: 70,
      motorPower: 2000,
      brochureLink: "",
      exploreLink: "/bike1",
      logo:FlashTitle.src
    },
    {
      name: "Bike 2",
      image: CarouselImage2.src,
      range: 120,
      maxSpeed: 60,
      motorPower: 1800,
      brochureLink: "",
      exploreLink: "/bike2",
      logo:FlashTitle.src

    },
    {
      name: "Bike 3",
      image: CarouselImage3.src,
      range: 100,
      maxSpeed: 50,
      motorPower: 1500,
      brochureLink: "",
      exploreLink: "/bike3",
      logo:FlashTitle.src

    },
  ];
    return (
        <>
            <HeroSection
                title="Benling Redefining Electric Mobility"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
                buttonText="Explore More"
                imageSrc={HeroImage.src} // Ensure you place the image in the public/images directory
                onButtonClick={() => console.log('Button Clicked')}

            />
            <HeroSubSection
                title="Crown Benling Electric Mobility, proudly operated by"
                highlightText="Crown Group of Companies"
                description="leads the EV revolution with sustainable, high-performance scooters designed for efficiency, reliability, and innovation."
                buttonLabel="Read More About Crown"
                onButtonClick={() => {console.log("Button")}}
                backgroundImage={HeroImageSub.src} // This is key!
            />
            <div>
            <MotorcycleCarousel items={bikes} autoplay={true} />
            </div>
            <div>
            <FeaturesSection />
            </div>
        </>

    );
}
