'use client';

import ShopSection from "./ShopSection";
import Faqs from '@/components/Faqs/Faqs';
import DealersSection from "./DealersSection";
import SaleSection from "./SaleSection"
import StoreLocator from '../../components/StoreLocator/StoreLocator'
import { faqsData } from './data';
import TabbedCarousel from '../home/TabCarousel'



export default function DealerClient() {
  
//     {
//       name: "Bike 1",
//       image: Image_Flash.src,
//       range: "150 km Range",
//       maxSpeed: "70 km/h Top Speed",
//       motorPower: "1500 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Flash_Brochure.pdf',
//       exploreLink: "/crown-electric-flash",
//       logo: Logo_Flash.src
//     },
//     {
//       name: "Bike 2",
//       image: Image_KnightRider.src,
//       range: "100 km Range",
//       maxSpeed: "60 km/h Top Speed",
//       motorPower: "1500 Motor Power",
//       brochureLink: "brouchers/Crown_Benling_Knight_Rider_Brochure.pdf",
//       exploreLink: "/crown-electric-knight-rider",
//       logo: Logo_Knight_Rider.src

//     },
//     {
//       name: "Bike 3",
//       image: Image_Roshnix.src,
//       range: "110 km Range",
//       maxSpeed: "60 km/h Top Speed",
//       motorPower: "1500 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Roshni_X_Brochure.pdf',
//       exploreLink: "/crown-electric-roshni-x",
//       logo: Logo_Roshnix.src
//     },
//     {
//       name: "Bike 3",
//       image: Image_Ezee.src,
//       range: "55 km Range",
//       maxSpeed: "40 km/h Top Speed",
//       motorPower: "650 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Ezee_Brochure.pdf',
//       exploreLink: "/crown-electric-ezee",
//       logo: Logo_Ezze.src
//     }, {
//       name: "Bike 3",
//       image: Image_Roshni.src,
//       range: "120 km Range",
//       maxSpeed: "60 km/h Top Speed",
//       motorPower: "1200 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Roshni_Brochure.pdf',
//       exploreLink: "/crown-electric-roshni",
//       logo: Logo_Roshni.src
//     }, {
//       name: "Bike 3",
//       image: Image_Firefly.src,
//       range: "100 km Range",
//       maxSpeed: "60 km/h Top Speed",
//       motorPower: "1200 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Firefly_Brochure.pdf',
//       exploreLink: "/crown-electric-firefly",
//       logo: Logo_Firefly.src
//     }, {
//       name: "Bike 3",
//       image: Image_Spark.src,
//       range: "40 km Range",
//       maxSpeed: "40 km/h Top Speed",
//       motorPower: "600 Motor Power",
//       brochureLink: '/brouchers/Crown_Benling_Spark_Brochure.pdf',
//       exploreLink: "/crown-electric-spark",
//       logo: Logo_Spark.src
//     }, {
//       name: "Bike 3",
//       image: Image_Miniscooter.src,
//       range: "35 km Range",
//       maxSpeed: "35 km/h Top Speed",
//       motorPower: "450 Motor Power",
//       brochureLink: "/brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf",
//       exploreLink: "/crown-electric-mini-scooty",
//       logo: Logo_Mini_Scooty.src
//     },{
//       name: "Bike 3",
//       image: Image_Fairy.src,
//       range: "80 km Range",
//       maxSpeed: "55 km/h Top Speed",
//       motorPower: "1000 Motor Power",
//       brochureLink: "/brouchers/Crown_Benling_Fairy_Brochure.pdf",
//       exploreLink: "/crown-electric-fairy",
//       logo: Logo_Fairy.src
//     }
//   ];

  return (
    <>
    <div>
    <StoreLocator />
    </div>
      {/* <div>
        <ShopSection />
      </div> */}
      {/* <div>
        <DealersSection />
      </div>
      <div>
        <SaleSection />
      </div>
      <div className="md:pb-40 pb-20"> */}
        {/* <MotorcycleCarousel items={bikes} autoplay={true} /> */}
        {/* <TabbedCarousel /> */}
      {/* </div>
      <Faqs data={faqsData} /> */}
    </>

  );
}
