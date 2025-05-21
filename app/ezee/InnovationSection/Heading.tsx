"use client"
import GradientText from '@/app/components/GradientText/gradient-heading'
import { motion } from 'framer-motion';
import React from 'react'

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const InnovationSection = () => {
const heading = 'Where Safety Meets Innovation';
const colors = [
    { color: '#121212', percentage: 60 },
    { color: '#c51f26', percentage: 80 },
    { color: '#121212', percentage: 100 },        
  ];

  return (
         
    <div className="md:w-lg flex  justify-center">
      <motion.div
       variants={textVariants}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.2 }}
      >
    <GradientText heading={heading} colors={colors} />
    </motion.div>
    </div>
    

  )
}

export default InnovationSection