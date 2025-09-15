import Herosection from "./HeroSection";
import ManufacturerDetails from "./ManufactureSection";
import MissionVisionCards from "./MissionSection";
import Subsection from "./SubSection";
import BrandingSection from "../home/BrandingSection"
import BlogSection from "../home/BlogSection"

export default function About() {
    return (
        <div>
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
        </div>
    );
}
