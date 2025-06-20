'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SliderImage1 from "../../public/assets/Book/Crown-Electric-Markhor.webp";
import SliderImage2 from "../../public/assets/Book/Crown-Electric-Cherry.webp";
import SliderImage3 from "../../public/assets/Book/Crown-Electric-Champion.webp";
import SliderImage4 from "../../public/assets/Book/Crown-Electric-Raftaar.webp";
import SliderImage5 from "../../public/assets/Book/Crown-Electric-Victory.webp";
import SliderImage6 from "../../public/assets/Book/Crown-Electric-Flash.webp";
import SliderImage7 from "../../public/assets/Book/Crown-Electric-Knight-Rider.webp";
import SliderImage8 from "../../public/assets/Book/Crown-Electric-Roshni-X.webp";
import SliderImage9 from "../../public/assets/Book/Crown-Electric-Ezee.webp";
import SliderImage10 from "../../public/assets/Book/Crown-Electric-Roshni.webp";
import SliderImage11 from "../../public/assets/Book/Crown-Electric-Firefly.webp";
import SliderImage12 from "../../public/assets/Book/Crown-Electric-Fairy.webp";
import SliderImage13 from "../../public/assets/Book/Crown-Electric-Mini-Scooty.webp";
import SliderImage14 from "../../public/assets/Book/Crown-Electric-Spark.webp";


const images = [
    { src: SliderImage1, alt: "Slide 1", isLocal: true },
    { src: SliderImage2, alt: "Slide 1", isLocal: true },
    { src: SliderImage3, alt: "Slide 1", isLocal: true },
    { src: SliderImage4, alt: "Slide 1", isLocal: true },
    { src: SliderImage5, alt: "Slide 1", isLocal: true },
    { src: SliderImage6, alt: "Slide 1", isLocal: true },
    { src: SliderImage7, alt: "Slide 1", isLocal: true },
    { src: SliderImage8, alt: "Slide 1", isLocal: true },
    { src: SliderImage9, alt: "Slide 1", isLocal: true },
    { src: SliderImage10, alt: "Slide 1", isLocal: true },
    { src: SliderImage11, alt: "Slide 1", isLocal: true },
    { src: SliderImage12, alt: "Slide 1", isLocal: true },
    { src: SliderImage13, alt: "Slide 1", isLocal: true },
    { src: SliderImage14, alt: "Slide 1", isLocal: true },
   
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
                        style={{ objectFit: "cover", objectPosition: "top center"  }}
                        sizes="(min-width: 768px) 50vw, 50vw"
                        priority
                    />
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: "cover", }}
                        sizes="(min-width: 768px) 50vw, 50vw"
                        priority
                    />  
                )}
            </div>
            {/* Dots (show only if more than 1 image) */}

        </div>
    );
}
