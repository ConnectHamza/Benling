import Image from "next/image";
import Banner from "../../public/assets/Contact/HeroImage.png"

export default function Herosection() {
    return (
        <div className="w-full bg-white py-10 pt-[120px]">
            {/* Banner Section */}
            <div className="w-full max-w-[1300px] mx-auto px-4">
                <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                        src={Banner}
                        alt="Contact Us Banner"
                        fill
                        priority
                        className="object-cover w-full h-full"
                    />
                    {/* Vertically Centered Overlay Text */}
                    <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded">
                            <h1 className="text-white text-4xl font-[500] font-magistral">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
