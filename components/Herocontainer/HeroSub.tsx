'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HeroSection = ({
  title,
  highlightText,
  description,
  buttonLabel,
  onButtonClick,
  backgroundImage,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className={`relative w-full flex items-center text-white py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 ${className}`}
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full">
        <div className="text-left w-full max-w-[800px]">
          <motion.h1
            className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-tight sm:leading-snug break-words text-balance"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <span>
              {title}{' '}
              <span className="bg-gradient-to-r from-[#FBB78C] to-[#F15C2A] bg-clip-text text-transparent inline">
                {highlightText}
              </span>
              {`, ${description}`}
            </span>
          </motion.h1>

          {buttonLabel && (
            <div className="mt-6 sm:mt-8">
              <a
                href="https://crowngroup.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onButtonClick}
                className="inline-flex items-center gap-2 border border-white text-white text-sm px-6 py-2 rounded hover:border-crownOrange hover:bg-crownOrange transition duration-300"
              >
                {buttonLabel}
                <ChevronRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
