import Herosection from "./HeroSection";
import ManufacturerDetails from "./ManufactureSection";
import MissionVisionCards from "./MissionSection";
import Subsection from "./SubSection";
import BrandingSection from "../home/BrandingSection";
import BlogSection from "../home/BlogSection";

export const metadata = {
  title: 'Crown Benling Electric Mobility - About Us',
  description: '',
  metadataBase: new URL('https://crownelectricmobility.com'), 
  alternates: {
    canonical: '/crown-benling-about',
  },
  openGraph: {
    title: 'Crown Benling Electric Mobility - About Us',
    description: '',
    url: 'https://crownelectricmobility.com/crown-benling-about',
    siteName: 'Crown Electric Mobility',
    type: 'website',
  },
};

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
        <BlogSection />
      </div>
    </>
  );
}
