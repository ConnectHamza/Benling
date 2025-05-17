// components/Card.tsx
import Image from 'next/image';
import Typography from '../GradientText/Typography';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div
            className="flex items-center gap-4 p-8 min-h-[150px] w-full rounded-xl"
            style={{ backgroundColor: 'rgba(238, 241, 255, 0.4)' }}
        >
            {/* Icon */}
            <div className="flex-shrink-0">
                <Image src={imageSrc} alt={title} width={48} height={48} />
            </div>

            {/* Title on top, description below */}
            <div className="flex flex-col text-gray-800">
                <Typography variant='h3-medium-magistral' className="self-start text-[#0A0A0A]">{title}</Typography>
                <Typography variant='body-regular-jakarta' className="text-[#0A0A0A]">{description}</Typography>
            </div>
        </div>
    );
};

export default Card;
