import React, { CSSProperties, ReactNode } from 'react';
import type { JSX } from 'react';
import { typographyVariants } from './typographyVariants';

interface TypographyProps {
  variant?: keyof typeof typographyVariants;
  color?: string;
  textCase?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  id?: string;
}

export default function Typography({
  variant = 'paragraph',
  color = 'text-black',
  textCase = '',
  className = '',
  as: Tag = 'p',
  children,
  onClick,
  style,
  id,
}: TypographyProps) {
  const variantClass = typographyVariants[variant] || '';
  const caseClass = textCase ? textCase : '';
  const allClasses = [variantClass, color, caseClass, className].filter(Boolean).join(' ');

  return (
    <Tag onClick={onClick} id={id} style={style} className={allClasses}>
      {children}
    </Tag>
  );
}