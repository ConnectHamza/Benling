"use client"
import React from 'react';
import '../styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import { motion } from "framer-motion";
import ClientWrapper from '@/utils/clientWrapper';
import SmoothScroll from '@/utils/smoothScroll';

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Crown Benling Electric Mobility - Electrifying Dreams</title>
      </head>
      <body>
        <Header />  
        <SmoothScroll>
        <ClientWrapper>
        {children}
        </ClientWrapper>      
        </SmoothScroll>
        <Footer />        
      </body>
    </html>
  );
}