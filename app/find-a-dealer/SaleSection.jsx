'use client';

import Image from 'next/image';
import SaleSupport from "../../public/assets/Dealer/salesupport.png";
import AfterSale from "../../public/assets/Dealer/aftersale.png";

export default function SalesAfterSalesSection() {
    return (
        <section className="w-full px-4 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-10 text-left md:text-left text-center w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Sales & After-Sales Service
                    </h2>
                    <p className="text-gray-600 text-base md:mx-0 mx-auto">
                        We’re With You Every Step of the Ride At Crown Benling, our commitment doesn’t end after purchase—it begins there.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Card 1 */}
                    <div className="flex flex-col">
                        <div className="w-full h-[220px] relative mb-4 rounded-xl overflow-hidden">
                            <Image
                                src={SaleSupport}
                                alt="Sales Support"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Sales Support
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>On-spot vehicle demos and test rides</li>
                            <li>Personalized recommendations based on your needs</li>
                            <li>Easy financing and registration support</li>
                            <li>Genuine product availability</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col">
                        <div className="w-full h-[220px] relative mb-4 rounded-xl overflow-hidden">
                            <Image
                                src={AfterSale}
                                alt="After-Sales Service"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            After-Sales Service
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Regular service checkups and tune-ups</li>
                            <li>Spare parts and repair assistance</li>
                            <li>Warranty support and claim guidance</li>
                            <li>Friendly and responsive customer service</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Text */}
                <p className="text-xl font-bold text-gray-900 leading-relaxed w-full md:text-left text-center md:mx-0 mx-auto">
                    Crown Benling is committed to making your electric journey smooth, reliable,
                    and empowering from day one and every day after.
                </p>
            </div>
        </section>
    );
}
