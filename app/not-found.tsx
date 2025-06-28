import React from 'react'
import NotFoundIMG from '../public/assets/404-page/Crown-Electric-Mobility-404.webp'
import Typography from '@/components/GradientText/Typography'
import AppButton from '@/components/Button/AppButton'

const NotFound = () => {
    return (
        <div className='h-[90vh] w-full flex flex-col gap-4 justify-center items-center text-center px-4'
            style={{
                backgroundImage: `url(${NotFoundIMG.src})`,
                backgroundSize: 'cover',
            }}>
            <Typography as="h1" variant='h1-bold-magistral' className='text-white'>Oops! Page Not Found.</Typography>
            <Typography as="p" variant='body-light-jakarta' className='text-white'>Please check the URL or return to the homepage.</Typography>
            <AppButton
                size="medium"
                variant="outline"
                label="Go Home"
                iconName="ArrowUpRight"
                iconPosition="right"
                href={"/"}
                textColor='text-white'
                className='border-white'
            />
        </div>
    )
}

export default NotFound