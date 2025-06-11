// app/layout.tsx
import '../styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import ClientWrapper from '@/utils/clientWrapper';
import SmoothScroll from '@/utils/smoothScroll';
import Script from 'next/script';

export const metadata = {
  title: 'Crown Benling Electric Mobility - Electrifying Dreams',
  description: 'Leading the future of electric mobility with Crown Benling.',
  metadataBase: new URL('https://crownelectricmobility.com'),
  alternates: {
    canonical: '/',
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XKWM0HCQX3"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKWM0HCQX3');
          `}
        </Script>
      </head>
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
