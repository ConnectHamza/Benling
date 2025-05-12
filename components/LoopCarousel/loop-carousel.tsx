import React from "react";
import Image, { StaticImageData } from "next/image";
import "./loop.css";

interface LoopCarouselProps {
  src: string | StaticImageData;
}

const LoopCarousel: React.FC<LoopCarouselProps> = ({ src }) => {
  return (
    <div className="image-container mt-10">
      <div className="scrolling-wrapper md:gap-10 gap-5">
        <div className="scrolling-image relative w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
          <Image 
            src={src} 
            alt="Loop IMG" 
            fill 
            style={{ objectFit: "cover" }} 
            quality={100} 
          />
        </div>
        <div className="scrolling-image relative w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
          <Image 
            src={src} 
            alt="Loop IMG" 
            fill 
            style={{ objectFit: "cover" }} 
            quality={100} 
          />
        </div>
      </div>
    </div>
  );
};

export default LoopCarousel;
