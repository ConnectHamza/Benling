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
  bgImage?: string;
  href?: string;
  color?: string;
  showButton?: boolean; 
  isFixed?: boolean; 
  price?: string;
  showPrice?: boolean;
  isLithium?: boolean;
}

const StickyBar: React.FC<StickyBarProps> = ({
  title,
  price,
  description,
  gradient1,
  gradient2,
  textColor,
  bgImage,
  href,
  color,
  showButton = true,
  showPrice = true,
  isFixed = true,
  isLithium = false,

}) => {
  const container = useRef(null);

  return (
    <div className="relative">
      <div className={`w-full ${isFixed ? "fixed" : "hidden"} z-30 top-0 bg-black-30 flex justify-center items-center px-5 md:py-4 py-2 border-b border-[#e8e8e8]`}
    style={{
      backdropFilter: "blur(50px)"
    }}
 >      
        <div className="w-lg text-white md:px-5 flex justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
          <h2 className="font-semibold md:text-[28px] text-[20px]" data-aos="fade-right">{title}</h2>
          {isLithium && (
          <h2 className="font-semibold font-magistral md:text-[20px] text-[14px] text-[#47D1EB] border-[#47D1EB] border-2 rounded-lg px-2 py-1 md:flex hidden">Lithium-LiFePO₄</h2>
          )}
          </div>
                    <div className="flex justify-between items-center gap-10">
                      {showPrice && (
            <div>
              <span className="md:text-sm text-xs font-jakarta">Priced at</span>
              <h4 className="md:text-2xl text-base font-semibold font-jakarta">PKR {price}</h4>
            </div>)}
          {showButton && (
            <div data-aos="fade-left" className="md:block hidden">
              <AppButton
                size="medium"
                variant="glow"
                label="Book Now"
                iconName="ArrowUpRight"
                iconPosition="right"
                href={"/book-now"}
                textColor="text-[#000]"
              />
            </div>
          )}
          </div>
        </div>
      </div>
            <div className="w-full z-20 bg-black-30 top-0 flex justify-center items-center px-5 py-5 border-b border-[#e8e8e8]" >
        <div className="w-lg text-white md:px-5 flex justify-between items-center gap-4">
          <div>
          <div className="flex gap-4 items-center">
          <h2 className="font-semibold md:text-[28px] text-[20px]" data-aos="fade-right">{title}</h2>
          {isLithium && (
          <h2 className="font-semibold font-magistral md:text-[20px] text-[14px] text-[#47D1EB] border-[#47D1EB] border-2 rounded-lg px-2 py-1 md:flex hidden">Lithium-LiFePO₄</h2>
          )}
          </div>
          </div>
          <div className="flex justify-between items-center gap-10">
            {showPrice && (
            <div  className="md:block hidden">
              <span className="text-sm font-jakarta">Priced at</span>
              <h4 className="text-2xl font-semibold font-jakarta">PKR {price}</h4>
            </div>
            )}
          {showButton && ( // Conditionally render the AppButton
            <div data-aos="fade-left">
              <AppButton
                size="medium"
                variant="glow"
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