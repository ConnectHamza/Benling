"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
        <h2 className='heading2 text-center font-magistral'>FAQS</h2>
        <div className='mt-5'>
          {data.map((faq, index) => (
            <div key={index} className='mb-5'>
              <div
                className='flex justify-between items-center font-bold md:text-[20px] text-[15px] cursor-pointer md:py-3 py-2 font-jakarta'
                onClick={() => toggleAccordion(index)}
              >
                <span className='md:text-[18px] text-[16px] hover:md:text-[20px] smooth-transition'>{faq.question}</span>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronRight} />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className='md:text-[16px] text-[13px] mt-2 py-2 font-jakarta'>
                  {faq.answer}
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