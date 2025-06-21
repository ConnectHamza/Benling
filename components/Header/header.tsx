'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { modelsData, modelsData2  } from "./data";
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import AppButton from '@/components/Button/AppButton';
import Typography from '@/components/GradientText/Typography';
import MobileModelsCarousel from "./mobileModelsCarousel";
import { useRouter, usePathname } from "next/navigation";



function MobileModelsPanel(onBack: any) {


    return (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            {/* Black header with back button and centered logo */}
            <div className="flex items-center justify-between bg-black-200 px-6 py-4" style={{ minHeight: "64px" }}>
                <button onClick={onBack} className="text-white text-2xl" aria-label="Back">
                    ←
                </button>
                <Image
                    src="/assets/Header-Footer/Crown-Electric-Mobility-Logo.svg"
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
                        <div className="flex items-center justify-center w-full">
                            <Image
                                src={model.img}
                                alt={model.href}
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
    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [activeSeries, setActiveSeries] = useState<"legacy" | "performance">("legacy");

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/" || pathname === "/find-a-dealer" || pathname === "/contact" || pathname === "/book-now" || pathname === "/about-us") {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
        if(pathname === "/book-now"){
            setIsHidden(false);            
        } else {
            setIsHidden(true);
        }
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsMegaMenuOpen(false);
    };


    // Desktop Mega Menu
    const DesktopModelsMegaMenu = () => {
        const dataToRender = activeSeries === "legacy" ? modelsData : modelsData2;

        return (
            <div
                className={`fixed overflow-gray md:px-20 left-0 top-[85px] w-full min-h-[70vh] bg-white text-black z-60 border-b shadow-lg`}
                style={{ zIndex: '9999' }}
            >
                <div className="max-w-full mx-auto px-10 py-8 h-full flex flex-col">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => setActiveSeries("legacy")}
                            className={`py-2 px-4 font-jakarta font-medium text-sm border-b-2 transition-all duration-200 ${activeSeries === "legacy"
                                    ? "border-[#F15C2A] text-[#F15C2A]"
                                    : "border-transparent text-gray-500"
                                }`}
                        >
                            Graphene Series
                        </button>
                        <button
                            onClick={() => setActiveSeries("performance")}
                            className={`py-2 px-4 font-jakarta font-medium text-sm border-b-2 transition-all duration-200 ${activeSeries === "performance"
                                    ? "border-[#F15C2A] text-[#F15C2A]"
                                    : "border-transparent text-gray-500"
                                }`}
                        >
                            Performance Series
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="pr-2 overflow-y-auto h-[70vh]" onWheel={(e) => e.stopPropagation()}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {dataToRender.map((model) => (
                                <a
                                    href={model.href}
                                    key={model.href}
                                    className="flex flex-col items-center group hover:scale-105 transition"
                                >
                                    <div className="relative">
                                        <div className="flex items-center justify-center h-[150px] w-full">
                                            <Image
                                                src={model.img}
                                                alt={model.href}
                                                width={200}
                                                height={100}
                                                className="object-contain max-h-full mt-4"
                                            />
                                        </div>
                                        <div className="my-4 flex items-center justify-center">
                                            <Image
                                                src={model.logo}
                                                alt={model.href}
                                                className="mx-auto w-full h-[24px]"
                                            />
                                        </div>
                                        <div
                                            className="text-[14px] text-gray-600 text-center font-jakarta"

                                        >
                                            {model.range} | {model.speed}
                                        </div>
                                        {model.disc && (
                                            <div
                                                className="bg-[#FFE1DE] absolute top-0 left-0 p-1 rounded-md"
                                            >
                                                <span className="text-xs text-[#8D190F] font-medium">{model.disc}</span>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };



    const navLink =
        "relative font-jakarta py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300";

    return (
        <header className={`w-full z-50 ${isFixed ? 'fixed' : 'relative'} top-0 left-0 bg-black-200 text-white md:h-[85px] h-[75px] flex items-center`}>
            <div className="max-w-full md:px-20 mx-auto flex items-center justify-between w-full px-6 py-2">


                {/* Logo with black background */}
                <div className="md:w-[20%]">
                {!isMobileMenuOpen && <a href="/" className="flex items-center justify-start bg-black px-4 py-1 rounded">
                    <Image src="/assets/Header-Footer/Crown-Electric-Mobility-Pakistan.svg" alt="Logo" width={140}
                        height={80} priority />
                </a>}
                </div>


                {/* Left nav - vertically centered */}
                <div className={`${isHidden ? 'flex' : 'hidden'} w-[80%] justify-end gap-8`}>
                <div className=" hidden md:block">
                <nav className="hidden md2:flex items-center gap-8 text-sm h-full font-jakarta">
                    <div
                        className="relative group h-full flex items-center py-10"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <Typography variant="subtext-regular-jakarta" as="span" className="flex items-center h-full cursor-pointer relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
                            Models {isMegaMenuOpen ? <ChevronUp /> : <ChevronDown />}
                        </Typography>
                        {isMegaMenuOpen && <DesktopModelsMegaMenu />}
                    </div>
                    <Link href="/about-us" className={`${navLink} flex items-center h-[30px]`}>
                        <Typography variant="subtext-regular-jakarta">
                            About Us
                        </Typography>
                    </Link>
                    <Link href="/crown-electric-performance-series" className={`${navLink} flex items-center h-[30px]`}>
                        <Typography variant="subtext-regular-jakarta">
                            Performance Series
                        </Typography>
                    </Link>
                    {/* <Link href="/news" className={`${navLink} flex items-center h-full font-jakarta`}>News</Link> */}

                </nav>
</div>


                {/* Right nav - vertically centered */}
                <div className="">
                <nav className="hidden md2:flex items-center md:justify-end gap-6 text-sm h-full font-jakarta">
                    {/* <Link href="/distributor" className={`${navLink} flex items-center h-full `}>Become a Dealer</Link> */}
                     <Link href="/find-a-dealer" className={`${navLink} flex items-center h-[30px] font-jakarta`}>
                        <Typography variant="subtext-regular-jakarta">
                            Find a Dealer
                        </Typography>
                    </Link>
                    <Link href="/become-a-dealer" className={`${navLink} flex items-center h-[30px] font-jakarta`}>
                        <Typography variant="subtext-regular-jakarta">
                            Become a Dealer
                        </Typography>
                    </Link>
                    <Link href="/contact" className={`${navLink} flex items-center h-[30px]`}>
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
                        variant="glow"
                        label="Book Now"
                        iconName="ArrowUpRight"
                        iconPosition="right"
                        href={"/book-now"}
                        textColor='text-[#000]'
                    />
                </nav>
                </div>
                </div>

                {/* Hamburger - black background, hidden when menu open */}
                {!isMobileMenuOpen && (
                    <button
                        className="md2:hidden bg-black p-2 rounded focus:outline-none"
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
                    <MobileModelsCarousel onBack={() => setIsModelsOpen(false)} setIsMegaMenuOpen={setIsMegaMenuOpen} />

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
                            <div className="w-8" />
                        </div>

                        <div className="flex flex-col gap-2 px-6 py-6 text-white bg-white md:min-h-[80vh] min-h-[90vh] font-jakarta z-60 ">
                            <button
                                onClick={() => setIsModelsOpen(true)}
                                className="flex justify-between items-center w-full text-lg py-4 border-b text-black-200 border-gray-700"
                            >
                                <Typography as="span" variant="subtext-regular-jakarta">
                                    Model
                                </Typography>
                                <span><ChevronRight /></span>
                            </button>

                            <Link href="/about-us" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/about-us";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">

                                <Typography variant="subtext-regular-jakarta">
                                    About Us
                                </Typography>
                            </Link>


                            <Link href="/crown-electric-performance-series" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/crown-electric-performance-series";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">

                                <Typography variant="subtext-regular-jakarta">
                                    Performance Series
                                </Typography>
                            </Link>


                            <Link href="/find-a-dealer" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/find-a-dealer";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">                                <Typography variant="subtext-regular-jakarta">
                                    Find a Dealer
                                </Typography>
                            </Link>

                              <Link href="/find-a-dealer" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/become-a-dealer";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">                                <Typography variant="subtext-regular-jakarta">
                                    Become a Dealer
                                </Typography>
                            </Link>
                            {/* <Link href="/distributor" className="py-4 border-b text-black-200 border-gray-700 text-lg">Become a Dealer</Link> */}
                            <Link href="/contact" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/contact";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">
                                <Typography variant="subtext-regular-jakarta">
                                    Contact Us
                                </Typography>
                            </Link>
                            {/* <Link href="/find-a-dealer">
                                <AppButton
                                    size="medium"
                                    variant="solid"
                                    label="Book now"
                                    iconName="ArrowUpRight"
                                    iconPosition="right"
                                    href={"/booking"}
                                    textColor='text-[#000]'
                                />
                            </Link> */}
                        </div>
                    </div>
                )
            )}
        </header>
    );
};

export default Header;
