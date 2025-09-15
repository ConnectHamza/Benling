import Typography from "@/components/GradientText/Typography";
import GraphineImage from "../../../public/assets/Blogs/BlogImage.png"
export default function GrapheneBatteryContent() {
    return (
        <div>
            <Typography variant="h4-medium-magistral" className="mb-2" id="what-is-graphene">What is Graphene?</Typography>
            <Typography variant="subtext-regular-jakarta">
                Graphene, the thinnest form of graphite, is a single atomic layer thick
                with a hexagonal structure. It's an incredibly efficient conductor of
                electricity, 200 times stronger than steel yet lightweight and flexible.
                Graphene utilizes graphene in battery technology, employing highly
                conductive and porous graphene plates for high-speed energy transfer
                during charging and discharging.
            </Typography>
            <img
                src={GraphineImage.src}
                alt="Graphene Battery"
                className="w-100 mx-auto my-4 block"
            />
            <Typography variant="h4-medium-magistral" className="mb-2" id="graphene-vs-batteries">Graphene vs. Other Rechargeable Batteries</Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-2" >
                While both lithium-ion and graphene batteries power devices similarly,
                graphene outshines traditional batteries in terms of speed of energy
                transfer, safety, and service life. The key differentiator is heat—
                graphene's near-perfect conductivity minimizes excess heat, ensuring safe
                and efficient energy transfer.
            </Typography>
            <Typography variant="subtext-semibold-jakarta" className="mt-5 mb-5">
                Graphene is a near-perfect conductor of electricity, dramatically
                reducing heat generation and allowing charging speeds up to 5 times as
                fast. This also increases the battery life by 5 times the charging
                cycles.
            </Typography>

            <Typography id="future-of-graphene" variant="h4-medium-magistral" className="mb-2">The Future of Graphene in the Battery Industry</Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                Although graphene is currently in the early stages of integration into battery technology, its potential is vast. The challenge lies in the high manufacturing costs of thin graphene sheets. As production processes become more cost-effective, graphene's applications will expand.
            </Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                The most promising use is in tandem with traditional lithium-ion batteries, enhancing conductivity in cathodes and anodes. Major players like Tesla Motors, Samsung, and Microsoft are investing in graphene battery development, fueling rapid technological advancements.
            </Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                As batteries evolve, graphene promises limitless possibilities for future capabilities. While predicting exact advancements is challenging, it's clear that graphene will play a pivotal role in the next phase of battery technology. The prospect of near-instant charging and weeks-long device usage is closer than ever, thanks to the revolutionary potential of graphene.
            </Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                Graphene batteries are poised to play a pivotal role in shaping a greener future, particularly evident in the realm of electric vehicles (EVs) such as electric bikes.
            </Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                The utilization of graphene batteries in EVs, including electric bikes, showcases their potential to revolutionize the automotive industry. Notably, in response to this transformative technology, Crown Benling Electric Mobility has recently launched its electric bikes, exclusively powered by graphene batteries.
            </Typography>
            <Typography variant="subtext-regular-jakarta" className="mb-5" >
                This strategic move by Crown Benling Electric Mobility highlights the growing recognition of graphene batteries as a key enabler for sustainable and eco-friendly transportation solutions. As the automotive landscape continues to embrace graphene-powered innovations, it signals a promising shift towards a more environmentally conscious and energy-efficient future.
            </Typography>
        </div>
    );
}
