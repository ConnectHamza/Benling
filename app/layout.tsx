// app/layout.tsx
import '../styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import ClientWrapper from '@/utils/clientWrapper';
import SmoothScroll from '@/utils/smoothScroll';

export const metadata = {
  title: 'Crown Benling Electric Mobility - Electrifying Dreams',
  description: 'Leading the future of electric mobility with Crown Benling.',
  metadataBase: new URL('https://crownelectricmobility.com'), // base URL for relative URLs
  alternates: {
    canonical: '/', // the canonical path relative to metadataBase
  },
  openGraph: {
    title: 'Crown Benling Electric Mobility - Electrifying Dreams',
    description: 'Leading the future of electric mobility with Crown Benling.',
    url: 'https://crownelectricmobility.com/',
    siteName: 'Crown Electric Mobility',
    type: 'website',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothScroll>
          <ClientWrapper>{children}</ClientWrapper>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
