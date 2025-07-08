import Image from "next/image";
import Build from "../../public/assets/Dealer/build.svg"
import Electric from "../../public/assets/Dealer/electric_moped.svg"
import Menu from "../../public/assets/Dealer/menu_book.svg"

export default function AuthorizedDealersSection() {
  return (
    <section className="w-full px-4 py-10 md:py-20 bg-white z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Heading */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-2xl md:text-5xl font-magistral font-medium text-black mb-4">
              Why Choose Authorized Dealers?
            </h2>
            <p className="text-gray-700 leading-relaxed font-jakarta">
              Get peace of mind with 100% genuine products, expert guidance,
              priority service, and exclusive offers—only from Crown
              Electric’s trusted dealer network.
            </p>
          </div>

          {/* Right: Cards */}
          <div className="w-full md:w-[75%] flex flex-wrap gap-4">
            {/* Card 1 */}
            <div className="w-full md:w-[48.5%] bg-[rgba(238,255,246,1)] p-5 rounded-xl shadow-sm flex gap-4 min-h-[180px]">
              <div>
              <div className="rounded-full bg-[rgba(158,252,203,1)] p-2 w-fit mb-1">
                <Image
                  src={Menu.src}// Replace with your image path
                  alt="Expert Guidance"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-medium md:text-3xl text-lg text-[#00331F] mb-1 font-magistral">Expert Guidance</h3>
                <p className=" text-gray-700 font-jakarta text-[#00331F]">
                  Get personalized advice and in-depth product demos from trained
                  professionals to help you choose the perfect ride.
                </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[48.5%] bg-[rgba(238,241,255,1)] p-5 rounded-xl shadow-sm flex gap-4 min-h-[180px]">
                <div>
              <div className=" rounded-full bg-[rgba(199,207,254,1)] p-2 w-fit mb-1">
                <Image
                  src={Electric.src}// Replace with your image path
                  alt="Expert Guidance"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="md:text-3xl text-lg text-[#211B4B] font-magistral font-medium text-black">Real-Time Availability</h3>
                <p className="text-sm text-gray-700 font-jakarta text-[#211B4B]">
                  Check latest updates on vehicle availability at your nearest dealership —
                  no more guesswork.
                </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full bg-[rgba(255,249,236,1)] p-5 rounded-xl shadow-sm flex gap-4 min-h-[180px]">
              <div>
              <div className="rounded-full bg-[rgba(255,226,165,1)] p-2 w-fit mb-1">
                <Image
                  src={Build.src}// Replace with your image path
                  alt="Expert Guidance"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="md:text-3xl text-lg text-[#461A04] font-magistral font-medium text-black">After-Sales Support</h3>
                <p className="text-sm text-gray-700 font-jakarta text-[#461A04]">
                  Access trusted service centers for maintenance, repairs, and warranty
                  support—ensuring peace of mind after your purchase. Our
                  dealer-exclusive sales network is here to keep your vehicle running
                  at its best.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
