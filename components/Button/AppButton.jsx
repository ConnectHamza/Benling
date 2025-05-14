import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";

const baseStyles =
    "font-jakarta font-regular inline-flex items-center justify-center gap-2 transition duration-200 rounded-sm";

const sizeClasses = {
    large: "text-base px-6 py-3",
    medium: "text-sm px-5 py-2.5",
    small: "text-sm px-4 py-2",
};

const variantClasses = {
    solid: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-black text-black hover:bg-gray-100",
    labeled: "text-black",
    footer: "bg-black text-white px-4 py-2 text-sm",
};

const Button = ({
    size = "medium",
    variant = "solid",
    label,
    iconName = null,
    iconPosition = "right",
    className = "",
    onClick = () => { },
    href = null, // if present, render as a Link
    target = "_self",
}) => {
    const sizeClass = sizeClasses[size];
    const variantClass = variantClasses[variant];
    const IconComponent = iconName && Icons[iconName] ? Icons[iconName] : null;

    const content = (
        <>
            {iconPosition === "left" && IconComponent && <IconComponent size={16} />}
            <span>{label}</span>
            {iconPosition === "right" && IconComponent && <IconComponent size={16} />}
        </>
    );

    const combinedClass = `${baseStyles} ${sizeClass} ${variantClass} ${className}`;

    // Render as <Link> if href exists
    if (href) {
        return (
            <Link href={href} target={target} passHref legacyBehavior>
                <a className={combinedClass}>{content}</a>
            </Link>
        );
    }

    // Otherwise, render as a <button>
    return (
        <button onClick={onClick} className={combinedClass}>
            {content}
        </button>
    );
};

export default Button;
