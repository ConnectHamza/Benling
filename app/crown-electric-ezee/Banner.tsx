import React from 'react'
import EzeeWeb from "../../public/assets/Home/Header/web/ezee.webp";
import HeroSection from '@/components/Herocontainer/Herocontainer';
import FireflyIMGMobile from '../../public/assets/Ezee/Ezee-banner-mobile.webp'

const Banner = () => {
  return (
    <div className='pt-[0px]'>
      <HeroSection
        title="Crown Ezee – Three Wheeler"
        subtitle="Designed for comfort and practicality, Crown Ezee is the perfect electric scooter for daily easy rides. Enjoy seamless handling, control and zero emissions across Pakistan."
        buttonText="Explore More"
        imageSrc={EzeeWeb.src}
        mobileImageSrc={FireflyIMGMobile.src}
        price='230,000'
        href='/brouchers/Crown_Benling_Ezee_Brochure.pdf'
      />
    </div>

  )
}

export default Banner