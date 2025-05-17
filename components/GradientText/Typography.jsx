import React from 'react';
import { typographyVariants } from './typographyVariants';

export default function Typography({ variant = 'paragraph', color = 'text-black', textCase = '', className = '', as: Tag = 'div', children,onClick }) {
  const variantClass = typographyVariants[variant] || '';
  const caseClass = textCase ? textCase : '';
  const allClasses = [variantClass, color, caseClass, className].filter(Boolean).join(' ');

  return <Tag onClick={onClick} className={allClasses}>{children}</Tag>;
}
