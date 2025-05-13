"use client";
import React from "react";


const StickyBar = ({
  title,
  isSticky = true,
  headingPartOne = "Experience a revolutionary blend of performance and control that redefines your everyday ride. With unmatched precision and effortless handling ,",
  headingPartTwo = "the Ezee takes your journey to the next level.",
  colorOne = '#FFFFFF',
  colorTwo = '#F15822',
  gradients = 'bg-gradient-to-br from-[#410D09] to-[#121212]'
}) => {
  return (
    <>
      <div className={`w-full bg-black-30 flex justify-center py-4 sticky top-0 ${isSticky ? "z-50" : "z-0"}`} >
        <div className={`w-full text-white px-4 md:px-12 text-center md:text-start `}>
          <h3 style={{fontWeight:700}} className="md:text-[28px] font-jakarta text-[20px]">{title}</h3>
        </div>
      </div>
      <div className={`w-full py-12 px-4 md:px-12 ${gradients}`}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] font-jakarta leading-[1.2]">
          <span style={{ color: colorOne }}>{headingPartOne}</span>
          <span style={{ color: colorTwo }}>{headingPartTwo}</span>
        </h1>
      </div>
    </>
  );
};

export default StickyBar;


