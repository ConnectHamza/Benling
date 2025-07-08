import React from 'react'
import Typography from '@/components/GradientText/Typography'
import AppButton from '@/components/Button/AppButton'


const Hero = () => {
    return (
        <div className="relative w-full h-[100vh]">
            {/* Video Background */}
            <video
                src="/assets/Home/Header/Crown-Electric-Mobility-Pakistans-First-Choise-For-Electric-Bikes.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Text Content Overlay */}
            <div className='bg-black-100/100'>
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 text-white bg-black bg-opacity-30"
            style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(20, 20, 20, 0.6) 60%, rgb(20, 20, 20, 0.8) 80%, rgb(0, 0, 0, 0.8) 100%'
            }}>
                <div className="text-center space-y-4 max-w-full">
                    <Typography as='h1' variant='h1-bold-magistral'>Advanced Electric Bikes Built for Speed & Reliability</Typography>
                    <p className="text-lg md:text-xl">
                       Experience the future of urban commuting with Crown’s high-performance electric bikes — built for Pakistani roads and ready for every ride.
                    </p>
                    <AppButton
                        size="medium"
                        variant="outline"
                        label="Explore Our Models"
                        iconName="ArrowUpRight"
                        iconPosition="right"
                        href={"/#our-models"}
                        textColor='text-white'
                        className='border-white'
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero