import Image from 'next/image';
import React from 'react'

interface IconBoxProps {
  icon: any;
  title: string;
  text: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, text }) => {
  return (
    <div className='bg-white rounded-20 flex md:p-6 p-[6px] items-center justify-center text-left space-x-4 shadow-sm  hover:shadow-lg'>
      <div className='md:block hidden'>
        <Image className='md:block hidden' src={icon} alt='icon' />
      </div>
      <div>
        <h3 className='md:text-[26px] text-[12px] font-bold'>{title}</h3>
        <h4 className='text-red-300 font-bold md:text-[16px] text-[8px]'>{text}</h4>
      </div>
    </div>
  )
}

export default IconBox