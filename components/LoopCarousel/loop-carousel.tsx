import React from "react";
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
      </div>
    </div>
  );
};

export default LoopCarousel;
