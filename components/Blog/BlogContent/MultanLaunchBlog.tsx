import Typography from "@/components/GradientText/Typography";
import Blog from "../../../public/assets/Blogs/Blog3.jpeg"
import Blog3con from "../../../public/assets/Blogs/MultanWebp/097A1962.webp"
import Blog4con from "../../../public/assets/Blogs/MultanWebp/097A2055.webp"
import Blog5con from "../../../public/assets/Blogs/MultanWebp/097A2186.webp"


export default function MultanLaunchBlog() {
    return (
        <div>
            {/* <Typography variant="h4-medium-magistral" className="mb-2" id="what-is-graphene">Strengthening Market Ties: Crown Electric Mobility's Director Business Development Engages with Karachi Dealerships</Typography> */}
            <Typography variant="subtext-regular-jakarta">
            The event was further elevated by the presence of Crown Group’s top leadership, including Chairman Mr. Farhan Hanif, Managing Director Mr. Kashif Qaseem, Director Business Development Mr. Zohaib Farhan, and Director Operations Mr. Omair Farhan. Their attendance underscored the strategic importance of the Multan market and highlighted Crown Electric Mobility’s strong commitment to advancing electric mobility in Pakistan. The gathering brought together more than 800 guests, primarily comprising trusted dealers and members of the Crown family, creating an atmosphere of celebration, collaboration, and forward looking vision.

            </Typography>
            <img
                src={Blog3con.src}
                alt="Cover Image"
                className="w-100 mx-auto my-4 block"
            />
            <Typography id="launch-innovation" variant="h4-medium-magistral" className="mb-2">Launching Innovation: Performance Series (LiFePO4)</Typography>
           <p className="font-jakarta">The highlight of the evening was the unveiling of Crown Electric Mobility’s Performance Series, a lineup of state-of-the-art electric bikes designed to meet diverse commuting needs with style, power, and sustainability.</p>
            <br />
           <Typography id="launch-innovation" variant="h4-medium-magistral" className="mb-2">Here’s a closer look at the showstoppers:</Typography>
            <ul className="list-disc pl-5 font-jakarta">
                <li><b>Crown Electric Markhor:</b> 3000W Brushless Motor, 72V40Ah battery, range 110-130km, speed up to 90 km/h</li>
                <li><b>Crown Electric Cherry:</b> 3000W Brushless Motor, 72V40Ah battery, range 110-130km, speed 90 km/h</li>
                <li><b>Crown Electric Champion:</b> 1200W Brushless Motor, 72V60Ah battery, extended range of 200-220km, speed 70 km/h</li>
                <li><b>Crown Electric Raftaar:</b> 2000W Brushless Motor, 72V40Ah battery, range 140-160km, top speed 95 km/h</li>
                <li><b>Crown Electric Victory:</b> 1000W Brushless Motor, 72V30Ah battery, range 100-120km, speed 55 km/h</li>
            </ul><br />
            <p className="font-jakarta">Each model within the Performance Series is equipped with LiFePO4 (Lithium Iron Phosphate) batteries, ensuring long life, rapid charging, and superior safety.</p>
            <br />

            <img
                src={Blog4con.src}
                alt="Cover Image"
                className="w-100 mx-auto my-4 block"
            />
            <br />

            <Typography id="showroom-debuts" variant="h4-medium-magistral" className="mb-2">First Tier A Showroom Debuts with 100+ Units Sold Before Official Launch</Typography>
            <p>Adding to the excitement, the first-ever Tier A showroom of Crown Electric Mobility in Pakistan was inaugurated during the Multan Launch Event. This state-of-the-art facility redefines customer experience, offering an immersive and futuristic showcase of the full product lineup.
                <br />
                Remarkably, the Multan showroom sold over 100 units in just two months, even before its official launch. This impressive milestone reflects the strong market demand and growing trust in the Crown Electric Mobility brand.
            </p>

            <img
                src={Blog5con.src}
                alt="Cover Image"
                className="w-100 mx-auto my-4 block"
            />
            <br />

            <Typography id="community-engagement" variant="h4-medium-magistral" className="mb-2">Local Influence & Community Engagement</Typography>
            <p>The event also saw participation from prominent Multan-based influencers who shared the excitement and energy of the launch with their extensive audiences, further amplifying the impact of the Multan Launch Event across digital platforms.
            </p>
            <br />

            <Typography variant="h4-medium-magistral" className="mb-2">The Road Ahead</Typography>
            <p>The success of the Multan Launch Event not only signifies Crown Electric Mobility’s growing footprint in Pakistan but also reaffirms the potential of its Performance Series to transform urban commuting. With innovation, performance, and environmental responsibility at its core, Crown Electric Mobility is poised to lead the electric revolution in the region.
                <br />
                Stay tuned as Crown Electric Mobility powers ahead with the Performance Series—reshaping the way Multan moves.
            </p>
           
        </div>
    );
}
