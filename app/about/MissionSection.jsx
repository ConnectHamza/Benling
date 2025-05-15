import Image from "next/image";
import Target from "../../public/assets/About/target.svg";
import Visibility from "../../public/assets/About/visibility.svg";

export default function MissionVisionCards() {
  return (
    <div className="w-full bg-white py-10">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Add items-stretch to make children equal height */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Mission Card */}
          <div className="relative flex-1 rounded-xl overflow-hidden border border-[#ececec] flex flex-col min-h-[320px]">
            {/* Gaussian Blur Background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #FF7700 0%, #FFB870 2%, rgba(255,255,255,0) 100%)",
                filter: "blur(14px)",
                opacity: 0.25,
                zIndex: 1,
              }}
            />
            {/* Card Content */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <span className="mr-2 w-6 h-6 relative">
                  <Image src={Target} alt="Mission Icon" fill className="object-contain" />
                </span>
                <h3 className="text-2xl font-semibold font-magistral">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg flex-grow font-jakarta font-normal">
                To drive Pakistan’s shift toward electric mobility through innovative, reliable, and eco-conscious transportation solutions. We empower riders with high-performance electric scooters built for today’s roads and tomorrow’s sustainability.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative flex-1 rounded-xl overflow-hidden border border-[#ececec] flex flex-col min-h-[320px]">
            {/* Gaussian Blur Background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(270deg, #5355BD 0%, #7A81D9 2%, rgba(255,255,255,0) 100%)",
                filter: "blur(14px)",
                opacity: 0.25,
                zIndex: 1,
              }}
            />
            {/* Card Content */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <span className="mr-2 w-6 h-6 relative">
                  <Image src={Visibility} alt="Vision Icon" fill className="object-contain" />
                </span>
                <h3 className="text-2xl font-semibold font-magistral">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg flex-grow font-jakarta font-normal">
                To become Pakistan’s most trusted electric mobility brand, leading a future of clean energy, smart infrastructure, and sustainable transport-redefining urban mobility for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
