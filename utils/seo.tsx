'use client';

import { NextSeo } from 'next-seo';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function Seo({ title, description, canonical }: SeoProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        site_name: 'Crown Benling',
      }}
      twitter={{
        handle: '@crownbenling',
        site: '@crownbenling',
        cardType: 'summary_large_image',
      }}
    />
  );
}
