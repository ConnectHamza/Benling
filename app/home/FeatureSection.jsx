import SpeedBg from '../../public/assets/Home/Feature/speedbg.png';
import Discbrake from '../../public/assets/Home/Feature/discbrake.png';
import Nfclock from '../../public/assets/Home/Feature/nfclock.png';
import RemoteAlarm from '../../public/assets/Home/Feature/remotealarm.png';
import Motor from '../../public/assets/Home/Feature/motor.png';
import FeatureCard from '@/components/Features/FeatureCard';

const features = [
  {
    isTextBlock: true,
    backgroundImage: SpeedBg.src,
    textBlock: { number: "04", line1: "Speed", line2: "Modes" },
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

const FeatureSection = () => (
  <section className="w-full bg-[#13102A] py-10 px-2 md:px-0">
    <div className="max-w-[1300px] mx-auto p-10">
      <h2 className="text-white text-3xl md:text-3xl font-magistral font-semi-bold mb-2">Explore Our Smart Features</h2>
      <p className="mb-6 text-white font-regular font-jakarta text-sm">
        Experience the convenience and tech that power every Crown Benling scooter, engineered for performance, safety, and sustainability.
      </p>
      <div
        className="
          grid grid-cols-1 gap-4
          md:grid-cols-5 md:grid-rows-3
          pt-5
        "
        style={{ minHeight: "500px" }}
      >
        {/* 1st card: full width */}
        <div className="md:col-span-5">
          <FeatureCard {...features[0]} />
        </div>
        {/* 2nd card: 2 columns (40%) */}
        <div className="md:col-span-3">
          <FeatureCard {...features[1]} />
        </div>
        {/* 3rd card: 3 columns (60%) */}
        <div className="md:col-span-2">
          <FeatureCard {...features[2]} />
        </div>
        {/* 4th card: 2 columns (40%) */}
        <div className="md:col-span-2">
          <FeatureCard {...features[3]} />
        </div>
        {/* 5th card: 3 columns (60%) */}
        <div className="md:col-span-3">
          <FeatureCard {...features[4]} />
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;