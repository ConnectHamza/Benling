import React from "react";

interface ColorStop {
  color: string;
  percentage: number;
}

interface GradientTextProps {
  heading: string;
  colors: ColorStop[];
}

const GradientText: React.FC<GradientTextProps> = ({ heading, colors }) => {
  const gradientColors = colors
    .map((colorStop) => `${colorStop.color} ${colorStop.percentage}%`)
    .join(", ");

  const gradientStyle = {
    background: `linear-gradient(90deg, ${gradientColors})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  return <h2 className="heading2 font-magistral font-[700]" style={gradientStyle}>{heading}</h2>;
};

export default GradientText;
