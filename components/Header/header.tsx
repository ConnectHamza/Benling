'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo_Ezze from "../../public/assets/Home/Carousel/Ezee_Logo.svg"
import Logo_Fairy from "../../public/assets/Home/Carousel/Fairy_Logo.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Flash_Logo.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Knightrider_Logo.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Miniscooty_Logo.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Roshni_Logo.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Logo.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Spark_Logo.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.svg"
import Logo_Markhor from "../../public/assets/Home/Carousel/Markhor_Logo.svg"
import Logo_Cherry from "../../public/assets/Home/Carousel/Cherry_Logo.svg"
import Logo_Champion from "../../public/assets/Home/Carousel/Champion_Logo.svg"
import Logo_Raftaar from "../../public/assets/Home/Carousel/Raftaar_Logo.svg"
import Logo_Victory from "../../public/assets/Home/Carousel/Victory_Logo.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.png";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.png";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.png";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.png";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooty_Image.png";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.png";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.png";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.png";
import Image_Fairy from "../../public/assets/Home/Carousel/Fairy_Image.png";
import Image_Markhor from "../../public/assets/PerformanceSeries/Markhor.webp";
import Image_Cherry from "../../public/assets/PerformanceSeries/Cherry.webp";
import Image_Champion from "../../public/assets/PerformanceSeries/Champion.webp";
import Image_Raftaar from "../../public/assets/PerformanceSeries/Raftaar.webp";
import Image_Victory from "../../public/assets/PerformanceSeries/Victory.webp";
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import AppButton from '@/components/Button/AppButton';
import Typography from '@/components/GradientText/Typography';
import MobileModelsCarousel from "./mobileModelsCarousel";
import { useRouter, usePathname } from "next/navigation"; 


// --- Model Data ---
export const modelsData = [
    { logo: Logo_Flash, img: Image_Flash, range: "150km Range", speed: "70km/h Top Speed", href: "/crown-benling-flash" },
    { logo: Logo_Knight_Rider, img: Image_KnightRider, range: "100km Range", speed: "60km/h Top Speed", href: "/crown-benling-knight-rider" },
    { logo: Logo_Roshnix, img: Image_Roshnix, range: "110km Range", speed: "60km/h Top Speed", href: "/crown-benling-roshni-x" },
    { logo: Logo_Firefly, img: Image_Firefly, range: "100km Range", speed: "60km/h Top Speed", href: "/crown-benling-firefly" },
    { logo: Logo_Roshni, img: Image_Roshni, range: "120km Range", speed: "60km/h Top Speed", href: "/crown-benling-roshni" },
    { logo: Logo_Ezze, img: Image_Ezee, range: "55km Range", speed: "40km/h Top Speed", href: "/crown-benling-ezee" },
    { logo: Logo_Mini_Scooty, img: Image_Miniscooter, range: "35km Range", speed: "35km/h Top Speed", href: "/crown-benling-mini-scooty" },
    { logo: Logo_Fairy, img: Image_Fairy, range: "80km Range", speed: "55km/h Top Speed", href: "/crown-benling-fairy" },
    { logo: Logo_Spark, img: Image_Spark, range: "40km Range", speed: "40km/h Top Speed", href: "/crown-benling-spark", disc: "Discontinued"}
];

export const modelsData2 = [
    { logo: Logo_Champion, img: Image_Champion, range: "220km Range", speed: "90km/h Top Speed", href: "/crown-benling-champion"},
    { logo: Logo_Markhor, img: Image_Markhor, range: "100km Range", speed: "100km/h Top Speed", href: "/", disc: "Coming Soon" },
    { logo: Logo_Cherry, img: Image_Cherry, range: "130km Range", speed: "90km/h Top Speed", href: "/", disc: "Coming Soon" },
    { logo: Logo_Raftaar, img: Image_Raftaar, range: "160km Range", speed: "95km/h Top Speed", href: "/", disc: "Coming Soon" },
    { logo: Logo_Victory, img: Image_Victory, range: "120km Range", speed: "5km/h Top Speed", href: "/", disc: "Coming Soon" },
    
];
// --- Mobile Models Panel (define ONCE only) ---

