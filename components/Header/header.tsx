'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FlashImage from "../../public/assets/Home/Carousel/Image_Flash.svg"
// --- Model Data ---
const modelsData = [
    { name: "FLASH", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/flash" },
    { name: "KNIGHT RIDER", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/knight-rider" },
    { name: "ROSHNI", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/roshni" },
    { name: "SPARK", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/spark" },
    { name: "MINI SCOOTY", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/mini-scooty" },
    { name: "FIREFLY", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/firefly" },
    { name: "Ezee", img: FlashImage, range: "150km Range", speed: "70km/h Top Speed", href: "/ezee" }
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
                    height={40}
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
                        key={model.name}
                        className="flex flex-col items-center group hover:scale-105 transition"
                    >
                        <div className=" flex items-center justify-center">
                            <Image
                                src={model.img}
                                alt={model.name}
                                width={1200}
                                height={1000}
                                className="object-contain"
                            />
                        </div>
                        <div className="font-bold text-center mt-2 text-base text-black group-hover:text-orange-500">
                            {model.name}
                        </div>
                        <div className="text-xs text-gray-600 text-center">
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
        <div className="fixed left-0 top-[64px] w-full bg-white text-black z-40 border-b shadow-lg">
            <div className="max-w-[1300px] mx-auto px-10 py-8">
                <div className="font-regular text-lg mb-6 text-black-200 font-magistral">Explore Our Models</div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    {modelsData.map((model) => (
                        <a
                            href={model.href}
                            key={model.name}
                            className="flex flex-col items-center group hover:scale-105 transition"
                        >
                            <div className="flex items-center justify-center">
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    width={1200}
                                    height={1000}
                                />
                            </div>
                            <div className="font-bold text-center mt-2 text-base group-hover:text-orange-500">
                                {model.name}
                            </div>
                            <div className="text-xs text-gray-600 text-center">
                                {model.range} | {model.speed}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    const navLink =
        "relative font-jakarta pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300";

    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-black-200 text-white h-[64px] flex items-center">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between w-full px-4 h-[64px]">
                {/* Left nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-6 text-sm h-full">
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <span className=" flex items-center h-full cursor-pointer font-inter relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
                            Models ▾
                        </span>
                        {isMegaMenuOpen && <DesktopModelsMegaMenu />}
                    </div>
                    <Link href="/about" className={`${navLink} flex items-center h-full`}>About Us</Link>
                    <Link href="/news" className={`${navLink} flex items-center h-full`}>News</Link>
                    <Link href="/dealer-locator" className={`${navLink} flex items-center h-full`}>Find a Dealer</Link>
                </nav>

                {/* Logo with black background */}
                {!isMobileMenuOpen && <a href="/" className="flex items-center justify-center bg-black px-4 py-1 rounded">
                    <Image src="/assets/Header-Footer/Benling-Logo.svg" alt="Logo" width={100} height={40} priority />
                </a>}

                {/* Right nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-6 text-sm h-full">
                    <Link href="/distributor" className={`${navLink} flex items-center h-full`}>Become a Dealer</Link>
                    <Link href="/contact" className={`${navLink} flex items-center h-full`}>Contact Us</Link>
                    <Link href="/dealer-locator">
                        <button className="border border-[#F15C2A] px-4 py-1 rounded hover:bg-[#F15C2A] hover:text-black transition-all duration-200 ease-linear">
                            Find a Dealer
                        </button>
                    </Link>
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
                        <div className="flex items-center justify-between bg-black-200 px-6 py-4" style={{ minHeight: "64px" }}>
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
                                height={40}
                                priority
                            />
                            <div className="w-8" /> {/* empty space to center logo */}
                        </div>

                        <div className="flex flex-col gap-2 px-6 py-6 text-white bg-white min-h-[calc(100vh-64px)]">
                            <button
                                onClick={() => setIsModelsOpen(true)}
                                className="flex justify-between items-center w-full text-lg py-4 border-b text-black-200 border-gray-700"
                            >
                                <span className="text-black-200">Models</span>
                                <span>›</span>
                            </button>
                            <Link href="/about" className="py-4 border-b text-black-200 border-gray-700 text-lg">About Us</Link>
                            <Link href="/news" className="py-4 border-b text-black-200 border-gray-700 text-lg">News</Link>
                            <Link href="/dealer-locator" className="py-4 text-black-200 border-b border-gray-700 text-lg">Find a Dealer</Link>
                            <Link href="/distributor" className="py-4 border-b text-black-200 border-gray-700 text-lg">Become a Dealer</Link>
                            <Link href="/contact" className="py-4 border-b text-black-200 border-gray-700 text-lg">Contact Us</Link>
                            <Link href="/dealer-locator">
                                <button className="w-full border text-black-200 border-[#F15C2A] px-4 py-2 mt-4 rounded hover:bg-[#F15C2A] hover:text-white transition-all duration-200 ease-linear">
                                    Find a Dealer
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            )}
        </header>
    );
};

export default Header;
