import Feature1IMG from '../../public/assets/Roshni/FeaturesIMG/Feature1.webp';
import Feature2IMG from '../../public/assets/Roshni/FeaturesIMG/Feature2.webp';
import Feature3IMG from '../../public/assets/Roshni/FeaturesIMG/Feature3.webp';
import Feature4IMG from '../../public/assets/Roshni/FeaturesIMG/Feature4.webp';

import Loop1 from "../../public/assets/Roshni/Loop/Grid-01.webp";
import Loop2 from "../../public/assets/Roshni/Loop/Grid-02.webp";
import Loop3 from "../../public/assets/Roshni/Loop/Grid-03.webp";
import Loop4 from "../../public/assets/Roshni/Loop/Grid-04.webp";
import Loop5 from "../../public/assets/Roshni/Loop/Grid-05.webp";


export const slides = [
  { image: Loop1, width: 640, alt: "Side view" },
  { image: Loop2, width: 640, alt: "Front view" },
  { image: Loop3, width: 640, alt: "Dashboard" },
  { image: Loop4, width: 320, alt: "Logo vertical" },
  { image: Loop5, width: 1300, alt: "Full scooter" },
];


export const featureHeader = {
    featureTitle: 'Designed for Your Comfort and Control',
    featureText: `Experience a blend of thoughtful design and advanced technology. Roshni's features are tailored to enhance your safety, convenience, and riding pleasure.`,
    bgColor: 'bg-white',
    textColor: 'text-black-30',
  };


  export const aboutSpecificationsData = [
    { title: "Motor", value: "1200W Brushless" },
    { title: "Maximum Speed", value: "55-60 km/h" },
    { title: "Battery", value: "72V.36Ah" },
    { title: "USB Port", value: "Mobile Charging" },
    { title: "Dimensions", value: "1810 x 650 x 1100 mm" },
    { title: "Speed Mode", value: "4 Modes" },
    { title: "Security", value: "Remote Alarm System" },
    { title: "Net Weight", value: "124 kg" },
];

export const aboutSpecificationsData2 = [
    { title2: "Charger", value2: "72V.5A" },
    { title2: "Wheelbase", value2: "1330 mm" },
    { title2: "Charging Time", value2: "6 to 8 Hours" },
    { title2: "Loading Capacity", value2: "160 kg" },
    { title2: "Climbing Angle", value2: "≤20°" },
    { title2: "Braking System", value2: "Fr.Disc / Re.Drum" },
    { title2: "Tubeless Tyre Size", value2: "F & R 90/80/12" },

];


export const featuresData = [
    {
        img: Feature1IMG,
        alt: 'Dual Braking System',
        title: 'Dual Braking System',
        description: 'Front disc and rear drum brakes ensure precise and reliable stopping power.',
        
    },
    {
        img: Feature2IMG,
        alt: 'Intuitive Digital Dashboard',
        title: 'Intuitive Digital Dashboard',
        description: 'Real-time updates on speed, battery status, and more at a glance.'
    },
    {
        img: Feature3IMG,
        alt: 'Swingarm Cover',
        title: 'Swingarm Cover',
        description: 'Durable protection against debris, impacts, and corrosion for a clean, finished look.'
    },
    {
        img: Feature4IMG,
        alt: 'Spacious Storage',
        title: 'Spacious Storage',
        description: `Carry everything you need with ease and convenience.`
    },

];

export const faqsData = [
    {
        question: "What type of motor powers the Crown Benling Roshni?",
        answer: "The Crown Benling Roshni is equipped with a 1200W brushless motor for efficient and powerful performance."
    },
    {
        question: "How long does it take to fully charge the Roshni?",
        answer: "The battery charges fully in 6 to 8 hours using a 72V 5A charger."
    },
    {
        question: "What is the maximum range of the Crown Benling Roshni on a single charge?",
        answer: "The Roshni offers a range of 115-120 km on a single charge, depending on riding conditions."
    },
    {
        question: "What is the loading capacity of the Roshni?",
        answer: "The Roshni has a loading capacity of up to 160 kg, suitable for a rider with additional cargo."
    },
    {
        question: "What type of braking system does the Crown Benling Roshni feature?",
        answer: "The Roshni is equipped with a front disc and rear disc braking system for enhanced safety and control."
    },
];