'use client';
import { useState } from 'react';

export default function FaqList({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {faqs.map((item, index) => (
        <div 
          key={index} 
          className="border-b border-border cursor-pointer transition-colors duration-200 last:border-b-0 group"
          onClick={() => toggleFaq(index)}
        >
          <div className="flex justify-between items-center py-[20px] gap-[20px]">
            <span className="font-sans text-base font-semibold leading-[1.4]">{item.question}</span>
            <span className="font-heading text-[24px] font-bold text-accent shrink-0 w-[32px] h-[32px] flex items-center justify-center transition-transform duration-300">{openFaq === index ? '−' : '+'}</span>
          </div>
          <div className={`overflow-hidden transition-all duration-400 ease-in-out px-0 ${openFaq === index ? 'max-h-[300px] pb-[20px]' : 'max-h-0'}`}>
            <p className="font-sans text-[14px] leading-[1.7] m-0 opacity-[0.85]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
