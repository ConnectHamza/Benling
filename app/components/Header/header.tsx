'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo_Ezze from "../../public/assets/Home/Carousel/Ezee_Logo.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Flash_Logo.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Knightrider_Logo.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Miniscooty_Logo.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Roshni_Logo.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Logo.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Spark_Logo.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.png";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.png";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.png";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.png";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooty_Image.png";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.png";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.png";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.png";
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import AppButton from '@/components/Button/AppButton';
import Typography from '@/components/GradientText/Typography';

// --- Model Data ---
const modelsData = [
    { logo: Logo_Flash, img: Image_Flash, range: "150km Range", speed: "70km/h Top Speed", href: "/flash" },
    { logo: Logo_Knight_Rider, img: Image_KnightRider, range: "100km Range", speed: "60km/h Top Speed", href: "/knight-rider" },
    { logo: Logo_Roshnix, img: Image_Roshnix, range: "110km Range", speed: "60km/h Top Speed", href: "/roshnix" },
    { logo: Logo_Firefly, img: Image_Firefly, range: "100km Range", speed: "60km/h Top Speed", href: "/firefly" },
    { logo: Logo_Roshni, img: Image_Roshni, range: "120km Range", speed: "60km/h Top Speed", href: "/roshni" },
    { logo: Logo_Spark, img: Image_Spark, range: "40km Range", speed: "40km/h Top Speed", href: "/spark" },
    { logo: Logo_Ezze, img: Image_Ezee, range: "55km Range", speed: "40km/h Top Speed", href: "/ezee" },
    { logo: Logo_Mini_Scooty, img: Image_Miniscooter, range: "35km Range", speed: "35km/h Top Speed", href: "/mini-scooty" }
];
// --- Mobile Models Panel (define ONCE only) ---
function MobileModelsPanel({ onBack }) {
    return (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            {/* Black header with back button and centered logo */}
            <div className="flex items-center justify-between bg-black-200 px-6 py-4" style={{ minHeight: "64px" }}>
                <button onClick={onBack} className="text-white text-2xl" aria-label="Back">
                    ←
                </button>
                <Image
                    src="/assets/Header-Footer/Benling-Logo.svg"
                    alt="Logo"
                    width={100}
                    height={80}
                    priority
                />
                <div className="w-8" /> {/* empty space to center logo */}
            </div>
            <div className="flex flex-col px-6 py-6 gap-6">
                <div className="text-lg mb-6 font-magistral font-regular text-black-200 text-center">
                    View our Models
                </div>
                {modelsData.map((model) => (
                    <a
                        href={model.href}
                        key={model.href}
                        className="flex flex-col items-center group hover:scale-105 transition"
                    >
                        {/* Image Container with fixed height */}
                        <div className="flex items-center justify-center h-[120px] w-full">
                            <Image
                                src={model.img}
                                alt={model.href}
                                width={220}
                                height={300}
                                className="object-contain max-h-full"
                            />
                        </div>

                        {/* Logo Container with fixed height */}
                        <div className="mt-6 h-[40px] flex items-center justify-center">
                            <Image
                                src={model.logo}
                                alt={model.href}
                                width={150}
                                height={20}
                                className="mx-auto"
                            />
                        </div>

                        {/* Text Info with fixed height */}
                        <div className="text-xs text-gray-600 text-center mt-2 h-[20px] font-jakarta">
                            {model.range} | {model.speed}
                        </div>
                    </a>

                ))}
            </div>
        </div>
    );
}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModelsOpen, setIsModelsOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    // Desktop Mega Menu
    const DesktopModelsMegaMenu = () => (
        <div className="fixed left-0 top-[75px] w-full h-[70vh] bg-white text-black z-40 border-b shadow-lg overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-10 py-8 h-full flex flex-col">
                {/* Heading */}
                <div className="font-regular text-lg mb-6 text-black-200 font-magistral">
                    Explore Our Models
                </div>
<<<<<<< HEAD:components/Header/header.tsx
                {/* Scrollable content */}
                <div className="overflow-y-auto pr-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                        {modelsData.map((model) => (
                            <a
                                href={model.href}
                                key={model.href}
                                className="flex flex-col items-center group hover:scale-105 transition"
                            >
                                {/* Image */}
                                <div className="flex items-center justify-center h-[120px] w-full">
                                    <Image
                                        src={model.img}
                                        alt={model.href}
                                        width={220}
                                        height={300}
                                        className="object-contain max-h-full"
                                    />
                                </div>
                                <div className="mt-6 h-[20px] flex items-center justify-center">
                                    <Image
                                        src={model.logo}
                                        alt={model.href}
                                        width={100}
                                        height={20}
                                        className="mx-auto"
                                    />
                                </div>
                                <div className="text-[16px] text-gray-600 text-center mt-2 h-[20px] font-jakarta">
                                    {model.range} | {model.speed}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
=======
                <div className="hidden md:flex flex-row space-x-8 text-[15px] text-white">
                    <Link href="/ezee" className="relative group hover:text-red-100">
                        Ezee
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/knight-rider" className="relative group hover:text-red-100">
                        Knight Rider
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/roshni" className="relative group hover:text-red-100">
                        Roshni
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/firefly" className="relative group hover:text-red-100">
                        Firefly
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/services" className="relative group hover:text-red-100">
                        Spark
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/mini-classic-scooty" className="relative group hover:text-red-100">
                        Mini Classic Scooty
                        <span className="underline-curve"></span>
                    </Link>
                </div>
                <div className="hidden md:flex flex-row space-x-8 text-[15px] text-white">
                    <Link href="/contact" className="relative group hover:text-red-100">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/distributor" className="relative group hover:text-red-100">
                        Become a Distributor
                        <span className="underline-curve"></span>
                    </Link>
                </div>

                <div className="sm:flex md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu sm:flex md:hidden flex flex-col items-center space-y-4 mt-4 text-white">
                    <Link href="/ezee" className="relative group hover:text-red-100 w-full text-center">
                        Ezee
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/knight-rider" className="relative group hover:text-red-100 w-full text-center">
                        Knight Rider
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/roshni" className="relative group hover:text-red-100 w-full text-center">
                        Roshni
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/firefly" className="relative group hover:text-red-100 w-full text-center">
                        Firefly
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/services" className="relative group hover:text-red-100 w-full text-center">
                        Spark
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/mini-classic-scooty" className="relative group hover:text-red-100 w-full text-center">
                        Mini Classic Scooty
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/contact" className="relative group hover:text-red-100 w-full text-center">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/distributor" className="relative group hover:text-red-100 w-full text-center">
                        Become a Distributor
                        <span className="underline-curve"></span>
                    </Link>
                </div>
            )}
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/Header/header.tsx
        </div>
    );


    const navLink =
        "relative font-jakarta pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300";

    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-black-200 text-white h-[75px] flex items-center">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between w-full px-6 h-[75px]">
                {/* Left nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-8 text-sm h-full font-jakarta">
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <Typography variant="subtext-regular-jakarta" as="span" className=" flex items-center h-full cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
                            Models {isMegaMenuOpen ? <ChevronUp /> : <ChevronDown />}
                        </Typography>
                        {isMegaMenuOpen && <DesktopModelsMegaMenu />}
                    </div>
                    <Link href="/about" className={`${navLink} flex items-center h-full`}>
                        <Typography variant="subtext-regular-jakarta">
                            About Us
                        </Typography>
                    </Link>
                    {/* <Link href="/news" className={`${navLink} flex items-center h-full font-jakarta`}>News</Link> */}
                    <Link href="/find-a-dealer" className={`${navLink} flex items-center h-full font-jakarta`}>
                        <Typography variant="subtext-regular-jakarta">
                            Find a Dealer
                        </Typography>
                    </Link>
                </nav>

                {/* Logo with black background */}
                {!isMobileMenuOpen && <a href="/" className="flex items-center justify-center bg-black px-4 py-1 rounded">
                    <Image src="/assets/Header-Footer/Benling-Logo.svg" alt="Logo" width={120}
                        height={80} priority />
                </a>}
                {/* Right nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-6 text-sm h-full font-jakarta">
                    {/* <Link href="/distributor" className={`${navLink} flex items-center h-full `}>Become a Dealer</Link> */}
                    <Link href="/contact" className={`${navLink} flex items-center h-full`}>
                        <Typography variant="subtext-regular-jakarta">
                            Contact Us
                        </Typography>
                    </Link>
                    {/* <Link href="/dealer-locator">
                        <button className="border border-[#F15C2A] px-4 py-1 rounded hover:bg-[#F15C2A] hover:text-black transition-all duration-200 ease-linear">
                            Book Now
                        </button>
                    </Link> */}

                    <AppButton
                        size="medium"
                        variant="solid"
                        label="Book now"
                        iconName="ArrowUpRight"
                        iconPosition="right"
                        href={"/book-now"}
                        textColor='text-[#000]'
                    />
                </nav>

                {/* Hamburger - black background, hidden when menu open */}
                {!isMobileMenuOpen && (
                    <button
                        className="md:hidden bg-black p-2 rounded focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                isModelsOpen ? (
                    <MobileModelsPanel onBack={() => setIsModelsOpen(false)} />
                ) : (
                    <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
                        {/* Black header with logo centered and close button left */}
                        <div className="flex items-center justify-between bg-black-200 px-6 py-4" style={{ minHeight: "75px" }}>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-3xl focus:outline-none"
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                            <Image
                                src="/assets/Header-Footer/Benling-Logo.svg"
                                alt="Logo"
                                width={100}
                                height={80}
                                priority
                            />
                            <div className="w-8" /> {/* empty space to center logo */}
                        </div>

                        <div className="flex flex-col gap-2 px-6 py-6 text-white bg-white min-h-[calc(100vh-64px)] font-jakarta">
                            <button
                                onClick={() => setIsModelsOpen(true)}
                                className="flex justify-between items-center w-full text-lg py-4 border-b text-black-200 border-gray-700"
                            >
                                <Typography as="span" variant="subtext-regular-jakarta">
                                    Models
                                </Typography>
                                <span><ChevronRight /></span>
                            </button>
                            <Link href="/about" className="py-4 border-b text-black-200 border-gray-700 text-lg">

                                <Typography variant="subtext-regular-jakarta">
                                    About Us
                                </Typography>
                                </Link>
                            {/* <Link href="/news" className="py-4 border-b text-black-200 border-gray-700 text-lg">News</Link> */}
                            <Link href="/find-a-dealer" className="py-4 text-black-200 border-b border-gray-700 text-lg">
                                <Typography variant="subtext-regular-jakarta">
                                    Find a Dealer
                                </Typography>
                            </Link>
                            {/* <Link href="/distributor" className="py-4 border-b text-black-200 border-gray-700 text-lg">Become a Dealer</Link> */}
                            <Link href="/contact" className="py-4 border-b text-black-200 border-gray-700">
                                <Typography variant="subtext-regular-jakarta">
                                    Contact Us
                                </Typography>
                            </Link>
                            <Link href="/find-a-dealer">
                                <AppButton
                                    size="medium"
                                    variant="solid"
                                    label="Book now"
                                    iconName="ArrowUpRight"
                                    iconPosition="right"
                                    href={"/booking"}
                                    textColor='text-[#000]'
                                />
                            </Link>
                        </div>
                    </div>
                )
            )}
        </header>
    );
};

export default Header;
