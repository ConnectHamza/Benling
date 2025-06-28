import MarkhorRed from "../../public/assets/Markhor/Colors/Crown-Electric-Markhor-Red.webp";
import MarkhorWhite from "../../public/assets/Markhor/Colors/Crown-Electric-Markhor-White.webp";
import MarkhorBlue from "../../public/assets/Markhor/Colors/Crown-Electric-Markhor-Blue.webp";
import MarkhorSilver from "../../public/assets/Markhor/Colors/Crown-Electric-Markhor-Silver.webp";
import MarkhorBlack from "../../public/assets/Markhor/Colors/Crown-Electric-Markhor-Black.webp";

import BikeColorCard from "@/components/Cards/BikeColorCard";
export default function RoshniColorShowcase() {
    const bikes = [
        {
            imageSrc: MarkhorRed.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #A7002C 60.23%)",
            title: "Red",
        },
        {
            imageSrc: MarkhorWhite.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #BDBDBD 60.23%)",
            title: "White",
        },
        {
            imageSrc: MarkhorBlue.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #2182F7 60.23%)",
            title: "Blue",
        },
        {
            imageSrc: MarkhorSilver.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #4E6380 60.23%)",
            title: "Silver",
        },
        {
            imageSrc: MarkhorBlack.src,
            gradient: "linear-gradient(180deg, #FFFFFF -29.05%, #4C5565 60.23%)",
            title: "Black",
        },
    ];

    return (
        <section className="bg-[#F9F5ED] md:py-40 py-20 px-4 text-black-30 w-full flex flex-col items-center">
            <div className="w-lg">
            <h2 className="text-center text-4xl md:text-6xl font-magistral font-[500]">
                Vibrant Shades, Fearless Rides.<br className="md:block hidden"></br>
                Crown Benling Markhor.
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