'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import Typography from '../GradientText/Typography';

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
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',          // Makes the image cover the full container
        backgroundPosition: 'cover',     // Centers the image
      }}

    >
      <div className="w-full">
        <div className="text-left w-full">
          <div
          >
            <Typography variant='h3-medium-jakarta' as="span">
              {title}
            </Typography>
            <Typography variant='h3-medium-jakarta' as="span">
              <Typography variant='h3-medium-jakarta' as="span" className="bg-gradient-to-r from-[#FBB78C] to-[#F15C2A] bg-clip-text text-transparent inline">
                {" " + highlightText}
              </Typography>
              {`, ${description}`}
            </Typography>
          </div>

          {buttonLabel && (
            <div className="mt-6 sm:mt-8">
              <a
                href="https://crowngroup.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onButtonClick}
                className="inline-flex items-center gap-2 border border-white text-white text-sm px-6 py-2 rounded hover:border-crownOrange hover:bg-crownOrange transition duration-300"
              >
                <Typography variant='subtext-medium-jakarta'>
                {buttonLabel}
                </Typography>
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
