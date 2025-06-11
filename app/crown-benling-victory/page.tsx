// "use client"
// import React, { useEffect } from 'react'
// import Banner from './Banner'
// import StickyBar from '@/components/StickyBar/stickyBar'
// import FeaturesSection from '@/components/Features/Features'
// import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
// import LoopMain from '@/components/LoopCarousel/loop-main'
// import VictoryLoopIMG from '../../public/assets/VIctory/VictoryLoopImage.png'
// import Complimentary from '../../public/assets/RoshniX/Complimentary.png'
// import Specifications from '@/components/TechnicalSpecifications/Specifications'
// import Faqs from '@/components/Faqs/Faqs'
// import { initFixOverflow } from '../fixOverflow'
// import Featured from '@/components/Features/HeroFeature'
// import VictoryFeatuedIMG from '../../public/assets/Victory/Benling-Velocity-Banner.webp'
// import VictoryMobile from '../../public/assets/Victory/Velocity-Banner-mobile.webp'
// import Tabs from './Tabs'


// const heading = 'Champion Your Commute.';
// const colors = [
//   { color: '#000', percentage: 50 },
//   { color: '#000', percentage: 80 },
//   { color: '#000', percentage: 100 },
// ];
// const statsData = [
//   { value: "50-55 km/h", label: "Top Speed" },
//   { value: "100-120 km", label: "Range" },
//   { value: "4-5 Hours", label: "Charging Time" },
//   { value: "Yes", label: "NFC Unlock" },
// ];


// const page = () => {

//   useEffect(() => {
//     initFixOverflow();
//   }, []);

//   return (
//     <div>
//       <head>
//         <title>Crown Benling - Victory</title>
//       </head>
//       <Banner />
//       <StickyBar
//         title="Crown Benling Victory"
//         description='Introducing the Crown Benling Victory—sleek design with unmatched performance. Powered by a 1000W motor and 72V 30Ah lithium battery, it offers a 50-55 km/h top speed and up to 120 km range. Perfect for city commuting or exploration, it delivers confidence, style, and zero emissions.'
//         gradient1="#B7C6E3"
//         gradient2="#FFFFFF"
//         textColor="text-[#536478]"
//       />
//       <Featured
//         stats={statsData}
//         imageAlt={"Champion Feature Image"}
//         mobileImageSrc={VictoryMobile}
//         imageSrc={VictoryFeatuedIMG}
//         textColor="text-black"
//         cardBgColor="bg-white/40"
//         titleVariant='h5-bold-jakarta'
//         subtitleVariant='body-regular-jakarta'
//         itemsPosition=""
//       />
//       <Tabs />
      
//       <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />

//       <LoopMain imageSrc={VictoryLoopIMG} heading={heading} colors={colors} />
//       <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
//       <Faqs data={faqsData} />
//     </div>
//   )
// }

// export default page