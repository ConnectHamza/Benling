'use client';

import ShopSection from "./ShopSection";
import Faqs from '@/components/Faqs/Faqs';
import DealersSection from "./DealersSection";
import SaleSection from "./SaleSection"
import { faqsData } from './data';
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
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
export default function Page() {
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
      <div>
        <ShopSection />
      </div>
      <div>
        <DealersSection />

      </div>
      <div>
        <SaleSection />
      </div>
      <div>
        <MotorcycleCarousel items={bikes} autoplay={true} />

      </div>
      <Faqs data={faqsData} />
    </>

  );
}
