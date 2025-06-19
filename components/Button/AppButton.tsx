'use client';

import React, { FC, MouseEventHandler } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'solid' | 'outline' | 'labeled' | 'footer' | 'glow';
type IconPosition = 'left' | 'right';

interface ButtonProps {
  variant?: ButtonVariant;
  label: string;
  iconName?: keyof typeof Icons;
  iconPosition?: IconPosition;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  size?: string;
  target?: '_self' | '_blank';
  textColor?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-orange-500 text-white hover:bg-orange-600',
  outline: 'border border-black text-black dark:text-white',
  labeled: 'text-black dark:text-white',
  footer: 'bg-black text-white text-sm',
glow: ` 
  text-white font-semibold text-[16px]
  cursor-pointer text-center
  transition-all duration-400 ease-in-out
  bg-gradient-to-b from-[#FFCC6D] via-[#FF7700] to-[#FF7700]
  bg-[length:100%_300%]
  animate-gradient-y
  shadow-[0_0_16px_2px_rgba(255,153,0,0.5)]
  border-2 border-[#FFCC6D]`
}

const Button: FC<ButtonProps> = ({
  variant = 'solid',
  label,
  iconName,
  iconPosition = 'right',
  className = '',
  onClick = () => {},
  href,
  size,
  target = '_self',
  textColor = 'text-black-30',
  fullWidth = false,
  type = 'button',
  download = false,
}) => {
  const IconComponent: LucideIcon | undefined = iconName ? Icons[iconName] : undefined;

  const content = (
    <div className="inline-flex items-center gap-2">
      {iconPosition === 'left' && IconComponent && (
        <IconComponent size={20} className={textColor} />
      )}
      <span
        className={`text-[16px] leading-[20px] font-medium whitespace-nowrap ${textColor}`}
      >
        {label}
      </span>
      {iconPosition === 'right' && IconComponent && (
        <IconComponent size={20} className={textColor} />
      )}
    </div>
  );

  const combinedClass = `
    inline-flex items-center justify-center
    h-[48px] px-[24px] py-[18px]
    gap-2
    rounded-[8px]
    transition duration-200
    font-jakarta
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          download
          target={target}
          className={combinedClass}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        className={combinedClass}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
};

export default Button;
