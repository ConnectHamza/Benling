"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/assets/Header-Footer/Benling-Logo.svg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModelsOpen, setIsModelsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const toggleModelsMenu = () => setIsModelsOpen((prev) => !prev);

    const navLink =
        "relative font-jakarta pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300";

    const modelsSubLinks = [
        { href: "/ezee", label: "Ezee" },
        { href: "/roshni", label: "Roshni" },
        { href: "/roshnix", label: "RoshniX" },
        { href: "/knight-rider", label: "Knight Rider" },
        { href: "/mini-scooty", label: "Mini Scooty" },
        { href: "/firefly", label: "Firefly" },
        { href: "/spark", label: "Spark" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full z-50 fixed top-0 transition-all duration-200 ease-linear ${isScrolled ? "bg-black-30 text-white" : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-[1300px] mx-auto flex items-center justify-between py-4 px-4 md:px-8">
                {/* Left nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {/* <div className="relative group">
                        <span className="cursor-pointer font-inter relative z-10 px-2 py-2 block">
                            Models ▾
                            <span className="absolute inset-0 z-0"></span>
                        </span>
                        <div className="absolute left-0 w-[300px] bg-black-30 top-full hidden group-hover:flex flex-col bg-black shadow-md mt-2 rounded p-4 transition-all duration-200 ease-linear transform scale-95 group-hover:scale-100 pointer-events-auto group-hover:pointer-events-auto group-hover:visible">
                            {modelsSubLinks.map(({ href, label }) => (
                                <Link key={href} href={href} className={`${navLink} py-2 px-6 text-white`}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div> */}
                    {/* <div className="relative group">
    <span className="cursor-pointer font-inter relative z-10 px-2 py-2 block pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
        Models ▾
    </span>
    <div className="absolute left-0 w-[300px] bg-black-30 top-full hidden group-hover:flex flex-col bg-black shadow-md mt-2 rounded p-4 z-50">
        {modelsSubLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`${navLink} py-2 px-6 text-white`}>
                {label}
            </Link>
        ))}
    </div>
</div> */}
                    {/* <div className="relative group">
    <span className="cursor-pointer font-inter inline-block pb-[6px] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
        Models ▾
    </span>
    <div className="absolute left-0 w-[300px] bg-black-30 top-full hidden group-hover:flex flex-col bg-black shadow-md mt-2 rounded p-4 z-50">
        {modelsSubLinks.map(({ href, label }) => (
            <Link
                key={href}
                href={href}
                className="relative inline-block text-white font-jakarta pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300 mb-2"
            >
                {label}
            </Link>
        ))}
    </div>
</div> */}
                    {/* <div className="relative group">
    <div className="cursor-pointer font-inter inline-block pb-[6px] relative z-10">
        <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] after:transition-all after:duration-300 group-hover:after:w-full">
            Models ▾
        </span>
    </div>

    <div className="absolute left-0 top-full mt-[2px] bg-black z-50 w-[300px] rounded p-4 shadow-md hidden group-hover:flex flex-col transition-all duration-150 bg-black-30">
        {modelsSubLinks.map(({ href, label }) => (
            <Link
                key={href}
                href={href}
                className="relative inline-block text-white font-jakarta pb-[6px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F15C2A] after:transition-all after:duration-300"
            >
                {label}
            </Link>
        ))}
    </div>
</div> */}
                    <div className="relative group">
                        <span className="cursor-pointer font-inter inline-block relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] group-hover:after:w-full after:transition-all after:duration-300">
                            Models ▾
                        </span>

                        <div className="absolute top-full left-0 mt-1 bg-black-30 text-white w-[300px] z-50 rounded p-4 shadow-md flex-col hidden group-hover:flex">
                            {modelsSubLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="relative inline-block font-jakarta text-white pb-1 mb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F15C2A] hover:after:w-full after:transition-all after:duration-300"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/about" className={navLink}>About Us</Link>
                    <Link href="/news" className={navLink}>News</Link>
                    <Link href="/dealer-locator" className={navLink}>Find a Dealer</Link>
                </nav>

                {/* Logo */}
                <a href="http://localhost:3000/">
                    <Image src={logo} alt="Crown Logo" width={120} priority />
                </a>

                {/* Right nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/distributor" className={navLink}>Become a Dealer</Link>
                    <Link href="/contact" className={navLink}>Contact Us</Link>
                    <Link href="/dealer-locator">
                        <button className="border border-[#F15C2A] px-4 py-1 rounded hover:bg-[#F15C2A] hover:text-black transition-all duration-200 ease-linear">
                            Find a Dealer
                        </button>
                    </Link>
                </nav>

                {/* Mobile burger */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden overflow-hidden bg-black text-white px-6 py-4"
                    >
                        <div className="flex flex-col gap-4 text-sm">
                            <button onClick={toggleModelsMenu} className="flex justify-between items-center">
                                <span>Models</span>
                                <span>{isModelsOpen ? "▲" : "▼"}</span>
                            </button>
                            <AnimatePresence>
                                {isModelsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="ml-4 flex flex-col gap-2"
                                    >
                                        {modelsSubLinks.map(({ href, label }) => (
                                            <Link key={href} href={href} className={navLink}>
                                                {label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <Link href="/about" className={navLink}>About Us</Link>
                            <Link href="/news" className={navLink}>News</Link>
                            <Link href="/dealer-locator" className={navLink}>Find a Dealer</Link>
                            <Link href="/distributor" className={navLink}>Become a Dealer</Link>
                            <Link href="/contact" className={navLink}>Contact Us</Link>
                            <Link href="/dealer-locator">
                                <button className="w-full border border-[#F15C2A] px-4 py-2 mt-2 rounded hover:bg-[#F15C2A] hover:text-black transition-all duration-200 ease-linear">
                                    Find a Dealer
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
