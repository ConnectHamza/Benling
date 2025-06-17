'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { setAOSAnimation } from './setOsAnimation';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');   
      setAOSAnimation();
      AOS.init({ duration: 500, once: true });

      const Clarity = (await import('@microsoft/clarity')).default;
      Clarity.init('rxt1ms0m8i');

      const ReactPixel = (await import('react-facebook-pixel')).default;
      ReactPixel.init('842886247572469');
      ReactPixel.pageView();

      const handleResize = () => {
        setAOSAnimation();
        AOS.refresh();
      };
      window.addEventListener('resize', handleResize);      
      return () => window.removeEventListener('resize', handleResize);
    })();
  }, []);

  return (
    <>
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`!function(w,d,t){ /* …same code… */ }(window,document,'ttq');`}
      </Script>

      {children}
    </>
  );
};

export default ClientWrapper;
