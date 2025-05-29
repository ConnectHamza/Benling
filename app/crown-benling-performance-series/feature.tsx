import SpeedBg from '../../public/assets/Home/Feature/Speedmode.png';
import SafetyBg from '../../public/assets/PerformanceSeries/feature/Frame.webp';
import RangeBg from '../../public/assets/PerformanceSeries/feature/Lethium.webp';
import RemoteBg from '../../public/assets/PerformanceSeries/feature/Remote.webp';
import MotorBg from '../../public/assets/PerformanceSeries/feature/Motors.webp';
import Motor from '../../public/assets/Home/Feature/motor.png';
import FeatureCard from '@/components/Features/FeatureCard';
import Typography from '@/components/GradientText/Typography';

const features = [
  {
    isTextBlock: true,
    backgroundImage: SpeedBg.src,
    heading: "High-Speed Performance",
    description: "Enjoy speeds up to 90-95 km/h with smooth, agile control for urban and suburban rides.",
  },
  {
    imageSrc: SafetyBg.src,
    backgroundImage: SafetyBg.src,
    heading: "Enhanced Safety",
    description: "Front and rear disc brakes provide precise stopping power for maximum control.",
  },
  {
    imageSrc: RangeBg.src,
    backgroundImage: RangeBg.src,
    heading: "Extended Range",
    description: "Travel 100-220 km on a single charge with reliable Lithium-LiFePO4 technology.",
  },
  {
    imageSrc: RemoteBg.src,
    backgroundImage: RemoteBg.src,
    heading: "Remote Alarm System",
    description: "Remote keyfob locks and protects your scooter from theft.",
  },
  {
    imageSrc: MotorBg.src,
    backgroundImage: MotorBg.src,
    heading: "Powerful Motors",
    description: "Brushless motors (1000W-3000W) deliver optimal power for any terrain.",
  },
];

const FeatureSection = () => (
  <section className="w-full bg-[#13102A] md:py-40 py-20 px-5">
    <div className="max-w-[1300px] mx-auto ">
      <div className="mb-2">
        <Typography color='text-white' variant='h3-medium-magistral'>
        Engineered for Peak Performance
        </Typography>
      </div>
      <Typography variant='subtext-regular-jakarta' className="mb-6 text-white">
      Crown Benling’s Performance Series offers adaptable speed modes and intelligent engineering, crafted for riders who demand precision, power, and control on every road.
      </Typography>
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