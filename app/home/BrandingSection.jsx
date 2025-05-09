// components/CardGrid.tsx
import Card from '@/components/Cards/BrandingCard';
import World from '../../public/assets/Home/Branding/world.png';
import ElectricBike from '../../public/assets/Home/Branding/electric_bike.png';
import Carbon from '../../public/assets/Home/Branding/carbon.png';
import Forest from '../../public/assets/Home/Branding/forest.png';

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
        <section className="bg-white rounded-xl p-6 md:p-10 text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold font-magistral text-black-800 mb-2">
                Inspiring a Greener Tomorrow
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-3xl mx-auto font-jakarta font-normal">
                Crown Bending Electric Mobility is committed to sustainability, innovation, and impact-driven growth.
            </p>

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
        </section>
    );
};

export default BrandingSection;
