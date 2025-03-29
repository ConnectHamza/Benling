import Image from 'next/image';
import React from 'react';

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

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ featureItems, FeatureHeader}) => {
    const {featureTitle, featureText, bgColor, textColor} = FeatureHeader;
    return (
        <div className={`w-full ${bgColor} ${textColor} md:py-[150px] py-10 px-5 flex justify-center`}>
            <div className='w-lg'>
                <h2 className='heading2 text-center'>{featureTitle}</h2>
                <p className='text-center'>{featureText}</p>
                <div className='flex gap-5 flex-wrap mt-5'>
                    {featureItems.map((feature, index) => (
                        <div key={index} className='md:w-[48%] reveal-block'>
                            <Image src={feature.img} alt={feature.alt} />
                            <h4 className='heading4 mt-3'>{feature.title}</h4>
                            <p >{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;