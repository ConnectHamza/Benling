import React from 'react'
import RoshniBanner from '../../public/assets/Roshni/Roshni-Banner.webp'
import Button from '@/components/Button/Button'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    // return (
    //     <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
    //         style={{
    //             backgroundImage: `url(${RoshniBanner.src})`,
    //             backgroundSize: 'cover',
    //             backgroundPosition: 'center center'
    //         }}
    //     >
    //         <div className="w-lg">
    //             <div className="md:w-[50%] w-[65%] text-white">
    //                 <h2 className='heading2 font-magistral leading-[1]'>
    //                     Roshni Brighten Every Journey
    //                 </h2>
    //                 <p className='font-jakarta font-normal'>Experience the future of urban mobility with the Roshni electric scooter. Stylish, efficient, and eco-friendly, it’s crafted for smooth rides and a distinctive, modern look.
    //                 </p>
    //                 <div className='mt-5'>
    //                     <Button
    //                         iconName="chevron-right"
    //                         iconColor="black"
    //                         buttonText="Shop Now"
    //                         bgColor="#ff7700"
    //                         hoverBgColor="#ff7700"
    //                         textColor="black"
    //                         order='order-last'
    //                         link='#'
    //                     />
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <HeroSection
            title="Roshni Brighten Every Journey"
            subtitle="Experience the future of urban mobility with the Roshni electric scooter. Stylish, efficient, and eco-friendly, it’s crafted for smooth rides and a distinctive, modern look."
            buttonText="Explore More"
            imageSrc={RoshniBanner.src}
        />
    )
}

export default Banner