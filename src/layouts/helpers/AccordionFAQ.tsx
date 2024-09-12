import React, { useState } from 'react';
import AccordionArrowSVG from './svg/AccordionArrowSVG';

const AccordionFAQ = ({ data }: { data: { question: string; answer: string }[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {data?.map((faq: any, index: number) => (
        <div className="break-inside-avoid" key={index}>
          <div className={`accordion shadow ${activeIndex === index ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => handleToggle(index)}>
              {faq.question}
              <AccordionArrowSVG />
            </button>
            <div
              className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionFAQ;
