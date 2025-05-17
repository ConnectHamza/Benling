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
        <div className={`w-full ${bgColor} ${textColor} md:pt-[50px] pt-[50px] px-5 flex justify-center`}>
            <div className='w-lg'>
                <div className='heading2 text-center font-magistral font-[500px]'>
                    <Typography as='p' variant='h3-medium-magistral'>
                        {featureTitle}
                    </Typography>
                </div>
                <div className='text-center'>
                    <Typography variant='subtext-regular-jakarta'>
                        {featureText}
                    </Typography>
                </div>

                <div className='flex gap-5 flex-wrap mt-5'>
                    {featureItems.map((feature, index) => (
                        <div key={index} className='md:w-[48%] reveal-block mb-10 '>
                            <Image className='rounded-10 overflow-hidden mb-4' src={feature.img} alt={feature.alt} />
                            <Typography as='p' variant='h3-medium-magistral'>
                                {feature.title}
                            </Typography>
                            <Typography variant='subtext-regular-jakarta'>
                                {feature.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;