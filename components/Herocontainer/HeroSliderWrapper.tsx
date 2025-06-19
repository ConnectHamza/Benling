// components/HeroSliderWrapper.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import HeroSectionSkeleton from './HeroSectionSkeleton';

interface HeroSectionWrapperProps {
  slides: any[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const HeroSection = dynamic(() => import('./HeroSlider'), {
  loading: () => <HeroSectionSkeleton />,
  ssr: false
});

export default function HeroSectionWrapper({ 
  slides, 
  autoplay = true, 
  autoplayInterval = 5000 
}: HeroSectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        <HeroSection 
          slides={slides} 
          autoplay={autoplay} 
          autoplayInterval={autoplayInterval} 
        />
      ) : (
        <HeroSectionSkeleton />
      )}
    </div>
  );
}