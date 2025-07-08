import Feature1IMG from '../../public/assets/Champion/Features/ChampionFeature1.webp';
import Feature2IMG from '../../public/assets/Champion/Features/ChampionFeature2.webp';
import Feature3IMG from '../../public/assets/Champion/Features/ChampionFeature3.webp';
import Feature4IMG from '../../public/assets/Champion/Features/ChampionFeature4.webp';
import Feature5IMG from '../../public/assets/Champion/Features/ChampionFeature5.webp';
import Feature6IMG from '../../public/assets/Champion/Features/ChampionFeature6.webp';

import Loop1 from "../../public/assets/Champion/loop/Grid-01.webp";
import Loop2 from "../../public/assets/Champion/loop/Grid-02.webp";
import Loop3 from "../../public/assets/Champion/loop/Grid-03.webp";
import Loop4 from "../../public/assets/Champion/loop/Grid-04.webp";
import Loop5 from "../../public/assets/Champion/loop/Grid-05.webp";


export const slides = [
  { image: Loop1, width: 640, alt: "Side view" },
  { image: Loop2, width: 640, alt: "Front view" },
  { image: Loop3, width: 640, alt: "Dashboard" },
  { image: Loop4, width: 320, alt: "Logo vertical" },
  { image: Loop5, width: 1300, alt: "Full scooter" },
];


export const featureHeader = {
    featureTitle: 'Commanding, Dynamic, and Built to Perform',
    featureText: `The Crown Benling Champion delivers bold performance with striking design, powerful engineering, and unmatched reliability—perfect for riders who demand power, style, and endurance.`,
      bgColor: 'bg-gradient-to-t from-[#122737] via-[#081118] to-[#081118]',
    textColor: 'text-white',
  };


  export const aboutSpecificationsData = [
    { title: "Motor", value: "1200W Brushless" },
    { title: "Top Speed", value: "65-70 km/h" },
    { title: "Range", value: "200-220 km" },
    { title: "Battery", value: "72V.60Ah" },
    { title: "Battery Type", value: "Lithium-LiFePO₄" },
    { title: "Speed Mode", value: "4 Mode" },   
];

export const aboutSpecificationsData2 = [
    { title2: "Charger", value2: "72V.8A" },
    { title2: "Charging Time", value2: "5 to 6 Hours" },
    { title2: "Net Weight", value2: "164 kg" },
    { title2: "Security", value2: "Remote Alarm System" },
    { title2: "NFC Unlock", value2: "Yes" },
    { title2: "Braking System (F/R)", value2: "(CBS)" },
];


export const featuresData = [
    {
        img: Feature1IMG,
        alt: 'Smart Headlight with Signature LED Ring',
        title: 'Smart Headlight with Signature LED Ring',
        description: 'Ride confidently day or night with a high-intensity headlamp featuring a unique circular LED signature. Engineered for visibility and style, it not only lights your path but also turns heads. The bold grille adds rugged protection and an eye-catching aesthetic.',
        
    },
    {
        img: Feature2IMG,
        alt: 'CBS System (Combined Braking System)',
        title: 'CBS System (Combined Braking System)',
        description: 'Safety is non-negotiable. CBS ensures synchronized braking for shorter stops and better stability, while dual front disc brakes deliver responsive stopping power.'
    },
    {
        img: Feature3IMG,
        alt: 'Side Stand Sensor',
        title: 'Side Stand Sensor',
        description: `Smart safety starts from the ground up. The side stand sensor ensures your scooter won't accidentally accelerate when the stand is deployed. A key element in preventing unexpected movement, especially in urban environments—ride smarter and safer with this integrated safeguard.`
    },
    {
        img: Feature4IMG,
        alt: 'NFC Unlock System',
        title: 'NFC Unlock System',
        description: `Step into the future of mobility with the NFC unlock system—a secure, contactless way to power up your ride. Simply tap your NFC card on the digital display to unlock and start the scooter. No traditional keys, no hassle—just fast, convenient, and tech-forward access that keeps you moving effortlessly.`
    },
    {
        img: Feature5IMG,
        alt: 'Comfort-Tuned Handlebar & Intelligent Digital Dashboard',
        title: 'Comfort-Tuned Handlebar & Intelligent Digital Dashboard',
        description: `Ride in comfort with our fatigue-reducing handlebar and stay informed with a smart digital dashboard showing real-time speed, battery, and trip data—clear, bright, and easy to read.`
    },
    {
        img: Feature6IMG,
        alt: 'Robust Rear Suspension & Protection Guard',
        title: 'Robust Rear Suspension & Protection Guard',
        description: 'Engineered for durability, the rear suspension system handles bumps and terrain changes effortlessly. Meanwhile, reinforced side and rear protection bars guard against scratches and impacts—perfect for urban environments and tight parking spaces.'
    },

];

export const faqsData = [
   {
    "question": "What makes the Crown Champion’s range so high?",
    "answer": "Large-capacity LiFePO₄ battery designed for long-distance performance."
  },
  {
    "question": "What is its maximum speed?",
    "answer": "70 km/h—balanced for city and semi-urban routes."
  },
  {
    "question": "What is the warranty for this model?",
    "answer": "4 years / 48,000 km on core electricals."
  },
  {
    "question": "Is this model good for delivery riders?",
    "answer": "Yes, range and durability make it ideal for daily commercial use."
  },
  {
    "question": "How many riders can it support?",
    "answer": "Two adults with a load capacity of up to 200 kg."
  },
  {
    "question": "Is reverse mode available?",
    "answer": "Yes, standard in all Performance Series."
  },
  {
    "question": "What kind of lights and indicators are used?",
    "answer": "Full LED setup for visibility and safety."
  },
  {
    "question": "Does it require a license?",
    "answer": "Yes, registration and licensing are mandatory."
  },
  {
    "question": "Can it be charged using solar inverters?",
    "answer": "Yes, if they provide stable 220V output."
  },
  {
    "question": "Is there under-seat storage?",
    "answer": "Yes, along with front hooks and glove box."
  },
  {
    "question": "How is the dashboard display?",
    "answer": "Backlit digital meter with mode indicators."
  },
];