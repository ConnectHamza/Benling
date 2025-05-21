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
      className={`rounded-xl px-4 py-3 w-full ${bgColor} ${textColor} text-center shadow-md`}
      style={{ backdropFilter: 'blur(10px)' }}
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
  subtitleVariant,
  mblImage
}) => {
  return (
    <div className="w-full flex justify-center relative" style={{ height: '100vh' }}>
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover hidden md:block "
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={mblImage}
          alt={imageAlt}
          className="w-full object-cover md:hidden"
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="absolute bottom-[2vh] mdt:bottom-55 w-full flex justify-center px-4">
        <div className="flex gap-4 w-full">
          {stats.map(({ value, label }, idx) => (
            <div
              key={idx}
              className="w-1/2 mdt:w-1/4 px-2 flex "
            >
              <StatCard
                value={value}
                label={label}
                textColor={textColor}
                bgColor={cardBgColor}
                titleVariant={titleVariant}
                subtitleVariant={subtitleVariant}
              />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Featured;
