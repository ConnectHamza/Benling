import Herosection from "./HeroSection";
import ManufacturerDetails from "./ManufactureSection";
import MissionVisionCards from "./MissionSection";
import Subsection from "./SubSection";
import BrandingSection from "../home/BrandingSection";
import BlogSection from "../home/BlogSection";
import RecentBlogsSection from "../home/RecentBlogs/BlogSection";
import Faqs from "@/components/Faqs/Faqs";


export const metadata = {
  title: "About Us - Leading Pakistan’s EV Revolution",
  description: "Explore the innovative electric bike models offered by Crown Electric Mobility. We are committed to transforming Pakistan's transportation with innovative and eco-friendly electric scooters.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us - Leading Pakistan’s EV Revolution",
    description: "Explore the innovative electric bike models offered by Crown Electric Mobility. We are committed to transforming Pakistan's transportation with innovative and eco-friendly electric scooters.",
    url: "https://crownelectricmobility.com/about-us",
    type: "website",
  },
};


const faqsData = [
  {
    question: "Who owns Crown Electric Mobility?",
    answer: [`
        Crown Electric is a division of Crown Group, one of Pakistan’s most trusted names in auto parts and mobility solutions.`
    ]
  },
  {
    question: "What’s your mission as a company?",
    answer: "To promote electric mobility across Pakistan by offering safe, stylish, and sustainable vehicles for all demographics."
  },
  {
    question: "Where are your vehicles designed and assembled?",
    answer: `Our vehicles are designed in partnership with leading Chinese EV innovators and assembled locally in Pakistan.`
  },
  {
    question: "How long has Crown been in the auto business?",
    answer: "Crown Group has over three decades of experience in the automotive industry."
  },
  {
    question: "Are you certified by any government EV programs?",
    answer: "Yes, we are aligned with national EV policies and support local green mobility initiatives."
  },
  {
    question: "What makes Crown Electric’s batteries different?",
    answer: "We use LiFePO₄ batteries in many models for better cycle life, thermal stability, and long-term performance."
  },
  {
    question: "Do you export vehicles internationally?",
    answer: "Currently, our focus is on domestic expansion, but export potential is under review."
  },
  {
    question: "How do you ensure quality and safety?",
    answer: "Every Crown Electric vehicle undergoes strict quality control checks and is tested for urban road conditions."
  },
  {
    question: "What makes your designs unique?",
    answer: "Our scooters are designed with a mix of local style preferences and international design standards—blending functionality with flair."
  },
  {
    question: "What does Crown Electric offer beyond bikes?",
    answer: "We offer a full mobility experience—charging guidance, dealership support, warranties, and mobile app features (coming soon)."
  },
  {
    question: "How do I contact the corporate team for dealership inquiries?",
    answer: " Visit the “Contact Us” page or email info@crownelectricmobility.com with your query."
  },
];


export default function About() {
  return (
    <>
      <div>
        <Herosection />
      </div>
      <div className="py-10">
        <Subsection />
      </div>
      <div>
        <MissionVisionCards />
      </div>
      <div>
        <ManufacturerDetails />
      </div>
      <div>
        <BrandingSection />
      </div>
      <div>
        <RecentBlogsSection />
      </div>
      <div>
        <Faqs data={faqsData}/>
      </div>
    </>
  );
}
