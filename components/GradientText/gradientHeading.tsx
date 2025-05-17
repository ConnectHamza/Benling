import React from "react";
import Typography from "./Typography";

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

  return <Typography variant="h3-bold-magistral" style={gradientStyle}>{heading}</Typography>;
};

export default GradientText;
