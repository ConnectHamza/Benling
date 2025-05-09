
const FeatureCard = ({
    backgroundImage,
    isTextBlock = false,
    textBlock = {},
    imageSrc,
    heading,
    description,
}) => {
    return (
        <div className="mb-5">
            <div
                className="rounded-xl overflow-hidden relative flex flex-col justify-center min-h-[180px] md:min-h-[50vh] p-4 item-center overflow-hidden"
                style={{
                    background: `url(${backgroundImage}) no-repeat center center`,
                    backgroundSize: "cover",
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
                <h4 className="text-white text-base md:text-lg font-semibold">{heading}</h4>
                <p className="text-gray-200 text-xs md:text-sm">{description}</p>
            </div>
        </div>

    );
};

export default FeatureCard;