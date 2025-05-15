import Image from "next/image";
import Img1 from "../../public/assets/About/work1.png";
import Img2 from "../../public/assets/About/work2.png";
import Img3 from "../../public/assets/About/work3.png";
export default function ManufacturerDetails() {
  return (
    <div className="w-full bg-white py-10">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold font-jakarta mb-2 text-center md:text-left">
          Manufacturer Details
        </h2>

        {/* Subheading */}
        <p className="text-gray-700 text-base md:text-lg mb-8 text-center md:text-left max-w-4xl">
          All Crown Benling EVs are proudly manufactured at our advanced Port Qasim production facility in Pakistan. Our locally assembled scooters are built with graphene battery technology, undergo rigorous safety and performance testing, and are crafted by a skilled Pakistani workforce.
        </p>

        {/* Images Grid */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-4 w-full">
            <div className="relative w-1/2 md:w-[40%] h-60 rounded-xl overflow-hidden">
              <Image src={Img1} alt="Image 1" fill className="object-cover" />
            </div>
            <div className="relative w-1/2 md:w-[60%] h-60 rounded-xl overflow-hidden">
              <Image src={Img2} alt="Image 2" fill className="object-cover" />
            </div>
          </div>
          <div className="relative w-full md:w-[100%] h-60 rounded-xl overflow-hidden">
            <Image src={Img3} alt="Image 3" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
