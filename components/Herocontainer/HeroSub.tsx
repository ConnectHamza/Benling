import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // Optional utility for classnames

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
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className={
        "relative w-full min-h-[80vh] flex items-center bg-center bg-no-repeat text-white" +
        className
      }
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${backgroundImage})`,
        backgroundSize: "stretch",
      }}
    >
      <div className="container px-4 sm:px-8 lg:px-8">
        <div className="max-w-4xl text-left">
          <motion.h1
            className="text-xl sm:text-2xl fs-47 md:text-3xl lg:text-5xl jakarta text-[47px] font-bold leading-snug break-words whitespace-normal"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <span>{title}</span>
            <br />
            <span className="bg-gradient-to-r from-[#FBB78C] to-[#F15C2A] bg-clip-text text-transparent">
              {highlightText}
            </span>
            <span>, {description}</span>
          </motion.h1>

          {buttonLabel && (
            <a
              
              href="https://crowngroup.com.pk/" target="_blank"
              className="mt-8 inline-block border border-white text-white px-6 py-2 rounded hover:border-crownOrange hover:bg-crownOrange transition duration-300"
            >
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
