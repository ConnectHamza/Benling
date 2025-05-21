import React from "react";
<<<<<<< HEAD:components/LoopCarousel/loop-carousel.tsx
import Image from "next/image";
import styles from "./loop.module.css"; // adjust path as needed

const LoopCarousel = ({ src }) => {
  const paddingTopPercent = 16.95;

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          paddingTop: `${paddingTopPercent}%`,
        }}
      >
        <div className={styles.scrollLoop}>
          <div className={styles.imageContainer}>
            <Image src={src} alt="Loop IMG" fill style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={src} alt="Loop IMG" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
=======
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
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/LoopCarousel/loop-carousel.tsx
      </div>
    </div>
  );
};

<<<<<<< HEAD:components/LoopCarousel/loop-carousel.tsx
export default LoopCarousel;
=======
export default LoopCarousel;
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/LoopCarousel/loop-carousel.tsx
