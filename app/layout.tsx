"use client"
import React from 'react';
import '../styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Benling Pakistan</title>
      </head>
      <body>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
        <Header />
        {children}
        <Footer />
        </motion.div>
      </body>
    </html>
  );
}