"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./StickyBar.css";
import Paragraph from "./Word";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppButton from "@/components/Button/AppButton";

interface StickyBarProps {
  title: string;
  description: string;
  gradient1: string;
  gradient2: string;
  textColor: string;
  bgImage: string;
  href?: string;
  color?: string;
  showButton?: boolean; 
  isFixed?: boolean; 
}

const StickyBar: React.FC<StickyBarProps> = ({
  title,
  description,
  gradient1,
  gradient2,
  textColor,
  bgImage,
  href,
  color,
  showButton = true,
  isFixed = true 
}) => {
  const container = useRef(null);

  return (
    <div className="relative">
      <div className={`w-full ${isFixed ? "fixed" : "hidden"} z-20 top-0 bg-black-30 flex justify-center items-center px-5 py-5 border-b border-gray-90`}
 >
        <div className="w-lg text-white md:px-5 flex justify-between items-center gap-4">
          <h3 className="font-semibold md:text-[28px] text-[20px]" data-aos="fade-right">{title}</h3>
          {showButton && ( // Conditionally render the AppButton
            <div data-aos="fade-left">
              <AppButton
                size="medium"
                variant="solid"
                label="Book now"
                iconName="ArrowUpRight"
                iconPosition="right"
                href={"/book-now"}
                textColor="text-[#000]"
              />
            </div>
          )}
        </div>
      </div>
            <div className="w-full z-40 bg-black-30 top-0 flex justify-center items-center px-5 py-5 border-b border-gray-90" >
        <div className="w-lg text-white md:px-5 flex justify-between items-center gap-4">
          <h3 className="font-semibold md:text-[28px] text-[20px]" data-aos="fade-right">{title}</h3>
          {showButton && ( // Conditionally render the AppButton
            <div data-aos="fade-left">
              <AppButton
                size="medium"
                variant="solid"
                label="Book now"
                iconName="ArrowUpRight"
                iconPosition="right"
                href={"/book-now"}
                textColor="text-[#000]"
              />
            </div>
          )}
        </div>
      </div>
      <div
        ref={container}
        className="w-full px-5 py-20 flex justify-center"
        style={{
          background: `
            linear-gradient(to right, ${gradient1} 10%, ${gradient2} 50%), 
            url(${bgImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="w-lg md:px-5">
          <Paragraph paragraph={description} color={textColor} />
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