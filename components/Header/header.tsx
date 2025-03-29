"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/assets/Header-Footer/Benling-Logo.svg';
import Link from 'next/link';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex justify-center bg-black-70 z-99999">
            <div className="w-lg flex flex-row justify-between text-center items-center px-6 py-5">
                <div>
                    <Image src={logo} alt="Benling Logo" />
                </div>
                <div className="hidden md:flex flex-row space-x-8 text-[15px] text-white">
                    <Link href="/ezee" className="relative group hover:text-red-100">
                        Ezee
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
                    <Link href="/knight-rider" className="relative group hover:text-red-100">
                        Knight Rider
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/roshni" className="relative group hover:text-red-100">
                        Roshni
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
                    <Link href="/firefly" className="relative group hover:text-red-100 w-full text-center">
                        Firefly
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/services" className="relative group hover:text-red-100 w-full text-center">
                        Spark
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
        </div>
    );
};

export default Header;