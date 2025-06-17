import Typography from "@/components/GradientText/Typography";
import Bikeblue from "../../public/assets/flash/ColorSection/color1.webp";
import Bikesilver from "../../public/assets/flash/ColorSection/color2.webp";
import BikeArmygreen from "../../public/assets/flash/ColorSection/color3.webp";
import BikeMattblack from "../../public/assets/flash/ColorSection/color4.webp";
import BikeRed from "../../public/assets/flash/ColorSection/color5.webp";
import BikeColorCard from "@/components/Cards/BikeColorCard";



export default function RoshniColorShowcase() {
    const bikes = [
        {
            imageSrc: Bikeblue.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #DDE6F0 60.23%)",
            title: "Grey",
        },
        {
            imageSrc: Bikesilver.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #77D227 60.23%)",
            title: "Green",
        },
        {
            imageSrc: BikeMattblack.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #1B1B1C 60.23%)",
            title: "Black",
        },
        {
            imageSrc: BikeArmygreen.src ,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #E53F4C 60.23%)",
            title: "Red",
        },
        {
            imageSrc: BikeRed.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #A86FE8 60.23%)",
            title: "Purple",
        },
    ];

    return (
        <section className="bg-black md:py-40 py-20 px-4 text-white bg-black-30">
            <div className="text-center text-4xl md:text-4xl mb-10 font-magistral">
                <div className="mb-4" data-aos="zoom-out">
                <Typography as="h2" variant="h2-medium-magistral">
                    Color your World With Flash
                </Typography>
                    </div>
                    <div data-aos="fade-up">
                <Typography as='div' variant="body-regular-jakarta">
                    Flash is available in a vibrant range of colors, perfectly curated to match every style. Choose from classic tones to bold hues for a
                    standout look.
                </Typography>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-lg flex flex-wrap justify-center md:gap-10">                    
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