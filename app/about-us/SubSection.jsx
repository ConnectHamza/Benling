'use client'
import Image from "next/image";
import Logo from "../../public/assets/About/Abstract.png"; // Adjust path
import AppButton from '@/components/Button/AppButton';

export default function Subsection() {
    return (
        <div className="w-full bg-white py-10">
            <div className="w-full max-w-[1300px] mx-auto px-4">
                {/* Parent flex container: column on mobile, row on lg */}
                <div className="flex flex-col md:flex-row gap-8  items-start">

                    {/* Left Image Container */}
                    <div className="flex justify-center lg:justify-start w-full lg:w-1/2 min-w-0">
                        <div className="w-full max-w-[600px]">
                            <Image
                                src={Logo}
                                alt="Crown Group Logo"
                                width={500}
                                height={500}
                                className="object-contain w-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="flex flex-col justify-start text-left w-full lg:w-1/2 min-w-0">
                        <h2 className="text-2xl md:text-3xl font-semibold font-magistral mb-4">
                            About Crown Group
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6 font-jakarta">
                            Crown Group stands as a beacon of excellence in Pakistan’s industrial landscape, boasting over 23 years of unwavering commitment to quality, innovation, and customer satisfaction. With a diverse portfolio spanning automotive parts, electric vehicles, solar energy, software development, and more, Crown Group has cemented its position as a multifaceted conglomerate dedicated to shaping a sustainable future.
                        </p>
                        <div>
                            <AppButton
                                size="small"
                                variant="outline"
                                label="Read more about Crown Group"
                                iconName="ArrowUpRight"
                                iconPosition="right"
                                onClick={() => window.open("https://www.crowngroup.com.pk", "_blank")}
                                textColor='text-[#000]'
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
