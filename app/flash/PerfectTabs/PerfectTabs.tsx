import React from 'react'
import TabComp from './TabComp'

const PerfectTabs = () => {
  return (
    <div className='w-full flex justify-center md:py-[0px] px-5 py-10'>
      <div className="w-lg flex flex-col items-center justify-center">
        <h2 className='heading2'>Choose Your Perfect Roshni</h2>
        <p>Compare the unique features of each variant to find the one that fits your style and needs.</p>
        <TabComp />
    </div>
    </div>
  )
}

export default PerfectTabs