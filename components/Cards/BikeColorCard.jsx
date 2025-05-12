import Image from "next/image";

const BikeColorCard = ({ imageSrc, gradient, title }) => {
  return (
    <div className="flex flex-col items-center mb-20 w-full sm:w-1/2 lg:w-1/3 px-2">
      {/* Capsule Background with Bike */}
      <div className="relative w-full max-w-[550px] h-[240px] flex justify-center items-end">
        <div
          className="w-[80%] h-[140px] rounded-full"
          style={{ background: gradient }}
        ></div>

        {/* Bike Image */}
        <div className="absolute -top-8 transition-transform duration-500 hover:scale-110 hover:-rotate-2">
          <Image
            src={imageSrc}
            alt={title}
            width={380}
            height={220}
            className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Bike Title */}
      <h4 className="mt-6 font-jakarta text-white font-semibold text-lg text-center">
        {title}
      </h4>
    </div>
  );
};

export default BikeColorCard;
