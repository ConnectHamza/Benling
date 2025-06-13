import SpeedBg from '../../public/assets/Home/Feature/Speedmode.png';
import SafetyBg from '../../public/assets/PerformanceSeries/feature/Frame.webp';
import RangeBg from '../../public/assets/PerformanceSeries/feature/Lethium.webp';
import RemoteBg from '../../public/assets/PerformanceSeries/feature/Remote.webp';
import MotorBg from '../../public/assets/PerformanceSeries/feature/Motors.webp';
import Motor from '../../public/assets/Home/Feature/motor.png';
import FeatureCard from '@/components/Features/FeatureCard';
import Typography from '@/components/GradientText/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    description: "Travel 100-220 km on a single charge with reliable Lithium-LiFePO₄ technology.",
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
        <div data-aos="zoom-out">
        <Typography as="h2" color='text-white' variant='h2-medium-magistral'>
        Engineered for Peak Performance
        </Typography>
        </div>
      </div>
        <div data-aos="zoom-in">
      <Typography variant='subtext-regular-jakarta' className="mb-6 text-white">
      Crown Benling’s Performance Series offers adaptable speed modes and intelligent engineering, crafted for riders who demand precision, power, and control on every road.
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

export default FeatureSection;