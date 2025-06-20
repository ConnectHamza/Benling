import Typography from '@/components/GradientText/Typography'
import React from 'react'
import PerformanceCard from './performance-card'
import { performanceData } from './data'

const SeriesComparison = () => {
  return (
    <div className='w-full bg-white flex flex-col items-center justify-center md:py-40 py-20 px-5 md:px-6'>
        <div className="lg:w-lg">
                  <div className="mb-2" data-aos="zoom-out">
                    <Typography as="h2" color='text-black' variant='h2-bold-magistral'>
                    Performance Series Comparison
                    </Typography>
                  </div>
                  <div data-aos="zoom-in">
                  <Typography variant='subtext-regular-jakarta' className="mb-6 text-black">
                  Compare top models from the Crown Benling Performance Series side by side. Explore Price, Battery info, range, speed, and motor coming with Lithium-LiFePO₄ technology.
                  </Typography>
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-10'>
      {performanceData.map((item, index) => (
        <PerformanceCard
          key={index}
          img={item.img}
          logo={item.logo}
          PKR={item.PKR}
          range={item.range}
          speed={item.speed}
          motor={item.motor}
          battery={item.battery}
          exploreLink={item.exploreLink} // Pass the explore
        />
      ))}
    </div>
        </div>
    </div>
  )
}

export default SeriesComparison