import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/assets/Header-Footer/Benling-Footer-Logo.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <div className="relative flex justify-center bg-black-70 text-white md:pb-0 pb-5  pt-20">
            <div className="w-lg px-5 md:pt-[150px]">
                <div className="flex flex-col md:flex-row md:space-x-8 justify-between text-left items-start space-y-6 md:space-y-0">
                    <div className='w-full md:w-2/6'>
                        <h3 className='font-bold text-xl mb-2'>Contact</h3>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">info@benling.pk</li>
                            <li className="mb-2">021-12345678</li>
                            <li className="mb-2">Plot # 672-673, Building 4, Deh Jorej Taluka District Mall, Bin Qasim Karachi, Pakistan</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/6'>
                        <h3 className='font-bold text-xl mb-2'>Quick Links</h3>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">FAQs</li>
                            <li className="mb-2">Blogs</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/6'>
                        <h3 className='font-bold text-xl mb-2'>More</h3>
                        <ul className='md:text-[15px] text-[13px]'>
                            <li className="mb-2">Media Center</li>
                            <li className="mb-2">Dealership</li>
                            <li className="mb-2">Become a Distributor</li>
                            <li className="mb-2">Store Locator</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-2/6'>
                        <h3 className='font-bold text-xl mb-2'>Product Links</h3>
                        <ul className='flex justify-start gap-3 flex-wrap md:text-[15px] text-[13px]'>
                            {['Knight Rider', 'Roshni', 'Mini Classic Scooty', 'Firefly', 'Spark', 'Ezee'].map((item, index) => (
                                <li key={index} className="mb-2 hover:bg-white hover:text-black-50  bg-black-50 px-5 py-3 rounded-30 transition duration-300 ease-in-out">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-10'>
               <Image src={FooterLogo} alt='Benling-Pakistan'/>
                </div>
                <div className='flex md:flex-row flex-col justify-between md:w-[82%] md:mt-[-5vh] mt-10 md:py-5 gap-3'>
                    <div>
                    <p>© {currentYear} Benling Pakistan</p>
                    </div>   
                    <div className='text-[13px] md:text-[15px] flex gap-4'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditions</a>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Footer;