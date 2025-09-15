import Image from "next/image";
import Typography from "../GradientText/Typography";

const BikeColorCard = ({ imageSrc, gradient, title }) => {
  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 flex flex-col items-center mb-20">
      {/* Container for Capsule and Image */}
      <div className="relative w-full max-w-[550px] h-[250px] md:h-[300px] lg:h-[340px] flex justify-center items-end overflow-visible">
        
        {/* Capsule */}
        <div
          className="w-[80%] h-[120px] md:h-[140px] lg:h-[160px] rounded-full z-0"
          style={{ background: gradient }}
        ></div>

        {/* Image Positioned Above Capsule */}
        <div className="absolute -top-7 md:top-5 lg:top-5 z-10">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={320}
            className="w-[300px] md:w-[300px] lg:w-[300px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Title */}
      <h4 className="mt-6 text-center">
        <Typography variant="h4-medium-magistral">
        {title}

        </Typography>
      </h4>
    </div>
  );
};

export default BikeColorCard;
