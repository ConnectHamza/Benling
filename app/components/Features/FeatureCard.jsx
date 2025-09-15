import Typography from "../GradientText/Typography";

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
            <div className="mt-5">
                <Typography variant="h3-medium-magistral" className="text-white">{heading}</Typography>
                <Typography variant="subtext-regular-jakarta" className="text-white">{description}</Typography>
            </div>
        </div>

    );
};

export default FeatureCard;