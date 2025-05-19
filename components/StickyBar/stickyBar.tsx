"use client";
import React from "react";
import Typography from "../GradientText/Typography";


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
        </div>
      </div>
    </>
  );
};

export default StickyBar;


