import React from 'react'
import RoshniBanner from '../../public/assets/Roshni/Roshni-Banner.webp'
import Button from '@/components/Button/Button'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${RoshniBanner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-white">
                    <h2 className='heading2 font-magistral leading-[1.2]'>
                        Ride the Future
                        Today with Firefly
                    </h2>
                    <p className='font-jakarta font-normal'>Discover cutting-edge electric vehicles designed for performance, sustainability, and style.
                        </p>
                        <div className='mt-5'>
                        <Button 
                         iconName="chevron-right"
                         iconColor="black"
                         buttonText="Explore more"
                         bgColor="#ff7700"
                         hoverBgColor="#ff7700"
                         textColor="black"
                         order='order-last'
                         link='#'
                        />
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Banner