"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./StickyBar.css";
import Paragraph from "./Word";

interface StickyBarProps {
  title: string;
  description: string;
  gradient1: string;
  gradient2: string;
  textColor: string;
}

const StickyBar: React.FC<StickyBarProps> = ({
  title,
  description,
  gradient1,
  gradient2,
  textColor,
}) => {
  const container = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start 0.9", "start 0.25"], 
  // });


  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [`linear-gradient(to right, ${gradient1} 10%, ${gradient2} 50%)`, `linear-gradient(to right, ${gradient2} 10%, ${gradient1} 50%)`]
  // );

  // const textColorTransform = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["#000000", "#FFFFFF"]
  // );

  return (
    <>
      <div className="w-full bg-black-30 flex justify-center px-5 py-5 border-b border-gray-90 sticky top-0 z-50">
        <div className="w-lg text-white">
          <h3 className="font-bold md:text-[28px] text-[20px]">{title}</h3>
        </div>
      </div>
      <div
        ref={container} // Attach the ref to the 
        className="w-full px-5 py-20 flex justify-center"
        style={{
          background: `linear-gradient(to right, ${gradient1} 10%, ${gradient2} 50%)`,
        }}
      >
        <div className="w-lg">
          {/* <motion.h2
            className={`heading3 ${textColor}`}
            style={{
              // opacity: scrollYProgress, 
              // color: textColorTransform,
              
            }}
          >
            {description}
          </motion.h2> */}
          <Paragraph paragraph={description} color={textColor}/>
        </div>
      </div>
    </>
  );
};

export default StickyBar;