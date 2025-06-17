// app/crown-benling-fairy/page.tsx
import Fairy from './Fairy';

export const metadata = {
  title: 'Crown Electric - Fairy',
  description: 'Explore the Crown Benling Fairy — built for modern urban life with speed, range, and style.',
  metadataBase: new URL('https://crownelectricmobility.com'),
  alternates: {
    canonical: '/crown-benling-fairy',
  },
  openGraph: {
    title: 'Crown Electric - Fairy',
    description: 'Explore the Crown Benling Fairy — built for modern urban life with speed, range, and style.',
    url: 'https://crownelectricmobility.com/crown-benling-fairy',
    siteName: 'Crown Electric Mobility',
    type: 'website',
  },
};

export default function FairyPage() {
  return <Fairy />;
}
