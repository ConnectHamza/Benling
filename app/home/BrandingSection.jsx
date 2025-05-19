// components/CardGrid.tsx
import Card from '@/components/Cards/BrandingCard';
import World from '../../public/assets/Home/Branding/world.png';
import ElectricBike from '../../public/assets/Home/Branding/electric_bike.png';
import Carbon from '../../public/assets/Home/Branding/carbon.png';
import Forest from '../../public/assets/Home/Branding/forest.png';
import Typography from '@/components/GradientText/Typography';

const cardData = [
    {
        imageSrc: World.src,
        title: '1,050,000+ KM',
        description: 'Total Distance Driven across Pakistan',
    },
    {
        imageSrc: ElectricBike.src,
        title: '24,000+',
        description: 'Today’s Active Riders',
    },
    {
        imageSrc: Carbon.src,
        title: '231,000 KG',
        description: 'CO₂ Emissions Saved',
    },
    {
        imageSrc: Forest.src,
        title: '11,000+',
        description: 'Trees Equivalent Planted',
    },
];

const BrandingSection = () => {
    return (
        <section className="bg-white rounded-xl py-6 md:py-10">
            <div className="max-w-[1300px] mx-auto px-4 md:px-6 text-center">
                {/* Heading */}
                <Typography variant='h2-medium-magistral' className="mb-2">
                    Inspiring a Greener Tomorrow
                </Typography>
                <Typography variant='subtext-regular-jakarta' className='text-[#0A0A0A]'>
                    Crown Benling Electric Mobility is committed to sustainability, innovation, and impact-driven growth.
                </Typography>
                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    {cardData.map((card, idx) => (
                        <Card
                            key={idx}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
    
};

export default BrandingSection;
