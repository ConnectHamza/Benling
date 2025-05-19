import Image from 'next/image'
import React from 'react'
import Typography from "../GradientText/Typography"

const StatCard = ({
  value,
  label,
  textColor = 'text-black',
  bgColor = 'bg-white/40',
  titleVariant,
  subtitleVariant,
}) => {
  return (
    <div
      className={`rounded-xl gap-9 px-4 py-3 min-w-[140px] ${bgColor} ${textColor} text-center shadow-md`}
      style={{ backdropFilter: 'blur(10px)' }}  // Add this inline style to force blur effect
    >
      <Typography variant={titleVariant}>{value}</Typography>
      <Typography variant={subtitleVariant}>{label}</Typography>
    </div>
  );
};


const Featured = ({
  stats,
  imageSrc,
  imageAlt,
  textColor,
  cardBgColor,
  titleVariant,
  subtitleVariant
}) => {
  return (
    <div className="w-full flex justify-center relative" style={{ height: '100vh' }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-full object-cover"
        priority
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute bottom-[8vh] md:bottom-55 w-full flex justify-center px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-9 max-w-7xl w-full">
          {stats.map(({ value, label }, idx) => (
            <StatCard
              key={idx}
              value={value}
              label={label}
              textColor={textColor}
              bgColor={cardBgColor}
              titleVariant={titleVariant}
              subtitleVariant={subtitleVariant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
