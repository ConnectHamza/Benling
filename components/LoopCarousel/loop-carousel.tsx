import React from "react";
import Image, { StaticImageData } from "next/image";
import "./loop.css";

interface LoopCarouselProps {
  images: (string | StaticImageData)[]; 
  alt?: string; 
}

const LoopCarousel: React.FC<LoopCarouselProps> = ({ images, alt = "Carousel Image" }) => {
  return (
    <div className="image-container mt-10">
      <div className="scrolling-wrapper md:gap-10 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="scrolling-image relative w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`} 
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoopCarousel;