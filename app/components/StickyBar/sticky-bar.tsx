"use client";
<<<<<<< HEAD:components/StickyBar/stickyBar.tsx
import React from "react";
import Typography from "../GradientText/Typography";
=======
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./StickyBar.css";
import Paragraph from "./word";
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/StickyBar/sticky-bar.tsx


const StickyBar = ({
  title,
  isSticky = true,
  headingPartOne = "Experience a revolutionary blend of performance and control that redefines your everyday ride. With unmatched precision and effortless handling ,",
  headingPartTwo = "the Ezee takes your journey to the next level.",
  colorOne = '#FFFFFF',
  colorTwo = '#F15822',
  gradients = 'bg-gradient-to-br from-[#410D09] to-[#121212]'
}) => {
<<<<<<< HEAD:components/StickyBar/stickyBar.tsx
  return (
    <>
      <div className={`w-full bg-black-30 flex justify-center py-4 sticky top-0 ${"z-100"}`} >
        <div className={`w-full text-white px-4 md:px-12 text-center md:text-start `}>
          <div className="md:text-[28px] font-jakarta text-[20px]">
            <Typography variant="h5-bold-jakarta">
              {title}
            </Typography>
          </div>
        </div>
      </div>
      <div className={`w-full py-12 px-4 md:px-12 ${gradients}`}>
        <div>
          <Typography as="span" style={{ color: colorOne }} variant="h3-bold-jakarta">
            {headingPartOne}
          </Typography>
          <Typography as="span" style={{ color: colorTwo }} variant="h3-bold-jakarta">
            {headingPartTwo}
          </Typography>
=======
  const container = useRef(null);


  return (
    <div>
      <div className="w-full bg-black-30 flex justify-center px-5 py-5 border-b border-gray-90 sticky top-0% z-50">
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
          <Paragraph paragraph={description} color={textColor}/>
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/StickyBar/sticky-bar.tsx
        </div>
      </div>
    </div>
  );
};

export default StickyBar;


