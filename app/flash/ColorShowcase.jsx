import Bikeblue from "../../public/assets/RoshniX/ColorSection/blue.png";
import Bikesilver from "../../public/assets/RoshniX/ColorSection/silver.png";
import BikeArmygreen from "../../public/assets/RoshniX/ColorSection/armygreen.png";
import BikeMattblack from "../../public/assets/RoshniX/ColorSection/mattblack.png";
import BikeRed from "../../public/assets/RoshniX/ColorSection/red.png";
import BikeColorCard from "@/Components/Cards/BikeColorCard";
export default function RoshniColorShowcase() {
    const bikes = [
        {
            imageSrc: Bikeblue.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #3250BE 60.23%)",
            title: "Electric Blue & Yellow",
        },
        {
            imageSrc: Bikesilver.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #A2A2A2 60.23%)",
            title: "Steel Silver & Yellow",
        },
        {
            imageSrc: BikeArmygreen.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #659C9C 60.23%)",
            title: "Army Green & Yellow",
        },
        {
            imageSrc: BikeMattblack.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #556479 60.23%)",
            title: "Matte Black & Yellow",
        },
        {
            imageSrc: BikeRed.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #C12A57 60.23%)",
            title: "Crimson Red & Silver",
        },
    ];

    return (
        <section className="bg-black py-12 px-4 text-white bg-black-100">
            <h2 className="text-center text-4xl md:text-4xl mb-10 font-magistral">
                Explore a Range of Stunning Colors for the Roshni X
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