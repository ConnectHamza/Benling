import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';
import styles from './StickyBar.css';

interface ParagraphProps {
  paragraph: string;
  color: string;
}

export default function Paragraph({ paragraph, color }: ParagraphProps) {
  const container = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = paragraph.split(" ");

  return (
    <h2 
      ref={container}         
      className={`text-5xl font-[700] font-jakarta ${color}`} 
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className='word'>
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
      })}
    </span>
  );
}

interface CharProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className='shadow'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}