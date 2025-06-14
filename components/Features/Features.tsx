import Image from 'next/image';
import React from 'react';
import Typography from '../GradientText/Typography';

type Feature = {
    img: any;
    alt: string;
    title: string;
    description: string;
}

type FeaturesSectionProps = {
    featureItems: Array<Feature>;
    FeatureHeader: FeatureHeader;

}

type FeatureHeader = {
    featureTitle: string;
    featureText: string;
    bgColor: any;
    textColor: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ featureItems, FeatureHeader }) => {
    const { featureTitle, featureText, bgColor, textColor } = FeatureHeader;
    return (
        <div className={`w-full ${bgColor} ${textColor} md:py-40 py-20 px-5 flex justify-center`}>
            <div className='w-lg'>
                <div className='heading2 text-center font-magistral font-[500px]'  data-aos="zoom-out">
                    <Typography as='h2' variant='h2-medium-magistral'>
                        {featureTitle}
                    </Typography>
                </div>
                <div className='text-center my-4' data-aos="zoom-in">
                    <Typography variant='subtext-regular-jakarta'>
                        {featureText}
                    </Typography>
                </div>

                <div className='flex gap-5 flex-wrap md:mt-10 mt-5'>
                    {featureItems.map((feature, index) => (
                        <div key={index} className='md:w-[48%] reveal-block md:mb-10 mb-5'>
                            <Image className='rounded-10 overflow-hidden mb-5' src={feature.img} alt={feature.alt} height={1000} width={1000} data-aos="zoom-in-up"/>
                            <div data-aos="fade-up"> 
                            <Typography as='h3' variant='h3-medium-magistral' className='mb-3'>
                                {feature.title}
                            </Typography>
                            </div>
                            <div data-aos="fade-up">
                            <Typography variant='subtext-regular-jakarta'>
                                {feature.description}
                            </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;