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
import Logo_Fairy from "../../public/assets/Home/Carousel/Fairy_Logo.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.png";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.png";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.png";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.png";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooty_Image.png";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.png";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.png";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.png";
import Image_Fairy from "../../public/assets/Home/Carousel/Fairy_Image.webp";


export default function Page() {
  
 const bikes = [
    {
      name: "Bike 1",
      image: Image_Flash.src,
      range: "150 km Range",
      maxSpeed: "70 km/h Top Speed",
      motorPower: "1500 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Flash_Brochure.pdf',
      exploreLink: "/crown-electric-flash",
      logo: Logo_Flash.src
    },
    {
      name: "Bike 2",
      image: Image_KnightRider.src,
      range: "100 km Range",
      maxSpeed: "60 km/h Top Speed",
      motorPower: "1500 Motor Power",
      brochureLink: "brouchers/Crown_Benling_Knight_Rider_Brochure.pdf",
      exploreLink: "/crown-electric-knight-rider",
      logo: Logo_Knight_Rider.src

    },
    {
      name: "Bike 3",
      image: Image_Roshnix.src,
      range: "110 km Range",
      maxSpeed: "60 km/h Top Speed",
      motorPower: "1500 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Roshni_X_Brochure.pdf',
      exploreLink: "/crown-electric-roshni-x",
      logo: Logo_Roshnix.src
    },
    {
      name: "Bike 3",
      image: Image_Ezee.src,
      range: "55 km Range",
      maxSpeed: "40 km/h Top Speed",
      motorPower: "650 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Ezee_Brochure.pdf',
      exploreLink: "/crown-electric-ezee",
      logo: Logo_Ezze.src
    }, {
      name: "Bike 3",
      image: Image_Roshni.src,
      range: "120 km Range",
      maxSpeed: "60 km/h Top Speed",
      motorPower: "1200 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Roshni_Brochure.pdf',
      exploreLink: "/crown-electric-roshni",
      logo: Logo_Roshni.src
    }, {
      name: "Bike 3",
      image: Image_Firefly.src,
      range: "100 km Range",
      maxSpeed: "60 km/h Top Speed",
      motorPower: "1200 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Firefly_Brochure.pdf',
      exploreLink: "/crown-electric-firefly",
      logo: Logo_Firefly.src
    }, {
      name: "Bike 3",
      image: Image_Spark.src,
      range: "40 km Range",
      maxSpeed: "40 km/h Top Speed",
      motorPower: "600 Motor Power",
      brochureLink: '/brouchers/Crown_Benling_Spark_Brochure.pdf',
      exploreLink: "/crown-electric-spark",
      logo: Logo_Spark.src
    }, {
      name: "Bike 3",
      image: Image_Miniscooter.src,
      range: "35 km Range",
      maxSpeed: "35 km/h Top Speed",
      motorPower: "450 Motor Power",
      brochureLink: "/brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf",
      exploreLink: "/crown-electric-mini-scooty",
      logo: Logo_Mini_Scooty.src
    },{
      name: "Bike 3",
      image: Image_Fairy.src,
      range: "80 km Range",
      maxSpeed: "55 km/h Top Speed",
      motorPower: "1000 Motor Power",
      brochureLink: "/brouchers/Crown_Benling_Fairy_Brochure.pdf",
      exploreLink: "/crown-electric-fairy",
      logo: Logo_Fairy.src
    }
  ];


  return (
    <>
                <head>
                <title>Crown Benling - Find a Dealer</title>
            </head>
      <div>
        <ShopSection />
      </div>
      <div>
        <DealersSection />
      </div>
      <div>
        <SaleSection />
      </div>
      <div className="md:pb-40 pb-20">
        <MotorcycleCarousel items={bikes} autoplay={true} />
      </div>
      <Faqs data={faqsData} />
    </>

  );
}
