import React from 'react'
import FireflyIMG from '../../public/assets/Ezee/Ezee-banner.png'
import HeroSection from '@/components/Herocontainer/Herocontainer';
import FireflyIMGMobile from '../../public/assets/Ezee/Ezee-banner-mobile.webp'

const Banner = () => {
  return (
    <div className='pt-[75px]'>
      <HeroSection
        title="Ezee – Your Everyday Electric Companion"
        subtitle="Designed for comfort and practicality, Ezee is the perfect electric scooter for daily rides. Enjoy easy handling, long range, and zero emissions across Pakistan."
        buttonText="Explore More"
        imageSrc={FireflyIMG.src}
        mobileImageSrc={FireflyIMGMobile.src}
      />
    </div>

  )
}

export default Banner