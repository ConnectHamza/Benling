"use client"
import React, { useEffect, useRef } from 'react';
import './FeatureBar.css';

interface FeatureBarProps {
  direction: 'left' | 'right';
  content: string[];
}

const FeatureBar: React.FC<FeatureBarProps> = ({ direction, content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Calculate how many clones we need to fill the container width
    const containerWidth = container.offsetWidth;
    const contentWidth = content.offsetWidth;
    const clonesNeeded = Math.ceil(containerWidth / contentWidth) + 1; // +1 for safety

    // Create clones
    const clones = [];
    for (let i = 0; i < clonesNeeded; i++) {
      const clone = content.cloneNode(true) as HTMLDivElement;
      clone.setAttribute('aria-hidden', 'true');
      clones.push(clone);
    }

    // Append all clones
    clones.forEach(clone => {
      container.appendChild(clone);
    });

    return () => {
      // Clean up clones
      clones.forEach(clone => {
        container.removeChild(clone);
      });
    };
  }, [content]);

  return (
    <div className={`FeatureBar ${direction === 'left' ? 'FeatureBar-left' : 'FeatureBar-right'}`} ref={containerRef}>
      <div ref={contentRef} className='FeatureBar-content'>
        {content.map((item, index) => (
          <span key={index}>{item}</span>          
        ))}
      </div>
    </div>
  );
};

// ... rest of the component remains the same ...

const FeatureBarWrapper = () => {
  return (
    <div className='md:w-full flex flex-col gap-5 md:absolute z-10 justify-center items-center overflow-hidden'>
      <FeatureBar direction='left' content={[
        'Intuitive Digital Dashboard',
        'High-Performance Battery Range',
        'Enhanced Rearview Mirrors',
        'Lightweight Chassis',
        'Energy Recovery System',
        'Anti-Theft Security System',
        'Stylish Body Graphics'
      ]} />
      <FeatureBar direction='right' content={[
        'Eco-Friendly Graphene Battery',
        'Powerful 1200W Brushless Motor',
        'Advanced Suspension System',
        'Smart Keyless Start',
        'Sleek Aerodynamic Design',
        'All-Weather Tires'
      ]} />
      <FeatureBar direction='left' content={[
        'Intuitive Digital Dashboard',
        'Futuristic LED Headlights',
        'Advanced Suspension System',
        'Smart Keyless Start',
        'Sleek Aerodynamic Design',
        'All-Weather Tires'
      ]} />
    </div>
  );
};

export default FeatureBarWrapper;