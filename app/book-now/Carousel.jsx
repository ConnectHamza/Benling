'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SliderImage1 from "../../public/assets/Book/Slide1.png"; // Local image

const images = [
    { src: SliderImage1, alt: "Slide 1", isLocal: true },
    // Add more images as needed
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const timeoutRef = useRef();

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 400); // fade duration
        }, 3000);

        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const { src, alt, isLocal } = images[current];

    return (
        <div className="hidden md:block w-1/2 bg-black relative overflow-hidden">
            <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                {isLocal ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: "cover", minHeight: 500 }}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                    />
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: "cover", minHeight: 500 }}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                    />
                )}
            </div>
            {/* Dots (show only if more than 1 image) */}

        </div>
    );
}
