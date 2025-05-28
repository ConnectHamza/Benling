"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./StickyBar.css";
import Paragraph from "./Word";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StickyBarProps {
  title: string;
  description: string;
  gradient1: string;
  gradient2: string;
  textColor: string;
  bgImage: string;
  href?: string;
  color?: string;
}

const StickyBar: React.FC<StickyBarProps> = ({
  title,
  description,
  gradient1,
  gradient2,
  textColor,
  bgImage,
  href,
  color
}) => {
  const container = useRef(null);


  return (
    <div>
      <div className="w-full bg-black-30 flex justify-center px-5 py-5 border-b border-gray-90">
        <div className="w-lg text-white md:px-5">
          <h3 className="font-semibold md:text-[28px] text-[20px]">{title}</h3>
        </div>
      </div>
      <div
        ref={container} // Attach the ref to the 
        className="w-full px-5 py-20 flex justify-center"
        style={{
          background: `
            linear-gradient(to right, ${gradient1} 10%, ${gradient2} 50%), 
            url(${bgImage})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="w-lg md:px-5">
          <Paragraph paragraph={description} color={textColor}/>
          {href && color && (
            <Link href={href}>
              <button
                className={`font-jakarta mt-10 md:text-sm text-xs border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}
              >
                Read More About Crown <ArrowRight size={20} />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyBar;