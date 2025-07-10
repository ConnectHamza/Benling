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
                    <Typography as='h1' variant='h1-bold-magistral'>Crown Electric Mobility - Pakistan’s #1 Choice for Electric Bikes</Typography>
                    <p className="text-lg md:text-xl">
                       From the house of Crown Group, Crown Electric Mobility—available in 26+ cities including Karachi, Lahore, and Multan. We offer trusted after-sales service through certified centres. Backed by skilled technicians and prompt customer support, we ensure a smooth ownership journey from the first ride onward.
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