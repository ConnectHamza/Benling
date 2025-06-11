"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Clarity from '@microsoft/clarity';
import { setAOSAnimation } from './setOsAnimation';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const projectId = "rxt1ms0m8i"
  useEffect(() => {
    Clarity.init(projectId);

    setAOSAnimation();

    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      setAOSAnimation();
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default ClientWrapper;
