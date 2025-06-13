import Image from "next/image";
import Typography from "../GradientText/Typography";

const BikeColorCard = ({ imageSrc, gradient, title }) => {
  return (
    <div className="w-full md:w-[45%] px-2 flex flex-col items-center ">
      {/* Container for Capsule and Image */}
      <div className="relative w-full h-[220px] md:h-[450px] flex justify-center items-end overflow-visible mt-20">
        
        {/* Capsule */}
        <div
          className="w-[100%] h-[180px] md:h-[300px] rounded-full z-0"
          style={{ background: gradient }}
        ></div>

        {/* Image Positioned Above Capsule */}
        <div className="absolute -top-7 md:top-5 lg:top-5 z-10" data-aos="zoom-in">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={320}
            className="w-[320px] md:w-[550px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Title */}
      <h4 className="mt-6 text-center" data-aos="zoom-out">
        <Typography as="h3" variant="h4-medium-magistral">
        {title}

        </Typography>
      </h4>
    </div>
  );
};

export default BikeColorCard;
