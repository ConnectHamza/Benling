import Image from 'next/image'
import React from 'react'
import IntelligentIMG from '../../public/assets/Roshni/Battery-Section.webp'

const Intelligent = () => {
  return (
    <div className='w-full flex justify-center  relative'>
        <Image src={IntelligentIMG} alt='Intelligent IMG'/>
        <div className="md:w-lg absolute md:bottom-20 bottom-10">
        <div className="text-center  text-white  px-5 md:px-0">
            <h3 className='heading3'>Intelligent Battery Management System</h3>
            <p>Roshni features an intelligent Battery Management System (BMS) with 40+ protections, enhancing battery life and ensuring top-tier safety.</p>
        </div>
        </div>
    </div>
  )
}

export default Intelligent