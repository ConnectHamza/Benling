import Herosection from "./HeroSection";
import ManufacturerDetails from "./ManufactureSection";
import MissionVisionCards from "./MissionSection";
import Subsection from "./SubSection";
import BrandingSection from "../home/BrandingSection";
import BlogSection from "../home/BlogSection";
import RecentBlogsSection from "../home/RecentBlogs/BlogSection";

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
    </>
  );
}
