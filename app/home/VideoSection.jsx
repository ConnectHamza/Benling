'use client';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

import Thumbnail1 from '../../public/assets/Home/Thumbnail/thumbnail1.png';
import Thumbnail2 from '../../public/assets/Home/Thumbnail/thumbnail2.png';
import Thumbnail3 from '../../public/assets/Home/Thumbnail/thumbnail3.png';
import Thumbnail4 from '../../public/assets/Home/Thumbnail/thumbnail4.png';
import Typography from '@/components/GradientText/Typography';

const videos = [
    { img: Thumbnail1.src, url: 'https://youtube.com/watch?v=abc123' },
    { img: Thumbnail2.src, url: 'https://youtube.com/watch?v=def456' },
    { img: Thumbnail3.src, url: 'https://youtube.com/watch?v=ghi789' },
    { img: Thumbnail4.src, url: 'https://youtube.com/watch?v=jkl012' },
    { img: Thumbnail1.src, url: 'https://youtube.com/watch?v=mno345' },
];

export default function VideoSection() {
    return (
        <section className="relative w-full px-0 sm:px-4">
            <div className='m-w-auto text-center '>
                <Typography variant='h2-medium-magistral' className="mb-2">
                    Benling is Everywhere
                </Typography>
                <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A]'>
                    Watch real riders, influencers, and EV enthusiasts showcase Crown Benling in action across Pakistan.                </Typography>
            </div>
            <div
                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar touch-pan-x px-4"
                style={{
                    height: 'calc(100vh - 220px)',
                    WebkitOverflowScrolling: 'touch',
                    willChange: 'transform',
                }}
            >


                {videos.map((video, idx) => (
                    <div
                        key={idx}
                        className="shrink-0 w-full sm:w-full md:w-[20%] aspect-[9/16] flex items-center justify-center 
                snap-start sm:snap-start md:snap-none"
                    >
                        <div className="relative w-full h-full bg-white/20 rounded-2xl">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <Image
                                    src={video.img}
                                    alt={`Benling Video ${idx + 1}`}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                                    <div className="bg-white/70 p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M10.804 8.51 6.247 11.14A.5.5 0 0 1 5.5 10.71V5.29a.5.5 0 0 1 .747-.43l4.557 2.63a.5.5 0 0 1 0 .86z" />
                                        </svg>
                                    </div>
                                </div>
                                <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20"
                                >
                                    <span className="sr-only">Watch on YouTube</span>
                                </a>
                            </div>
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
