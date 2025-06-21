import Banner from "../../public/assets/About/banner.png"
// import AboutVideo from "../../public/assets/Crown-Electric-Mobility-Video.webm"

export default function Herosection() {
    return (
        <div className="w-full bg-white py-20">
            {/* Banner Section */}
            <div className="w-full max-w-[1300px] mx-auto px-4 mt-4 md:mt-10">
                <div className="relative w-full rounded-lg overflow-hidden">
                    {/* Replace Image with Video */}
                    <video
                        src="/assets/Crown-Electric-Mobility-Video.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={true}
                        className="w-full md:h-[450px] object-cover bg-center"
                        poster={Banner.src}
                    />
                    {/* Vertically Centered Overlay Text */}
                    <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded">

                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-[1300px] mx-auto px-4 mt-8 md:text-left">
                <h1 className="text-black md:text-4xl text-2xl font-bold font-jakarta">
                    About Us
                </h1>
                <h2 className="text-xl md:text-2xl font-bold my-4 font-jakarta">
                    Crown Electric Mobility, proudly operated by the
                    <span className="text-crownOrange"> Crown Group</span>, is transforming the future of transportation in Pakistan. Born from a powerful joint venture with Crown Electric China, our mission is to redefine how Pakistan moves cleaner, smarter, and more sustainably.
                </h2>

                <p className="mt-4 text-lg sm:font-lg font-jakarta font-[400] text-[#0A0A0A]">
                    Launched in 2023, Crown Electric brings together decades of local industry leadership and global EV innovation. With a strong focus on cutting-edge technology, urban mobility, and eco-conscious design, our range of electric scooters is designed for riders who demand performance, reliability, and style.
                </p>
            </div>
        </div>
    );
}