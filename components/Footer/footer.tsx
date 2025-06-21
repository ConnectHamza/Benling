"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FooterLogo from '../../public/assets/Header-Footer/Crown-Electric-Mobility-Footer.svg'
import { ArrowUpRight, MailIcon, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Typography from '../GradientText/Typography';
import { usePathname } from 'next/navigation';
import { div } from 'framer-motion/client';
import Aos from 'aos';

const performanceItems = [
    { label: 'Champion', href: 'crown-electric-champion' },
    { label: 'Cherry', href: 'crown-electric-cherry' },
    // { label: 'Markhor', href: 'crown-electric-markhor' },
    { label: 'Raftaar', href: 'crown-electric-raftaar' },
    { label: 'Victory', href: 'crown-electric-victory' },
];

const grapheneItems = [
    { label: 'Ezee', href: 'crown-electric-ezee' },
    { label: 'Fairy', href: 'crown-electric-fairy' },
    { label: 'Flash', href: 'crown-electric-flash' },
    { label: 'Firefly', href: 'crown-electric-firefly' },
    { label: 'Knight Rider', href: 'crown-electric-knight-rider' },
    { label: 'Mini Scooty', href: 'crown-electric-mini-scooty' },
    { label: 'Roshni', href: 'crown-electric-roshni' },
    { label: 'Roshni X', href: 'crown-electric-roshni-x' },
    { label: 'Spark', href: 'crown-electric-spark' },
];

const Footer = () => {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);

    // Tab state: 'performance' or 'graphene'
    const [activeTab, setActiveTab] = useState<'performance' | 'graphene'>('performance');

    useEffect(() => {
        if (pathname === "/book-now"){
            setIsHidden(false);
        } else {
            setIsHidden(true)
        }
    }, [pathname]);

        useEffect(() => {
        Aos.refresh();
    }, [activeTab]);

    const currentYear = new Date().getFullYear();

    // Get items for the currently selected tab and sort A-Z
    const productLinks = (activeTab === 'performance' ? performanceItems : grapheneItems)
        .slice()
        .sort((a, b) => a.label.localeCompare(b.label));

    return (
        <div className={`${isHidden ? 'flex' : 'hidden'} relative justify-center bg-black-70 text-white md:pb-0 pb-5 md:py-40 py-20`}>
            <div className="w-lg px-5">
                <div className="flex flex-col md:flex-row md:space-x-8 justify-between text-left items-start space-y-6 md:space-y-0">
                    <div className='w-full md:w-2/6' data-aos="fade-up">
                        <div className='mb-2'>
                            <Typography as="h3" variant='body-bold-jakarta'>
                                Contact
                            </Typography>
                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2 flex items-center gap-4">
                                <MailIcon size={18} className='text-red-200' />
                                <Link href='mailto:info@crownelectricmobility.com'><Typography variant='subtext-regular-jakarta'>info@crownelectricmobility.com</Typography></Link>
                            </li>
                            <li className="mb-2 flex items-center gap-4">
                                <Phone size={18} className='text-red-200' />
                                <Link href='tel:021-111000348'><Typography variant='subtext-regular-jakarta'>021-111000348</Typography></Link>
                            </li>
                            <li className="mb-2 flex items-start gap-4">
                                <MapPin size={24} className='text-red-200' />
                                <Link href='https://maps.app.goo.gl/R1KkNJcL3yy26wdk6'><Typography variant='subtext-regular-jakarta'>Plot No. 672-673, Deh Joreji Taluka, Bin Qasim Town Karachi, 75600</Typography></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/6' data-aos="fade-up">
                        <div className='mb-2'>
                            <Typography as="h3" variant='body-bold-jakarta'>Quick Links</Typography>
                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">
                                <Link href="/about-us">
                                    <Typography variant='subtext-regular-jakarta'>About us</Typography>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact">
                                    <Typography variant='subtext-regular-jakarta'>Contact us</Typography>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/book-now">
                                    <Typography variant='subtext-regular-jakarta'>Book Now</Typography>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/crown-electric-performance-series">
                                    <Typography variant='subtext-regular-jakarta'>Performance Series</Typography>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full md:w-1/6' data-aos="fade-up">
                        <div className='mb-2'><Typography as="h3" variant='body-bold-jakarta'>More</Typography>
                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">
                                <Link href="/find-a-dealer">
                                    <Typography variant='subtext-regular-jakarta'>Find a Dealer</Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/become-a-dealer">
                                    <Typography variant='subtext-regular-jakarta'>Become a Dealer</Typography>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-2/6' data-aos="fade-up">
                        <div className='mb-2 flex flex-col'>
                            {/* <Typography as="h3" variant='body-bold-jakarta'>Product Links</Typography> */}
                            {/* Tabs */}
                            <div className="flex gap-6 font-jakarta md:text-lg text-base my-4 md:mt-0 md:mb-4">
                                <button
                                    className={` rounded-t-lg font-bold transition ${activeTab === 'performance' ? 'text-white' : 'text-[#5c5b5b]'}`}
                                    onClick={() => setActiveTab('performance')}
                                    aria-selected={activeTab === 'performance'}
                                >
                                    Performance Series
                                </button>
                                <button
                                    className={` rounded-t-lg font-bold transition ${activeTab === 'graphene' ? 'text-white' : 'text-[#5c5b5b]'}`}
                                    onClick={() => setActiveTab('graphene')}
                                    aria-selected={activeTab === 'graphene'}
                                >
                                    Graphene Series
                                </button>
                            </div>
                        </div>
                        {/* Tab content: Product Links */}
                        <ul className='flex justify-start gap-3 flex-wrap md:text-[15px] text-[13px]'>

                            {productLinks.map((item, index) => (
                                <li key={index} className="mb-2" >
                                    <div >
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between hover:bg-orange-500 bg-black-50 px-5 py-3 rounded-30 transition duration-300 ease-in-out"
                                    >
                                        <span className="mr-2">{item.label}</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-10'>
                    <Image src={FooterLogo} alt='Crown Electric Mobility Pakistan' data-aos="zoom-in" />
                </div>
                <div className='flex md:flex-row flex-col justify-between md:w-[82%] md:mt-[-5vh] mt-10 md:py-5 gap-3'>
                    <div className='mt-4'>
                        <p>© {currentYear} Crown Electric Mobility Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;