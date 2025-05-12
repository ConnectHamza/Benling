import React from 'react'
import PowerfulIMG from '../../public/assets/Firefly/Benefits/Powerful-Motor.webp'
import ComfortableIMG from '../../public/assets/Firefly/Benefits/Comfortable-Build.webp'
import GrapheneIMG from '../../public/assets/Firefly/Benefits/Graphene-Battery.webp'
import DigitalIMG from '../../public/assets/Firefly/Benefits/Digital-Display.webp'

const Benefits = () => {
  return (
    <div className="w-full flex justify-center px-5 md:pt-40 pt-20 flex-col">
        <div className="md:w-lg text-center self-center">
        <h2  className='heading2 font-semibold font-magistral'>Performance, Comfort & Control</h2>
        <p className='font-jakarta font-normal'>Experience Firefly's advanced features, including long-range battery power, a smooth motor, a digital display, and an ergonomic design for effortless rides.</p>
    </div>
    <div className="md:w-lg mt-10 flex flex-col self-center gap-10">
        <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5' style={{backgroundImage: `url(${PowerfulIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h3 className='heading4 font-semibold font-magistral'>Powerful Motor</h3>
            <p className='font-jakarta font-normal'>The 1200W Brushless Motor delivers smooth acceleration and powerful climbing capability.</p>
        </div>
        <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5 self-end' style={{backgroundImage: `url(${ComfortableIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h3 className='heading4 font-semibold font-magistral'>Comfortable Build</h3>
            <p className='font-jakarta font-normal'>Firefly’s ergonomic seating offers superior comfort and support, ensuring effortless and enjoyable rides every time.</p>
        </div>
        <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5' style={{backgroundImage: `url(${GrapheneIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h3 className='heading4 font-semibold font-magistral'>Graphene Battery</h3>
            <p className='font-jakarta font-normal'>Experience superior efficiency and durability with the 60V, 35Ah graphene lithium battery, offering up to 105 km range on a single charge.</p>
        </div>
        <div className='md:w-[60%] md:h-[70vh] h-[50vh] rounded-10 text-white md:p-10 p-5 self-end' style={{backgroundImage: `url(${DigitalIMG.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h3 className='heading4 font-semibold font-magistral'>Digital Display</h3>
            <p className='font-jakarta font-normal'>Stay informed with Firefly’s digital display, offering real-time updates on battery, speed, and more for a seamless riding experience.</p>
        </div>
    </div>
    </div>
  )
}

export default Benefits