
const FeatureCard = ({
    backgroundImage,
    isTextBlock = false,
    textBlock = {},
    imageSrc,
    heading,
    description,
}) => {
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
  
    return (
        <div className="mb-5">
            <div
                className="rounded-xl relative flex flex-col justify-center min-h-[180px] md:min-h-[55vh] p-4 item-center overflow-hidden sm:min-h-[35vh]"
                style={{
                    background: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {isTextBlock && (
                    <div className="flex flex-col h-full justify-center items-center ">
                        <div className="text-white flex flex-row items-end gap-2">
                            <span className="text-5xl md:text-6xl font-bold leading-none">{textBlock.number}</span>
                            <div className="flex flex-col leading-none item-center">
                                <span className="text-lg md:text-xl font-semibold">{textBlock.line1}</span>
                                <span className="text-lg md:text-xl font-semibold">{textBlock.line2}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-2">
                <h4 className="text-white font-magistral font-semi-bold text-2xl">{heading}</h4>
                <p className="text-white font-medium font-jakarta text-xs md:text-sm">{description}</p>
            </div>
        </div>

    );
};

export default FeatureCard;