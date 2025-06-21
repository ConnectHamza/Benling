'use client';
import { ArrowRightCircle } from 'lucide-react';
import Typography from '@/components/GradientText/Typography';
import Link from 'next/link';

const videos = [
  { video: 'https://crowngroup.com.pk/wp-content/reels/Firefly-Reel-Female.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/Firefly-Reel.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0023.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/Flash-Reel-Female.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0024.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0025.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0026.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0028.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0030.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0031.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0032.webm' },
  { video: 'https://crowngroup.com.pk/wp-content/reels/VID-20250604-WA0027.webm' },
];

export default function VideoSection() {
  return (
    <section className="md:block hidden relative w-full md:py-40 py-20 overflow-hidden">
      <div className="text-center">
        <Typography as="h2" variant="h2-medium-magistral" className="mb-2">
          Crown Electric is Everywhere
        </Typography>
        <Typography as="p" variant="subtext-regular-jakarta" className="text-[#0A0A0A]">
          Watch real riders, influencers, and EV enthusiasts showcase Crown Electric in action across Pakistan.
        </Typography>
      </div>

      <div
        className="mt-10 overflow-x-auto scrollbar-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
        }}
      >
        <div
          className={`
            flex items-stretch gap-4 snap-x snap-mandatory md:w-max
            pl-4 sm:pl-6 md:pl-8
            pr-4 sm:pr-6 lg:pr-8
            xl:pl-[calc((100vw-1300px)/2+1rem)]
            animate-fade-in-up
          `}
          style={{ height: 'calc(100vh - 220px)' }}
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="shrink-0 w-full md:w-[15%] aspect-[3/12] flex items-center justify-center snap-start transition-opacity duration-700 delay-100"
            >
              <div className="relative w-full h-full bg-white/20 rounded-2xl overflow-hidden">
                <video
                  src={video.video}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                  playsInline
                  controls
                  style={{ borderRadius: '1rem' }}
                />
              </div>
            </div>
          ))}

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
              <Link href="https://www.youtube.com/@benlingpk" target="_blank">
                <button className="bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10">
                  <ArrowRightCircle size={30} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Tailwind custom animation */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.1s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </section>
  );
}