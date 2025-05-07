import Feature1IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features1.webp';
import Feature2IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features2.webp';
import Feature3IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features3.webp';
import Feature4IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features4.webp';
import Feature5IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features5.webp';
import Feature6IMG from '../../public/assets/Knight-Rider/FeaturesIMG/Features6.webp';

export interface FeatureHeader {
  featureTitle: string;
  featureText: string;
  bgColor: string;
  textColor: string;
}

export interface Specification {
  title: string;
  value: string;
}

export interface Specification2 {
  title2: string;
  value2: string;
}

export interface Feature {
  img: any;
  alt: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const featureHeader: FeatureHeader = {
  featureTitle: 'Designed for Your Comfort and Control',
  featureText: `Experience a blend of thoughtful design and advanced technology. Roshni's features are tailored to enhance your safety, convenience, and riding pleasure.`,
  bgColor: 'bg-black-30',
  textColor: 'text-white',
};

export const aboutSpecificationsData: Specification[] = [
  { title: 'Battery', value: 'Graphene' },
  { title: 'Motor', value: '1200W Brushless' },
  { title: 'Range', value: '100km - 105km' },
  { title: 'Maximum Speed', value: '60km/h' },
  { title: 'Charging Time', value: '6-8hrs' },
  { title: 'Battery Type', value: '72V-35Ah' },
  { title: 'Speed Mode', value: '4 Mode' },
  { title: 'Charger', value: '72V - 6A' },
  { title: 'Dimensions', value: '1950 x 830 x 1110mm' },
];

export const aboutSpecificationsData2: Specification2[] = [
  { title2: 'Battery & Motor Warranty', value2: '18 Months' },
  { title2: 'Wheelbase', value2: '1110mm' },
  { title2: 'Ground Clearance', value2: '210mm' },
  { title2: 'Loading Capacity', value2: '200 Kg' },
  { title2: 'Climbing Angle', value2: 'F & R: Disc' },
  { title2: 'Braking System', value2: '110mm' },
  { title2: 'Tubeless Tyre Size', value2: 'F & R: 90/90-12' },
  { title2: 'Net Weight', value2: '130 kg' },
  { title2: 'Security', value2: 'Remote Alarm System' },
];

export const featuresData: Feature[] = [
  {
    img: Feature1IMG,
    alt: 'Disc Brakes (Front & Rear)',
    title: 'Disc Brakes (Front & Rear)',
    description: 'Safety at its finest with efficient stopping power.',
  },
  {
    img: Feature2IMG,
    alt: 'Four Speed Modes',
    title: 'Four Speed Modes',
    description: 'Customize your riding experience based on terrain, battery use, or speed requirements.',
  },
  {
    img: Feature3IMG,
    alt: 'LED Headlights',
    title: 'LED Headlights',
    description: 'Bright, energy-efficient lighting for enhanced visibility.',
  },
  {
    img: Feature4IMG,
    alt: 'Robust Frame Technology',
    title: 'Robust Frame Technology',
    description: `The Knight Rider's strong, light frame provides a smooth, comfortable ride.`,
  },
  {
    img: Feature5IMG,
    alt: 'Premium Shock Suspension',
    title: 'Premium Shock Suspension',
    description: 'Advanced shock absorbers for a smoother ride on any terrain.',
  },
  {
    img: Feature6IMG,
    alt: 'Tubeless Tyres',
    title: 'Tubeless Tyres',
    description: 'High-quality tyres provide superior grip, stability, and reliability on all road types.',
  },
];

export const faqsData: FAQ[] = [
  {
    question: 'What color options are available for the Benling Knight Rider?',
    answer: 'You can return any item within 30 days of purchase. The item must be in its original condition and packaging.',
  },
  {
    question: 'What is the range of the Benling Knight Rider on a single charge?',
    answer: 'Shipping typically takes between 5-7 business days within the continental US. International shipping times may vary.',
  },
  {
    question: 'How powerful is the motor of the Benling Knight Rider?',
    answer: 'Yes, we offer 24/7 customer support. You can contact us via email, phone, or live chat.',
  },
  {
    question: 'What type of battery powers the Benling Knight Rider?',
    answer: 'Yes, we offer 24/7 customer support. You can contact us via email, phone, or live chat.',
  },
  {
    question: 'Are spare parts readily available for the Benling Knight Rider, and what warranty does it come with?',
    answer: 'Yes, we offer 24/7 customer support. You can contact us via email, phone, or live chat.',
  },
];

export const heading = 'Knight Rider Own The Night';
export const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];