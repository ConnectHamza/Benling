"use client"
import Typography from '@/components/GradientText/Typography'
import React, { useEffect, useState } from 'react'
import FireflyLight1 from '../../public/assets/Firefly/Color/Firefly-Light-1.webp'
import FireflyLight2 from '../../public/assets/Firefly/Color/Firefly-Light-2.webp'
import FireflyLight3 from '../../public/assets/Firefly/Color/Firefly-Light-3.webp'
import FireflyLight4 from '../../public/assets/Firefly/Color/Firefly-Light-4.webp'
import Image from 'next/image'

const Illumination = () => {
    const images = [FireflyLight1, FireflyLight2, FireflyLight3, FireflyLight4 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:h-[90vh] items-center md:pl-20 px-6 md:px-0 gap-10">
        
            <div className="md:w-[50%]">
              <div data-aos="fade-right">
              <Typography color='text-gray-90' variant='h2-bold-magistral'>
                Brilliant Illumination
              </Typography><br />
              </div>
              <div data-aos="fade-right">
              <Typography color='text-[#1B3932]' variant='body-regular-jakarta'>
Firefly's LED headlight ensures clear visibility and stylish, safe rides anytime.
              </Typography>
              </div>
            </div>
                        <div className="md:w-[50%]">
             <Image width={1200} alt='Knight Rider Image' src={images[currentIndex]} />
            </div>

        
    </div>
  )
}

export default Illumination