function MobileModelsPanel(onBack : any) {

    
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
    const [activeSeries, setActiveSeries] = useState<"legacy" | "performance">("legacy");

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/" || pathname === "/find-a-dealer" || pathname === "/contact" || pathname === "/book-now" || pathname === "/crown-benling-about") {
            setIsFixed(true);
        } else {
            setIsFixed(false);
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
            className={`fixed overflow-gray md:px-20 left-0 top-[75px] w-full min-h-[70vh] bg-white text-black z-60 border-b shadow-lg`}
            style={{ zIndex: '9999' }}
        >
            <div className="max-w-full mx-auto px-10 py-8 h-full flex flex-col">
                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveSeries("legacy")}
                        className={`py-2 px-4 font-jakarta font-medium text-sm border-b-2 transition-all duration-200 ${
                            activeSeries === "legacy"
                                ? "border-[#F15C2A] text-[#F15C2A]"
                                : "border-transparent text-gray-500"
                        }`}
                    >
                        Legacy Series
                    </button>
                    <button
                        onClick={() => setActiveSeries("performance")}
                        className={`py-2 px-4 font-jakarta font-medium text-sm border-b-2 transition-all duration-200 ${
                            activeSeries === "performance"
                                ? "border-[#F15C2A] text-[#F15C2A]"
                                : "border-transparent text-gray-500"
                        }`}
                    >
                        Performance Series
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="pr-2 overflow-y-auto h-[70vh]" onWheel={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {dataToRender.map((model) => (
                            <a
                                href={model.href}
                                key={model.href}
                                className="flex flex-col items-center group hover:scale-105 transition"
                            >
                                <div className="relative">
                                    <div className="flex items-center justify-center h-[120px] w-full">
                                        <Image
                                            data-aos="zoom-in"
                                            data-aos-delay="0"
                                            src={model.img}
                                            alt={model.href}
                                            width={200}
                                            height={100}
                                            className="object-contain max-h-full"
                                        />
                                    </div>
                                    <div className="my-4 h-[20px] flex items-center justify-center">
                                        <Image
                                            data-aos="zoom-out"
                                            data-aos-delay="300"
                                            src={model.logo}
                                            alt={model.href}
                                            className="mx-auto w-full h-[24px] mb-4"
                                        />
                                    </div>
                                    <div
                                        className="text-[16px] text-gray-600 text-center h-[20px] font-jakarta"
                                        data-aos="fade-in"
                                        data-aos-delay="600"
                                    >
                                        {model.range} | {model.speed}
                                    </div>
                                    {model.disc && (
                                        <div
                                            className="bg-[#FFE1DE] absolute top-0 left-0 p-1 rounded-md"
                                            data-aos="zoom-in"
                                            data-aos-delay="1000"
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
        <header className={`w-full z-50 ${isFixed ? 'fixed' : 'relative'} top-0 left-0 bg-black-200 text-white h-[75px] flex items-center`}>
            <div className="max-w-full md:px-20 mx-auto flex items-center justify-between w-full px-6 py-2">
                {/* Left nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-8 text-sm h-full font-jakarta">
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
                    <Link href="/crown-benling-about" className={`${navLink} flex items-center h-full`}>
                        <Typography variant="subtext-regular-jakarta">
                            About Us
                        </Typography>
                    </Link>
                    <Link href="/crown-benling-performance-series" className={`${navLink} flex items-center h-full`}>
                        <Typography variant="subtext-regular-jakarta">
                            Performance Series
                        </Typography>
                    </Link>
                    {/* <Link href="/news" className={`${navLink} flex items-center h-full font-jakarta`}>News</Link> */}

                </nav>

                {/* Logo with black background */}
                {!isMobileMenuOpen && <a href="/" className="flex items-center justify-center bg-black px-4 py-1 rounded">
                    <Image src="/assets/Header-Footer/Benling-Logo.svg" alt="Logo"  width={120}
                        height={80} priority />
                </a>}
                {/* Right nav - vertically centered */}
                <nav className="hidden md:flex items-center gap-6 text-sm h-full font-jakarta">
                    {/* <Link href="/distributor" className={`${navLink} flex items-center h-full `}>Become a Dealer</Link> */}
                    <Link href="/find-a-dealer" className={`${navLink} flex items-center h-full font-jakarta`}>
                        <Typography variant="subtext-regular-jakarta">
                            Find a Dealer
                        </Typography>
                    </Link>
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
                            <div className="w-8" /> {/* empty space to center logo */}
                        </div>

                        <div className="flex flex-col gap-2 px-6 py-6 text-white bg-white min-h-[80vh] font-jakarta z-60 ">
                            <button
                                onClick={() => setIsModelsOpen(true)}
                                className="flex justify-between items-center w-full text-lg py-4 border-b text-black-200 border-gray-700"
                            >
                                <Typography as="span" variant="subtext-regular-jakarta">
                                    Model
                                </Typography>
                                <span><ChevronRight /></span>
                            </button>

                            <Link href="/crown-benling-about" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/crown-benling-about";
                                }, 0);
                            }} className="py-4 border-b text-black-200 border-gray-700 text-lg">

                                <Typography variant="subtext-regular-jakarta">
                                    About Us
                                </Typography>                                
                            </Link>


                            <Link href="/crown-benling-performance-series" onClick={(e) => {
                                e.preventDefault();
                                setIsModelsOpen(false);
                                setTimeout(() => {
                                    window.location.href = "/crown-benling-performance-series";
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
