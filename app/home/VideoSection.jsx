'use client';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

import Thumbnail1 from '../../public/assets/Home/Thumbnail/thumbnail1.png';
import Thumbnail2 from '../../public/assets/Home/Thumbnail/thumbnail2.png';
import Thumbnail3 from '../../public/assets/Home/Thumbnail/thumbnail3.png';
import Thumbnail4 from '../../public/assets/Home/Thumbnail/thumbnail4.png';
import Typography from '@/components/GradientText/Typography';



// const videos = [
//     { img: Thumbnail1.src, url: 'https://youtube.com/watch?v=abc123' },
//     { img: Thumbnail2.src, url: 'https://youtube.com/watch?v=def456' },
//     { img: Thumbnail3.src, url: 'https://youtube.com/watch?v=ghi789' },
//     { img: Thumbnail4.src, url: 'https://youtube.com/watch?v=jkl012' },
//     { img: Thumbnail1.src, url: 'https://youtube.com/watch?v=mno345' },
// ];

const videos = [
    { video: '/Reels/Firefly-Reel.webm' },
    { video: '/Reels/Firefly-Reel-Female.webm' },
    { video: '/Reels/Flash-Reel-Female.webm' },
    { video: '/Reels/Flash-Reel-Male.webm' },
];


export default function VideoSection() {
    return (
        <section className="relative w-full md:py-40 py-20">
            <div className='m-w-auto text-center '>
                <Typography variant='h2-medium-magistral' className="mb-2">
                    Benling is Everywhere
                </Typography>
                <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A]'>
                    Watch real riders, influencers, and EV enthusiasts showcase Crown Benling in action across Pakistan.                </Typography>
            </div>
            <div
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none touch-pan-x touch-pan-y px-4 mt-10"
                style={{
                    height: 'calc(100vh - 220px)',
                    WebkitOverflowScrolling: 'touch',
                    willChange: 'transform',
                }}
            >
                {videos.map((video, idx) => (
                    <div
                        key={idx}
                        className="shrink-0 w-full sm:w-full md:w-[20%] aspect-[9/16] flex items-center justify-center snap-start sm:snap-start md:snap-none"
                    >
                        <div className="relative w-full h-full bg-white/20 rounded-2xl overflow-hidden">
                            <video
                                src={video.video}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                controls
                                playsInline
                                preload="metadata"
                                style={{ borderRadius: '1rem' }}
                            />

                        </div>
                    </div>
                ))}


                {/* Explore more button */}
                <div className="shrink-0 w-full sm:w-full md:w-[20%] aspect-[9/16] flex items-center justify-center snap-start sm:snap-start md:snap-none">
                    <div className="p-4 bg-white/20 rounded-2xl w-full h-full flex flex-col items-center justify-center text-center space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold font-magistral text-black mb-2">
                                Explore More Videos
                            </h2>
                            <p className="text-sm font-jakarta text-black">
                                Check out our YouTube channel for more exciting content!
                            </p>
                        </div>
                        <button className='bg-gray-200 text-white rounded-full p-3 hover:scale-110 transition z-10'>
                            <ArrowRightCircle size={30} />

                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}
