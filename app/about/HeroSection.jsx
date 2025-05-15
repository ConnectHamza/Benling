import Image from "next/image";
import Banner from "../../public/assets/About/banner.png"

export default function Herosection() {
    return (
        <div className="w-full bg-white py-10 pt-[120px]">
            {/* Banner Section */}
            <div className="w-full max-w-[1300px] mx-auto px-4">
                <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                        src={Banner}
                        alt="About Us Banner"
                        priority
                    />
                    {/* Vertically Centered Overlay Text */}
                    <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded">
                            <h1 className="text-white text-4xl font-[500] font-magistral">
                                About Us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-[1300px] mx-auto px-4 mt-8 md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-jakarta">
                    Crown Benling Electric Mobility, proudly operated by the
                    <span className="text-crownOrange"> Crown Group</span>, is transforming the future of transportation in Pakistan. Born from a powerful joint venture with Benling China, our mission is to redefine how Pakistan moves cleaner, smarter, and more sustainably.
                </h2>

                <p className="mt-4 text-lg sm:font-lg font-jakarta font-[400] text-[#0A0A0A]">
                    Launched in 2023, Crown Benling brings together decades of local industry leadership and global EV innovation. With a strong focus on cutting-edge technology, urban mobility, and eco-conscious design, our range of electric scooters is designed for riders who demand performance, reliability, and style.
                </p>
            </div>
        </div>
    );
}
