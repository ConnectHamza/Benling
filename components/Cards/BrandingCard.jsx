// components/Card.tsx
import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div
            className="flex items-center gap-4 p-4 min-h-[150px] w-full rounded-xl"
            style={{ backgroundColor: 'rgba(238, 241, 255, 0.4)' }}
        >
            {/* Icon */}
            <div className="flex-shrink-0">
                <Image src={imageSrc} alt={title} width={48} height={48} />
            </div>

            {/* Title on top, description below */}
            <div className="flex flex-col text-gray-800">
                <h3 className="text-lg font-bold font-magistral self-start">{title}</h3>
                <p className="text-sm text-gray-600 mt-1 font-jakarta font-normal">{description}</p>
            </div>
        </div>
    );
};

export default Card;
