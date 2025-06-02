'use client';

import HeroImageSlide from '@/components/Herocontainer/HeroSlider';
import HeroSubSection from '@/components/Herocontainer/HeroSub';
import VideoSection from './VideoSection';
import ShopSection from "./ShopSectoin";
import BlogSection from './BlogSection';
import MotorcycleCarousel from '@/components/LoopCarousel/home-carousel';
import FeaturesSection from './FeatureSection';
import BrandingSection from "./BrandingSection";
import CrownLogo from '../../public/assets/Home/Branding/crownlogo.png';
import Pak from '../../public/assets/Home/Branding/pakistanmap.png';
import Image from 'next/image';
import CrownAboutIMG from '../../public/assets/Home/Header/heroimagesub.webp'
import Faqs from '@/components/Faqs/Faqs'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { faqsData, Slides, bikes } from './data';
import Typography from '@/components/GradientText/Typography';
import StickyBar from '@/components/StickyBar/stickyBar';
import ShopSlider from './ShopSectoin';
import TabbedCarousel from './TabCarousel';


export default function Home() {
 

  return (
    <>
      <div className='pt-[75px]'>
        <HeroImageSlide
          slides={Slides}
        />
      </div>

      <div>
      <StickyBar      
        title="About Crown Benling Electric Mobility"
        description="Crown Benling Electric Mobility, proudly operated by Crown Group, leads the EV revolution with sustainable, high-performance scooters designed for efficiency, reliability, and innovation."
        bgImage={CrownAboutIMG.src}
        gradient1="transparent"
        gradient2="transparent"
        textColor="text-white"
        href='/crown-benling-about'
        color="white"
        showButton={false}
      />
      </div>

      <div>
        <TabbedCarousel />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <BrandingSection />
      </div>
      
        <section className="px-4 flex justify-center">
          <div className="w-full max-w-[1250px] rounded-xl bg-gradient-to-l from-[rgba(11,5,45,1)] to-[rgba(30,20,60,1)] px-4 md:px-6 py-12" data-aos="zoom-in" data-aos-delay="0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 items-center">
              {/* Left: Text Block */}
              <div className="text-white flex flex-col space-y-6">
                <Image src={CrownLogo.src} alt="Crown Logo" width={150} height={150} data-aos="zoom-out" data-aos-delay="500" />
                <div data-aos="fade-right" data-aos-delay="800">
                <Typography as="h3" variant='h3-medium-magistral' >
                  Pakistan Largest EV Scooter Growing Network
                </Typography>
                </div>
                <div data-aos="fade-right" data-aos-delay="1000">
                <Typography variant="subtext-regular-jakarta">
                  Crown Benling is driving the EV revolution with a fast-growing network, making electric mobility accessible, reliable, and future-ready across Pakistan.
                </Typography>
                </div>
              </div>

              {/* Right: Map */}
              <div className="flex justify-center items-start">
                <Image
                  src={Pak.src}
                  alt="Map of Pakistan"
                  width={500}
                  height={500}
                  className="h-auto w-full max-w-sm md:max-w-md lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>        

        <div>
          <VideoSection />
        </div>

        <div>                
          <ShopSlider /> 
        </div>

        <div>
          <BlogSection />                    
        </div>
        <div>
        <Faqs data={faqsData} />        
        </div>
    </>
  );
}
