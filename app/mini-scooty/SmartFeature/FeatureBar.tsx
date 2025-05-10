"use client"
import React, { useEffect } from 'react';
import './FeatureBar.css';

interface FeatureBarProps {
  direction: 'left' | 'right';
  content: string[];
}

const FeatureBar: React.FC<FeatureBarProps> = ({ direction, content }) => {
  useEffect(() => {
    const featureBars = document.querySelectorAll('.FeatureBar-content');
    featureBars.forEach((bar) => {
      const clone = bar.cloneNode(true);
      bar.parentElement?.appendChild(clone);
    });
  }, []);

  return (
    <div className={`FeatureBar ${direction === 'left' ? 'FeatureBar-left' : 'FeatureBar-right'} overflow-x-Hide relative`}>
      <div className='FeatureBar-content '>
        {content.map((item, index) => (
          <span key={index}>{item}</span>          
        ))}
      </div>
    </div>
  );
};

const FeatureBarWrapper = () => {
  return (
    <div className='md:w-full flex flex-col gap-5 md:absolute z-10 justify-center items-center overflow-x-Hide'>
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