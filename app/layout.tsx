'use client';
import React from 'react';
import '../styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import { motion } from 'framer-motion';
import ClientWrapper from '@/utils/clientWrapper';
import SmoothScroll from '@/utils/smoothScroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Crown Benling Electric Mobility - Electrifying Dreams</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Optional: other favicon formats */}
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
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
