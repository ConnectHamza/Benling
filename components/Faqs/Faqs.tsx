"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Typography from '../GradientText/Typography';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqsProps {
  data: FaqItem[];
}

const Faqs: React.FC<FaqsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full bg-gray-100 flex justify-center px-5 py-10 md:py-[100px]'>
      <div className="w-md">
        <Typography variant='h2-medium-magistral' className='text-center'>FAQS</Typography>
        <div className='mt-5'>
          {data.map((faq, index) => (
            <div key={index} className='mb-5'>
              <div
                className='flex justify-between items-center font-bold md:text-[20px] text-[15px] cursor-pointer md:py-3 py-2 font-jakarta'
                onClick={() => toggleAccordion(index)}
              >
                <Typography as='span' variant='body-semibold-jakarta' className='smooth-transition'>{faq.question}</Typography>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronRight} />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className=' mt-2 py-2'>
                  <Typography variant='subtext-regular-jakarta'>
                  {faq.answer}

                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;