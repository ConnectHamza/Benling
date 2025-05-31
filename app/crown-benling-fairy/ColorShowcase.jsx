import Bikeblue from "../../public/assets/flash/ColorSection/color1.png";
import Bikesilver from "../../public/assets/flash/ColorSection/color2.png";
import BikeArmygreen from "../../public/assets/flash/ColorSection/color3.png";
import BikeMattblack from "../../public/assets/flash/ColorSection/color4.png";
import BikeRed from "../../public/assets/flash/ColorSection/color5.png";
import BikeColorCard from "@/components/Cards/BikeColorCard";



export default function RoshniColorShowcase() {
    const bikes = [
        {
            imageSrc: Bikeblue.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #DDE6F0 60.23%)",
            title: "Arctic Blaze",
        },
        {
            imageSrc: Bikesilver.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #77D227 60.23%)",
            title: "Neon Volt",
        },
        {
            imageSrc: BikeArmygreen.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #1B1B1C 60.23%)",
            title: "Midnight Storm",
        },
        {
            imageSrc: BikeMattblack.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #E53F4C 60.23%)",
            title: "Crimson Charge",
        },
        {
            imageSrc: BikeRed.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #A86FE8 60.23%)",
            title: "Plasma Purple",
        },
    ];

    return (
        <section className="bg-black py-12 px-4 text-white bg-black-100">
            <h2 className="text-center text-4xl md:text-4xl mb-10 font-magistral">
                Color your World With Flash
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
        </section>
    );
}