"use client"
import Card from '@/components/Cards/BrandingCard';
import World from '../../public/assets/Home/Branding/world.svg';
import ElectricBike from '../../public/assets/Home/Branding/electric_bike.svg';
import Carbon from '../../public/assets/Home/Branding/carbon.svg';
import Forest from '../../public/assets/Home/Branding/forest.svg';
import Typography from '@/components/GradientText/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const cardData = [
    {
        imageSrc: World.src,
        title: '1,050,000+ KM',
        description: 'Total Distance Driven across Pakistan',
        aosAnimation: 'fade-right'
    },
    {
        imageSrc: ElectricBike.src,
        title: '24,000+',
        description: 'Today’s Active Riders',
        aosAnimation: 'fade-left'
    },
    {
        imageSrc: Carbon.src,
        title: '231,000 KG',
        description: 'CO₂ Emissions Saved',
        aosAnimation: 'fade-right'
    },
    {
        imageSrc: Forest.src,
        title: '11,000+',
        description: 'Trees Equivalent Planted',
        aosAnimation: 'fade-left'
    },
];

const BrandingSection = () => {


      useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);


    return (
        <section className="bg-white rounded-xl py-20 md:py-40">
            <div className="max-w-[1300px] mx-auto px-4 md:px-6 text-center" >
                {/* Heading */}
                <div data-aos="fade-up">
                <Typography as="h2" variant='h2-medium-magistral' className="mb-2" >
                    Inspiring a Greener Tomorrow
                </Typography>
                </div>
                <div data-aos="fade-up">
                <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A]'>
                    Crown Electric Mobility is committed to sustainability, innovation, and impact-driven growth.
                </Typography>
                </div>
                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-10">
                    {cardData.map((card, idx) => (
                        <Card
                            key={idx}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                            aosAnimation={card.aosAnimation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
    
};

export default BrandingSection;
