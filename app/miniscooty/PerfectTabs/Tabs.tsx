import React, { useEffect, useState } from 'react';
import RoshniWhite from '../../../public/assets/Roshni/PerfectSection/White.webp';
import RoshniBlue from '../../../public/assets/Roshni/PerfectSection/Blue.webp';
import RoshniSilver from '../../../public/assets/Roshni/PerfectSection/Silver.webp';
import RoshniBlack from '../../../public/assets/Roshni/PerfectSection/Black.webp';
import RoshniRed from '../../../public/assets/Roshni/PerfectSection/Red.webp';
import RoshniProLogo from '../../../public/assets/Roshni/Icons/Roshni-Pro.svg';
import RoshniPlusLogo from '../../../public/assets/Roshni/Icons/Roshni-Plus.svg';
import RoshniLogo from '../../../public/assets/Roshni/Icons/Roshni.svg';
import Image from 'next/image';

const Tabs = () => {
    const [selectedImage, setSelectedImage] = useState(RoshniWhite);
    const [fadeClass, setFadeClass] = useState('');


    useEffect(() => {

        setFadeClass('fade-in');

        const timeoutId = setTimeout(() => {
            setFadeClass('');
        }, 500);


        return () => clearTimeout(timeoutId);
    }, [selectedImage]);


  return (

    <div className='block'>
    <div className={`mt-10 ${fadeClass}`}>
        <Image alt='Carousel' src={selectedImage} className='w-[100%]' />
        <Image src={RoshniProLogo} alt='Roshni Pro' className='w-[100%]'/>
    </div>

    <div className='flex md:gap-2 gap-4 justify-center'>
        <div>
            <button
                className={`bg-[#EEEFF2] py-3  rounded-xl md:px-3 px-3 transition-all duration-300`}
                onClick={() => setSelectedImage(RoshniWhite)}
            >

            </button>
            <p className='text-[13px] mt-2'>White</p>
        </div>
        <div>
            <button
                className={`bg-[#0020B0] py-3 rounded-xl md:px-3 px-3 transition-all duration-300`}
                onClick={() => setSelectedImage(RoshniBlue)}
            >
            </button>
            <p className='text-[13px] mt-2'>Blue</p>
        </div>
        <div>
            <button
                className={`bg-[#9197A5] py-3 rounded-xl md:px-3 px-3 transition-all duration-300`}
                onClick={() => setSelectedImage(RoshniSilver)}
            >
            </button>
            <p className='text-[13px] mt-2'>Silver</p>
        </div>
        <div>
            <button
                className={`bg-[#282A2F] py-3 rounded-xl md:px-3 px-3 transition-all duration-300`}
                onClick={() => setSelectedImage(RoshniBlack)}
            >
            </button>
            <p className='text-[13px] mt-2'>Black</p>
        </div>
        <div>
            <button
                className={`bg-[#D93149] py-3 rounded-xl md:px-3 px-3 transition-all duration-300`}
                onClick={() => setSelectedImage(RoshniRed)}
            >
            </button>
            <p className='text-[13px] mt-2'>Red</p>
        </div>
    </div></div>
  )
}

export default Tabs