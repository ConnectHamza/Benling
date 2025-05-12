import React from 'react';

interface Specification {
  title:  any;
  value:  any;
}

interface Specification2 {

  title2: any;
  value2: any;
}

interface SpecificationsProps {
  data: Array<Specification>;
  data2: Array<Specification2>;
}

const Specifications: React.FC<SpecificationsProps> = ({ data, data2 }) => {
  
  // const half = Math.ceil(data.length / 2);
  const firstColumn = data;
  const secondColumn = data2;

  return (
    <div className='w-full flex justify-center md:py-[150px] px-5 py-10'>
      <div className="w-lg">
        <h2 className='heading2 font-magistral'>Technical Specifications</h2>
        <div className="flex md:flex-row flex-col justify-between mt-10">
          <div className='md:w-[40%] flex flex-col gap-5'>
            {firstColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <span className=' md:text-[20px] text-[20px] text-nowrap font-jakarta font-bold'>{item.title}</span>
                <hr className='border-black-70 w-[100%] ' />
                <span className='md:text-[20px] text-[15px] text-nowrap font-jakarta font-normal'>{item.value}</span>
              </div>
            ))}
          </div>
          <div className='md:w-[40%] flex flex-col gap-5 mt-5 md:mt-0'>
            {secondColumn.map((item, index) => (
             <div key={index} className='flex items-center gap-5'>
             <span className=' md:text-[20px] text-[20px] text-nowrap font-jakarta font-bold'>{item.title2}</span>
             <hr className='border-black-70 w-[100%] ' />
             <span className='md:text-[20px] text-[15px] text-nowrap font-jakarta font-normal'>{item.value2}</span>
           </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;