import React from 'react'
import EzeeWeb from "../../public/assets/Home/Header/web/ezee.webp";
import HeroSection from '@/components/Herocontainer/Herocontainer';
import FireflyIMGMobile from '../../public/assets/Ezee/Ezee-banner-mobile.webp'

const Banner = () => {
  return (
    <div className='pt-[0px]'>
      <HeroSection
        title="Crown Electric Ezee – Three Wheeler"
        subtitle="Designed for comfort and practicality, the Crown Electric Ezee is a reliable 650W three wheeler electric scooter in Pakistan, perfect for easy daily rides. Enjoy smooth handling, enhanced control, and zero-emission travel — all tailored for convenient urban mobility across the country."
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