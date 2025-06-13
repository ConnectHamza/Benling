import React from 'react';
import Typography from "../GradientText/Typography";


const StatCard = ({
  value,
  label,
  textColor = 'text-black',
  bgColor = 'bg-white/40',
  titleVariant,
  subtitleVariant,
  imageAlt,
}) => {
  return (
    <div
    data-aos="zoom-in"
      className={`rounded-xl px-4 py-3 w-full ${bgColor} ${textColor} text-center shadow-md`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <Typography as="h3" variant={titleVariant}>{value}</Typography>
      <Typography variant={subtitleVariant}>{label}</Typography>
    </div>
  );
};

const Featured = ({
  stats,
  imageSrc,      // desktop image object (e.g. import desktop from "../img.jpg")
  mobileImageSrc, // mobile image object (e.g. import mobile from "../img-mobile.jpg")
  textColor,
  cardBgColor,
  titleVariant,
  subtitleVariant,
  itemsPosition,
  imageAlt,
}) => {
  return (
    <>
      <style jsx>{`
        .responsive-bg {
          background-image: url(${mobileImageSrc.src});
        }

        @media (min-width: 768px) {
          .responsive-bg {
            background-image: url(${imageSrc.src});                     
          }
        }
      `}</style>

      <div
        className={`w-full md:h-screen h-[90vh] bg-cover bg-center flex justify-center pt-10 px-4 md:py-10 py-5 responsive-bg md:items-end ${itemsPosition ? itemsPosition : 'items-end'} `}
        style={{
          backgroundSize: 'cover'
        }}
      >
        <div className="flex md:flex-nowrap flex-wrap gap-y-4 md:gap-4 w-lg justify-center">
          {stats.map(({ value, label }, idx) => (
            <div key={idx} className="w-1/2 md:w-1/4 px-2">
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
    </>
  );
};

export default Featured;
