import Feature1IMG from '../../public/assets/Magic/Features/Magic-Feature-1.webp';
import Feature2IMG from '../../public/assets/Magic/Features/Magic-Feature-2.webp';
import Feature3IMG from '../../public/assets/Magic/Features/Magic-Feature-3.webp';
import Feature4IMG from '../../public/assets/Magic/Features/Magic-Feature-4.webp';
import Feature5IMG from '../../public/assets/Magic/Features/Magic-Feature-5.webp';
import Feature6IMG from '../../public/assets/Magic/Features/Magic-Feature-6.webp';

import Loop1 from "../../public/assets/Magic/Loop/Grid-01.webp";
import Loop2 from "../../public/assets/Magic/Loop/Grid-02.webp";
import Loop3 from "../../public/assets/Magic/Loop/Grid-03.webp";
import Loop4 from "../../public/assets/Magic/Loop/Grid-04.webp";
import Loop5 from "../../public/assets/Magic/Loop/Grid-05.webp";


export const slides = [
    { image: Loop1, width: 640, alt: "Side view" },
    { image: Loop2, width: 640, alt: "Front view" },
    { image: Loop3, width: 640, alt: "Dashboard" },
    { image: Loop4, width: 320, alt: "Logo vertical" },
    { image: Loop5, width: 1300, alt: "Full scooter" },
];


export const featureHeader = {
    featureTitle: 'Small, Quick, and Simple to Use',
    featureText: `Ideal for short rides and city travel, the Crown Electric Magic offers smooth control, smart movement, and daily dependability—all in a compact form.`,
    bgColor: 'bg-white',
    textColor: 'text-black-30',
};


export const aboutSpecificationsData = [
    { title: "Motor", value: "450W Brushless" },
    { title: "Top Speed", value: "30-35 km/h" },
    { title: "Range", value: "30-35 km" },
    { title: "Battery", value: "48V.23Ah" },
    { title: "Battery Type", value: "Graphene" },
    { title: "Speed Mode", value: " 3 Mode" },
    { title: "Charger", value: "48V1.8A/48V 3A" },
    { title: "Charging Time", value: "6 to 8 Hours" },
    { title: "Dimensions", value: "1470 x 660 x 1060 mm" },
];

export const aboutSpecificationsData2 = [
    { title2: "Net Weight", value2: "63 kg" },
    { title2: "Security", value2: "Remote Alarm System" },
    { title2: "Angle", value2: "≤15°" },
    { title2: "Wheelbase", value2: "1055 mm" },
    { title2: "Ground Clearance", value2: "170 mm" },
    { title2: "Tyre Size", value2: "F: 14/2.5 R:14/2.5" },
    { title2: "Braking System (F/R)", value2: "Drum" },
    { title2: "Loading Capacity", value2: "98 kg" },
];


export const featuresData = [
    {
        img: Feature1IMG,
        alt: 'Multi-Surface Grip Tires',
        title: 'Multi-Surface Grip Tires',
        description: 'Durable, all-terrain friendly tires ensure smooth rides on city roads and rough paths alike. Designed for stability and grip, they offer confidence and comfort wherever you ride.',

    },
    {
        img: Feature2IMG,
        alt: 'Durable Aluminium Basket',
        title: 'Durable Aluminium Basket',
        description: `Carry your essentials with ease using this spacious front basket. Crafted from lightweight aluminium, it’s both sturdy and stylish.`
    },
    {
        img: Feature3IMG,
        alt: 'Smart Digital Dashboard',
        title: 'Smart Digital Dashboard',
        description: `Stay informed with real-time speed and battery updates on a clear digital screen.`

    },
    {
        img: Feature4IMG,
        alt: 'Comfort-Enhanced Riding Seat',
        title: 'Comfort-Enhanced Riding Seat',
        description: `Enjoy every ride in comfort with the wide, cushioned seat designed for longer journeys. Ergonomically built to support your posture, offering a smooth and relaxed riding experience.`
    },
    {
        img: Feature5IMG,
        alt: 'Supportive Rear Cushion',
        title: 'Supportive Rear Cushion',
        description: `Enjoy added comfort with an ergonomically designed backrest for smooth, relaxed rides.`
    },
    {
        img: Feature6IMG,
        alt: 'Manual Pedal Power Backup',
        title: 'Manual Pedal Power Backup',
        description: 'Crown Electric Magic features pedal-powered backup charging, keeping you moving even when the battery runs low.Its smart design ensures added convenience during emergencies and longer rides.'
    },

];

export const faqsData = [
    {
        question: "What is the maximum speed and range of Magic?",
        answer: "It goes up to 35 km/h and covers 30–35 km on a full charge."
    },
    {
        question: "Who is this product designed for?",
        answer: "Perfect for teenagers (above 14 years old) and light local commuting."
    },
    {
        question: "Does it require a driving license?",
        answer: "Usually not, but always confirm with local traffic laws."
    },
    {
        question: "How long does it take to charge?",
        answer: "Full charge in about 4 to 5 hours."
    },
    {
        question: "What battery does it use?",
        answer: "A graphene battery, suitable for short trips and lighter daily use."
    },
    {
        question: "What is the warranty coverage?",
        answer: [`
        <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Battery: 18 Months or 18,000 km</li>
      <li>Motor & Controller: 36 Months or 36,000 km</li>
      <li>Body Parts: 12 Months or 12,000 km</li>
    </ul>`
        ]
    },
    {
        question: "Is the Magic waterproof?",
        answer: "It’s water-resistant, but avoids driving in heavy rain or submerged areas."
    },
    {
        question: "What safety features does it include?",
        answer: "LED lights, rear brake lights, and speed limitations for added safety."
    },
    {
        question: "Does it have any storage space?",
        answer: "Lightweight Alloy Basket, suitable for small items or chargers."
    },
    {
        question: "Is it easy to park and carry?",
        answer: "Yes, it’s lightweight and compact for narrow streets and small parking spots."
    },
    {
        question: "Is the reverse function available?",
        answer: "Reverse function is not available, but the compact design ensures easy handling."
    },
];