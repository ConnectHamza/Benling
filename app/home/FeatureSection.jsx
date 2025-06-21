'use client';

import { useEffect } from 'react';
import SpeedBg from '../../public/assets/Home/Feature/speedbg.png';
import Discbrake from '../../public/assets/Home/Feature/discbrake.png';
import Nfclock from '../../public/assets/Home/Feature/nfclock.png';
import RemoteAlarm from '../../public/assets/Home/Feature/remotealarm.png';
import Motor from '../../public/assets/Home/Feature/motor.png';
import FeatureCard from '@/components/Features/FeatureCard';
import Typography from '@/components/GradientText/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    isTextBlock: true,
    backgroundImage: SpeedBg.src,
    heading: "Speed Modes",
    description: "Switch between multiple riding modes for optimized performance and battery efficiency.",
  },
  {
    imageSrc: Discbrake.src,
    backgroundImage: Discbrake.src,
    heading: "Disc Brake",
    description: "High-quality disc brakes provide smooth, controlled, and reliable stopping power.",
  },
  {
    imageSrc: Nfclock.src,
    backgroundImage: Nfclock.src,
    heading: "NFC Unlock",
    description: "Unlock your scooter securely and instantly with a single tap using NFC technology.",
  },
  {
    imageSrc: RemoteAlarm.src,
    backgroundImage: RemoteAlarm.src,
    heading: "Remote Alarm System",
    description: "Protect your vehicle with an advanced remote alarm system for enhanced security.",
  },
  {
    imageSrc: Motor.src,
    backgroundImage: Motor.src,
    heading: "Reliable Motor Power",
    description: "Powerful brushless motor for robust and efficient performance.",
  },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full bg-[#13102A] md:py-40 py-20 px-5">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-2" data-aos="fade-right">
          <Typography as="h2" color='text-white' variant='h3-medium-magistral'>
            Explore Our Smart Features
          </Typography>
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <Typography as="p" variant='subtext-regular-jakarta' className="mb-6 text-white">
            Experience the convenience and tech that power every Crown Electric scooter, engineered for performance, safety, and sustainability.
          </Typography>
        </div>
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-3 pt-5"
          style={{ minHeight: "500px" }}
        >
          <div className="md:col-span-5" data-aos="fade-up">
            <FeatureCard {...features[0]} />
          </div>
          <div className="md:col-span-3" data-aos-desktop="fade-right" data-aos-mobile="fade-up" data-aos-delay="100">
            <FeatureCard {...features[1]} />
          </div>
          <div className="md:col-span-2" data-aos-desktop="fade-left" data-aos-mobile="fade-up" data-aos-delay="200">
            <FeatureCard {...features[2]} />
          </div>
          <div className="md:col-span-2" data-aos-desktop="fade-right" data-aos-mobile="fade-up" data-aos-delay="300">
            <FeatureCard {...features[3]} />
          </div>
          <div className="md:col-span-3" data-aos-desktop="fade-left" data-aos-mobile="fade-up" data-aos-delay="400">
            <FeatureCard {...features[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
