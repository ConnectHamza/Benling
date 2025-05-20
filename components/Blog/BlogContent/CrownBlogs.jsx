import Typography from "@/components/GradientText/Typography";
import Blog from "../../../public/assets/Blogs/Blog3.jpeg"
import Blog3con from "../../../public/assets/Blogs/Blog3con.jpeg"


export default function GrapheneBatteryContent() {
    return (
        <div>
            <Typography variant="h4-medium-magistral" className="mb-2" id="what-is-graphene">Strengthening Market Ties: Crown Benling Electric Mobility's Director Business Development Engages with Karachi Dealerships</Typography>
            <Typography variant="subtext-regular-jakarta">
                In line with Crown Benling Electric Mobility’s mission to promote accessible, sustainable transportation across Pakistan,<Typography variant="subtext-semibold-jakarta" as="span">
                    {" Director – Business Development, Mr. Zohaib Farhan, "}
                </Typography> recently visited Crown Benling Electric Mobility’s dealerships in Karachi. Accompanied by Regional Sales Manager Sindh, <Typography variant="subtext-semibold-jakarta" as="span">
                    {"Mr. Mubashir Awan, "}
                </Typography> <Typography variant="subtext-semibold-jakarta" as="span">
                    {" and Area Sales Manager, Mr. Yaseen Pinjra, "}
                </Typography>the visit reinforced the company’s commitment to building strong, on-ground relationships with its dealer partners.
            </Typography>
            <img
                src={Blog3con.src}
                alt="Cover Image"
                className="w-100 mx-auto my-4 block"
            />
            <Typography variant="subtext-regular-jakarta" className="mb-2" >
                During the visit, the team engaged with the dealership management at <Typography variant="subtext-semibold-jakarta" as="span">
                    {"Star Electronics (Shadman) "}
                </Typography> and <Typography variant="subtext-semibold-jakarta" as="span">
                    {"Rafiq Auto Exchange (Up Market) "}
                </Typography>to align on shared business goals and ensure consistent retail execution in one of the country’s most dynamic markets.
            </Typography>
            <Typography variant="subtext-semibold-jakarta" className="mt-5 mb-5">
                This visit reflects Crown Benling Electric Mobility’s dedication to expanding its electric vehicle (EV) network and offering urban consumers innovative, eco-friendly mobility solutions. With a growing lineup of electric bikes, the company continues to set benchmarks in electric mobility.
            </Typography>

            <Typography id="future-of-graphene" variant="h4-medium-magistral" className="mb-2">Customer-Centric Approach</Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                A key focus of the visit was to engage directly with customers and gain valuable insights into their preferences and experiences. <Typography variant="subtext-semibold-jakarta" as="span">
                    {"Mr. Zohaib Farhan  "}
                </Typography>emphasized the importance of placing the customer at the heart of every decision, from product development to after-sales support. By actively listening to feedback and understanding on-ground challenges, Crown Benling aims to fine-tune its offerings better to serve the evolving needs of the local market.
            </Typography>
        </div>
    );
}
