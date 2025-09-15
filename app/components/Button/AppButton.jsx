'use client';

import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

const variantClasses = {
  solid: 'bg-orange-500 text-white hover:bg-orange-600',
  outline: `
    border border-black text-black 
    hover:bg-white hover:text-black 
    dark:border-white dark:text-white 
    dark:hover:bg-white dark:hover:text-black
  `,
  labeled: 'text-black dark:text-white',
  footer: 'bg-black text-white text-sm',
};

const Button = ({
  variant = 'solid',
  label,
  iconName = null,
  iconPosition = 'right',
  className = '',
  onClick = () => { },
  href = null,
  target = '_self',
  textColor = '', // Optional text/icon color override
  fullWidth = false,
  type = '',
  download = false

}) => {
  const IconComponent = iconName && Icons[iconName] ? Icons[iconName] : null;

  const content = (
    <div className="inline-flex items-center gap-2">
      {iconPosition === 'left' && IconComponent && (
        <IconComponent size={20} className={textColor || ''} />
      )}
      <span
        className={`text-[16px] leading-[20px] font-medium whitespace-nowrap ${textColor || ''}`}
      >
        {label}
      </span>
      {iconPosition === 'right' && IconComponent && (
        <IconComponent size={20} className={textColor || ''} />
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
      // Render regular anchor with download attribute
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
            <Link href={href} target={target} className={combinedClass}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
};

export default Button
