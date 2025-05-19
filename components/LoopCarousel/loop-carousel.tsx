import React from "react";
import Image, { StaticImageData } from "next/image";

interface LoopCarouselProps {
  src: StaticImageData | string;
}

const LoopCarousel: React.FC<LoopCarouselProps> = ({ src }) => {
  const gapPx = 20;
  const paddingTopPercent = 16.95; // calculated from your image

  return (
    <div className="relative overflow-hidden w-full mt-10">
      <div
        className="relative w-full"
        style={{
          paddingTop: `${paddingTopPercent}%`,
        }}
      >
        <div
          className="flex animate-scroll-loop absolute top-0 left-0 w-[calc(200%+20px)] h-full"
          style={{
            gap: `${gapPx}px`,
            willChange: "transform",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "scroll-loop",
            animationDuration: "20s",
          }}
        >
          <div className="relative flex-shrink-0 w-full h-full">
            <Image src={src} alt="Loop IMG" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="relative flex-shrink-0 w-full h-full">
            <Image src={src} alt="Loop IMG" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 20px));
          }
        }
      `}</style>
    </div>
  );
};

export default LoopCarousel;
