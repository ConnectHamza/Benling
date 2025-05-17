import React from 'react'
import PowerfulIMG from '../../public/assets/Firefly/Benefits/Powerful-Motor.webp'
import ComfortableIMG from '../../public/assets/Firefly/Benefits/Comfortable-Build.webp'
import GrapheneIMG from '../../public/assets/Firefly/Benefits/Graphene-Battery.webp'
import DigitalIMG from '../../public/assets/Firefly/Benefits/Digital-Display.webp'
import Typography from '@/components/GradientText/Typography'

const Benefits = () => {
    return (
        <div className="w-full flex justify-center px-5 md:pt-40 pt-20 flex-col">
            <div className="md:w-lg text-center self-center">
                <Typography as="p" variant='h2-bold-magistral'>
                    Performance, Comfort & Control
                </Typography>
                <Typography variant='subtext-regular-jakarta' as='p'>
                    Experience Firefly's advanced features, including long-range battery power, a smooth motor, a digital display, and an ergonomic design for effortless rides.
                </Typography>
            </div>
            <div className="md:w-lg mt-10 flex flex-col self-center gap-10">
                <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5' style={{ backgroundImage: `url(${PowerfulIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <Typography as="p" className='mb-2' variant='h2-bold-magistral'>
                        Powerful Motor
                    </Typography>
                    <Typography variant='subtext-regular-jakarta' as='p'>
                        The 1200W Brushless Motor delivers smooth acceleration and powerful climbing capability.
                    </Typography>
                </div>
                <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5 self-end' style={{ backgroundImage: `url(${ComfortableIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <Typography as="p" className='mb-2' variant='h2-bold-magistral'>
                        Comfortable Build
                    </Typography>
                    <Typography variant='subtext-regular-jakarta' as='p'>
                        Firefly’s ergonomic seating offers superior comfort and support, ensuring effortless and enjoyable rides every time.
                    </Typography>
                </div>
                <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5' style={{ backgroundImage: `url(${GrapheneIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <Typography as="p" className='mb-2' variant='h2-bold-magistral'>
                        Graphene Battery
                    </Typography>
                    <Typography variant='subtext-regular-jakarta' as='p'>
                        Experience superior efficiency and durability with the 60V, 35Ah graphene lithium battery, offering up to 105 km range on a single charge.
                    </Typography>
                </div>
                <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5 self-end' style={{ backgroundImage: `url(${DigitalIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <Typography as="p" className='mb-2' variant='h2-bold-magistral'>
                        Digital Display
                    </Typography>
                    <Typography variant='subtext-regular-jakarta' as='p'>
                        Stay informed with Firefly’s digital display, offering real-time updates on battery, speed, and more for a seamless riding experience.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Benefits