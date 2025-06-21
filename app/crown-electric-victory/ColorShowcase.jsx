import RubyRed from "../../public/assets/Champion/ColorSection/Ruby-Red.webp";
import SlateGrey from "../../public/assets/Champion/ColorSection/Slate-Grey.webp";
import MintLightGreeb from "../../public/assets/Champion/ColorSection/Mint-Light-Green.webp";
import SapphireBlue from "../../public/assets/Champion/ColorSection/Sapphire-Blue.webp";
import OnyxBlack from "../../public/assets/Champion/ColorSection/Onyx-Black.webp";

import BikeColorCard from "@/components/Cards/BikeColorCard";
export default function RoshniColorShowcase() {
    const bikes = [
        {
            imageSrc: RubyRed.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #940F1A 60.23%)",
            title: "Ruby Red",
        },
        {
            imageSrc: SlateGrey.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #6A7590 60.23%)",
            title: "Slate Grey",
        },
        {
            imageSrc: MintLightGreeb.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #B8D7D4 60.23%)",
            title: "Mint Light Green",
        },
        {
            imageSrc: SapphireBlue.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #678CDC 60.23%)",
            title: "Sapphire Blue",
        },
        {
            imageSrc: OnyxBlack.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #86868A 60.23%)",
            title: "Onyx Black",
        },
    ];

    return (
        <section className="bg-black md:py-40 py-20 px-4 text-white w-full flex flex-col items-center"
        style={{
            background: 'linear-gradient(to bottom, #081118 70%, #122737 90%)',
        }}>
            <div className="w-lg">
            <h2 className="text-center text-4xl md:text-4xl mb-10 font-magistral">
                Bold colors. Unmatched style.
Crown Electric Champion.
            </h2>
            <div className="flex flex-wrap justify-center">
                {bikes.map((bike, index) => (
                    <BikeColorCard
                        key={index}
                        imageSrc={bike.imageSrc}
                        gradient={bike.gradient}
                        title={bike.title}
                    />
                ))}
                </div>
            </div>
        </section>
    );
}