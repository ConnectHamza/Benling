"use client"
import IconBox from '@/components/IconBox/iconBox';
import React from 'react';
import speedIcon from '../../public/assets/Ezee/icons/speed 3.svg'
import chargeIcon from '../../public/assets/Ezee/icons/Charging 3.svg';
import angleIcon from '../../public/assets/Ezee/icons/Angle 3.svg';
import chargingIcon from '../../public/assets/Ezee/icons/Charging Time 3.svg';
import Image from 'next/image';
import PowerfulImg from '../../public/assets/Ezee/Powerful-performance.webp';
import GradientText from '@/components/GradientText/gradientHeading';
import VibrationImg from '../../public/assets/Ezee/No-Vibrations.webp';
import Ezeebg from '../../public/assets/Ezee/Ezee-bg.webp';
import GraphineImg from '../../public/assets/Ezee/Graphene-Battery.webp';
import { motion } from 'framer-motion';
import Typography from '@/components/GradientText/Typography';

const PowerfulSection = () => {
  const heading1 = 'Powerful Performance';
  const heading2 = 'Graphene \n Battery';
  const colors1 = [
    { color: '#121212', percentage: 60 },
    { color: '#c51f26', percentage: 80 },
    { color: '#121212', percentage: 100 },
  ];
  const colors2 = [
    { color: '#121212', percentage: 30 },
    { color: '#22d328', percentage: 70 },
    { color: '#121212', percentage: 100 },
  ];

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    hiddenTop: { opacity: 0, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };


  return (
    <div className='w-full px-4 py-20 bg-gray-10 flex justify-center md:py-[150px]'>
      <div className="w-lg flex flex-col">
        <div className='md:flex'>
          <div className="md:w-[25%] w-[100%] h-[3%] md:flex hidden md:gap-10 gap-2 flex-col md:mt-20">
            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >

              <IconBox icon={speedIcon} title='35-40km/h' text='Top Speed' />
            </motion.div>
            <motion.div

              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <IconBox icon={chargeIcon} title='50-55Km' text='One Charge ' />
            </motion.div>
          </div>
          <div className='md:w-[60%] w-[100%] z-10 md:mb-[115px]'>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image alt='Powerful Performance' className='z-2' src={PowerfulImg} />
            </motion.div>
          </div>
          <div className="md:w-[25%] w-[100%] md:flex hidden md:gap-10 gap-2 flex-col md:mt-20">
            <motion.div

              variants={cardVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <IconBox icon={angleIcon} title='≤15°' text='Climbing Angle' />
            </motion.div>
            <motion.div

              variants={cardVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <IconBox icon={chargingIcon} title='6-8 Hours' text='Charging Time' />
            </motion.div>
          </div>
          <div className="md:w-[20%] w-[100%] md:hidden flex md:gap-10 gap-4 flex-col md:mt-20">
            <div className='flex gap-4'>
              <div className='w-[100%]'>
                <IconBox icon={speedIcon} title='35-40km/h' text='Top Speed' />
              </div>
              <div className='w-[100%]'>
                <IconBox icon={chargeIcon} title='50-55km' text='One Charge ' />
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-[100%]'>
                <IconBox icon={angleIcon} title='≤15°' text='Climbing Angle' />
              </div>
              <div className='w-[100%]'>
                <IconBox icon={chargingIcon} title='6-8 Hours' text='Charging Time' />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className=" bg-white shadow-md rounded-30 md:py-20 py-10 px-5 text-center mt-5 md:mt-[-15vh]"
          variants={cardVariants}
          initial="hiddenTop"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <GradientText heading={heading1} colors={colors1} />
          <Typography variant='body-regular-jakarta' className='md:mt-3'>The 650W brushless motor provides consistent power, enabling smooth rides even
            on inclines up to 15°.</Typography>
        </motion.div>

        <div className="flex md:gap-8 gap-5 md:mt-4">
          <motion.div
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=" w-[50%] bg-white shadow-md rounded-30 md:py-20 py-10 px-5 text-center mt-5 items-center flex justify-center">
            <Typography variant='h2-bold-magistral'>No Vibrations</Typography>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=" w-[50%] bg-white shadow-md rounded-30 text-center mt-5 md:h-[60vh] h-[25vh]" style={{
              backgroundImage: `url(${VibrationImg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }}>

          </motion.div>
        </div>

        <div className="flex md:mt-4">

          <motion.div
            className=" w-[100%] flex items-center justify-end bg-gray-100 shadow-md rounded-30 text-center mt-5 md:h-[60vh] h-[25vh]" style={{
              backgroundImage: `url(${Ezeebg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }}
            variants={cardVariants}
            initial="hiddenTop"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-[50%]">
              <Typography variant='h2-bold-magistral'>
                No Exhaust, <Typography variant='h2-bold-magistral'>No
                  <Typography variant='h2-bold-magistral' className='text-[#F31C09]'>Heat</Typography>
                </Typography>
              </Typography>
            </div>
          </motion.div>
        </div>
        <div className="flex md:gap-8 gap-5 md:mt-4">

          <motion.div
            className=" md:w-[40%] w-[50%] bg-white shadow-md rounded-30 md:py-20 py-10 px-5 text-center mt-5 items-center flex justify-center"
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <GradientText heading={heading2} colors={colors2} />
          </motion.div>
          <motion.div className="md:w-[60%] w-[50%] bg-white shadow-md rounded-30 text-center mt-5 md:h-[60vh] h-[25vh]" style={{
            backgroundImage: `url(${GraphineImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default PowerfulSection