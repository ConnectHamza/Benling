import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/assets/Header-Footer/Benling-Footer-Logo.svg'
import Call from '../../public/assets/Header-Footer/call.svg'
import Location from '../../public/assets/Header-Footer/location.svg'
import Mail from '../../public/assets/Header-Footer/mail.svg'
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Typography from '../GradientText/Typography';

const items = [
    { label: 'Ezee', href: '/ezee' },
    { label: 'Firefly', href: '/firefly' },
    { label: 'Flash', href: '/flash' },
    { label: 'Knight Rider', href: '/knight-rider' },
    { label: 'Mini Scooty', href: '/mini-scooty' },
    { label: 'Roshni', href: '/roshni' },
    { label: 'Roshni X', href: '/roshnix' },
    { label: 'Spark', href: '/spark' },

];

const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <div className="relative flex justify-center bg-black-70 text-white md:pb-0 pb-5  pt-20">
            <div className="w-lg px-5 md:pt-[150px]">
                <div className="flex flex-col md:flex-row md:space-x-8 justify-between text-left items-start space-y-6 md:space-y-0">
                    <div className='w-full md:w-2/6'>
                        <div className='mb-2'>
                            <Typography variant='body-bold-jakarta'>
                                Contact
                            </Typography>

                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2 flex items-center">
                                <img src={Mail.src} alt="email icon" className="mr-3 w-5 h-5" />
                                <Typography variant='subtext-regular-jakarta'>info@benling.pk</ Typography>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src={Call.src} alt="phone icon" className="mr-3 w-5 h-5" />
                                <Typography variant='subtext-regular-jakarta'>021 - 111 000 348</ Typography>
                            </li>
                            <li className="mb-2 flex items-start">
                                <img src={Location.src} alt="location icon" className="mr-3 w-5 h-5" />
                                <Typography variant='subtext-regular-jakarta'>Plot No. 672-673, Deh Joreji Taluka, Bin Qasim Town Karachi, 75600</ Typography>

                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/6'>
                        <div className='mb-2'>
                            <Typography variant='body-bold-jakarta'>Quick Links</ Typography>

                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">
                                <Link href="/about">
                                    <Typography variant='subtext-regular-jakarta'>About us</ Typography>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact">
                                    <Typography variant='subtext-regular-jakarta'>Contact us</ Typography>
                                </Link>
                            </li>
                            {/* <li className="mb-2">
                                <Link href="/faqs">FAQs</Link>
                            </li> */}
                            {/* <li className="mb-2">
                                <Link href="/blogs">Blogs</Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className='w-full md:w-1/6'>
                        <div className='mb-2'><Typography variant='body-bold-jakarta'>More</ Typography>
                        </div>
                        <ul className='md:text-[15px] text-[13px]'>
                            {/* <li className="mb-2">
                                <Link href="/media-center">Media Center</Link>
                            </li> */}
                            {/* <li className="mb-2">
                                <Link href="/find-a-dealer">Dealership</Link>
                            </li> */}
                            {/* <li className="mb-2">
                                <Link href="/become-a-distributor">Become a Distributor</Link>
                            </li> */}
                            <li className="mb-2">
                                <Link href="/find-a-dealer">
                                    <Typography variant='subtext-regular-jakarta'>Store Locator</ Typography>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-2/6'>
                        <div className='mb-2'><Typography variant='body-bold-jakarta'>Product Links</ Typography>
                        </div>
                        <ul className='flex justify-start gap-3 flex-wrap md:text-[15px] text-[13px]'>
                            {items.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between hover:bg-white hover:text-black-50 bg-black-50 px-5 py-3 rounded-30 transition duration-300 ease-in-out"
                                    >
                                        <span className="mr-2">{item.label}</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-10'>
                    <Image src={FooterLogo} alt='Benling-Pakistan' />
                </div>
                <div className='flex md:flex-row flex-col justify-between md:w-[82%] md:mt-[-5vh] mt-10 md:py-5 gap-3'>
                    <div>
                        <p>© {currentYear} Crown Benling Electric Mobility Pakistan</p>
                    </div>
                    {/* <div className='text-[13px] md:text-[15px] flex gap-4'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms and Conditions</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;