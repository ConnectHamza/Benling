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
                    <h2 className='heading2'>
                        Ride the Future
                        Today with Firefly
                    </h2>
                    <p>Experience the future of urban mobility with the Firefly electric scooter.
                        Sleek, powerful, and eco-friendly, it’s designed for effortless rides and
                        standout style.
                        </p>
                        <div className='mt-5'>
                        <Button 
                         iconName="chevron-right"
                         iconColor="black"
                         buttonText="Shop Now"
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