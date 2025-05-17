import React from 'react';
import Typography from '../../components/GradientText/Typography';


const variantGroups = [
  {
    title: 'H1',
    variants: [
      'h1-light-magistral',
      'h1-regular-magistral',
      'h1-medium-magistral',
      'h1-bold-magistral',
      'h1-light-jakarta',
      'h1-regular-jakarta',
      'h1-medium-jakarta',
      'h1-semibold-jakarta',
      'h1-bold-jakarta',
    ],
  },
  {
    title: 'H2',
    variants: [
      'h2-light-magistral',
      'h2-regular-magistral',
      'h2-medium-magistral',
      'h2-bold-magistral',
      'h2-light-jakarta',
      'h2-regular-jakarta',
      'h2-medium-jakarta',
      'h2-semibold-jakarta',
      'h2-bold-jakarta',
    ],
  },
  {
    title: 'H3',
    variants: [
      'h3-light-magistral',
      'h3-regular-magistral',
      'h3-medium-magistral',
      'h3-bold-magistral',
      'h3-light-jakarta',
      'h3-regular-jakarta',
      'h3-medium-jakarta',
      'h3-semibold-jakarta',
      'h3-bold-jakarta',
    ],
  },
  {
    title: 'H4',
    variants: [
      'h4-light-magistral',
      'h4-regular-magistral',
      'h4-medium-magistral',
      'h4-bold-magistral',
      'h4-light-jakarta',
      'h4-regular-jakarta',
      'h4-medium-jakarta',
      'h4-semibold-jakarta',
      'h4-bold-jakarta',
    ],
  },
  {
    title: 'H5',
    variants: [
      'h5-light-magistral',
      'h5-regular-magistral',
      'h5-medium-magistral',
      'h5-bold-magistral',
      'h5-light-jakarta',
      'h5-regular-jakarta',
      'h5-medium-jakarta',
      'h5-semibold-jakarta',
      'h5-bold-jakarta',
    ],
  },
  {
    title: 'H6',
    variants: [
      'h6-light-magistral',
      'h6-regular-magistral',
      'h6-medium-magistral',
      'h6-bold-magistral',
      'h6-light-jakarta',
      'h6-regular-jakarta',
      'h6-medium-jakarta',
      'h6-semibold-jakarta',
      'h6-bold-jakarta',
    ],
  },
  {
    title: 'Body',
    variants: [
      'body-light-magistral',
      'body-regular-magistral',
      'body-medium-magistral',
      'body-bold-magistral',
      'body-light-jakarta',
      'body-regular-jakarta',
      'body-medium-jakarta',
      'body-semibold-jakarta',
      'body-bold-jakarta',
    ],
  },
  {
    title: 'Subtext',
    variants: [
      'subtext-light-magistral',
      'subtext-regular-magistral',
      'subtext-medium-magistral',
      'subtext-bold-magistral',
      'subtext-light-jakarta',
      'subtext-regular-jakarta',
      'subtext-medium-jakarta',
      'subtext-semibold-jakarta',
      'subtext-bold-jakarta',
    ],
  },
  {
    title: 'Extra Subtext',
    variants: [
      'extra-subtext-light-magistral',
      'extra-subtext-regular-magistral',
      'extra-subtext-medium-magistral',
      'extra-subtext-bold-magistral',
      'extra-subtext-light-jakarta',
      'extra-subtext-regular-jakarta',
      'extra-subtext-medium-jakarta',
      'extra-subtext-semibold-jakarta',
      'extra-subtext-bold-jakarta',
    ],
  },
];


export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-[100px]">
      <Typography variant="h1-bold-jakarta" as="h1" className="mb-8">
        Typography Variants Showcase
      </Typography>
      <div className="space-y-12">
        {variantGroups.map((group) => (
          <div key={group.title}>
            <Typography variant="h2-bold-jakarta" as="h2" className="mb-4">
              {group.title}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.variants.map((variant) => (
                <div key={variant} className="flex flex-col">
                  <Typography variant={variant}>
                    Example Font Guide
                  </Typography>
                  <span className="text-xs text-gray-500">{variant}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

