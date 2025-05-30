'use client';
import { ArrowRightCircle } from 'lucide-react';
import Typography from '@/components/GradientText/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videos = [
  { video: '/Reels/Firefly-Reel-Female.webm' },
  { video: '/Reels/Flash-Reel-Female.webm' },
  { video: '/Reels/Firefly-Reel.webm' },
  { video: '/Reels/Flash-Reel-Male.webm' },
];

export default function VideoSection() {
  return (
    <section className="relative w-full md:py-40 py-20 overflow-hidden">
      <div className="m-w-auto text-center">
        <div data-aos="fade-up" data-aos-delay="0">
        <Typography variant="h2-medium-magistral" className="mb-2">
          Benling is Everywhere
        </Typography>
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
        <Typography variant="subtext-regular-jakarta" className="text-[#0A0A0A]">
          Watch real riders, influencers, and EV enthusiasts showcase Crown Benling in action across Pakistan.
        </Typography>
        </div>
      </div>

      {/* Scrollable area */}
      <div
        className="mt-10 overflow-x-auto scrollbar-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
        }}
      >
        <div
          className={`
            flex items-stretch gap-4 snap-x snap-mandatory w-max
            pl-4 sm:pl-6 md:pl-8
            pr-4 sm:pr-6 lg:pr-8
            xl:pl-[calc((100vw-1300px)/2+1rem)]
          `}
          style={{ height: 'calc(100vh - 220px)' }}
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="shrink-0 w-full sm:w-full md:w-[20%] aspect-[9/16] flex items-center justify-center snap-start"
            >
              <div className="relative w-full h-full bg-white/20 rounded-2xl overflow-hidden">
                <video
                  src={video.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  preload="metadata"
                  style={{ borderRadius: '1rem' }}
                />
              </div>
            </div>
          ))}

          {/* Explore More card */}
          <div className="shrink-0 w-full sm:w-full md:w-[20%] aspect-[9/16] flex items-center justify-center snap-start">
            <div className="p-4 bg-white/20 rounded-2xl w-full h-full flex flex-col items-center justify-center text-center space-y-6">
              <div>
                <h2 className="text-2xl font-semibold font-magistral text-black mb-2">
                  Explore More Videos
                </h2>
                <p className="text-sm font-jakarta text-black">
                  Check out our YouTube channel for more exciting content!
                </p>
              </div>
              <button className="bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10">
                <ArrowRightCircle size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
