"use client"
import Image from 'next/image';
import { IconBoxes } from './data';
import Tabs from './Tabs';

const TabComp = () => {

    return (
        <div className='w-full px-5 md:py-0 flex justify-center'>
            <div className="md:w-lg justify-center flex flex-col text-center">
                <div className='md:flex'>
                    {IconBoxes.map((row, rowIndex) => (
                        <div key={rowIndex} className='block'>
                            <Tabs />
                            <div className='mt-8'>
                            {row.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex justify-center">
                                    <div className='flex '>
                                        <Image src={item.icon} alt={item.heading} />
                                        <div className='flex flex-col items-center justify-center'>
                                            <h4 className='text-[30px] font-bold'>{item.heading}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TabComp