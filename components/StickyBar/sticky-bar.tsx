"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./StickyBar.css";
import Paragraph from "./word";

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
        </div>
      </div>
    </div>
  );
};

export default StickyBar;