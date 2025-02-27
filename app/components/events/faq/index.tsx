'use client'
import React, { useState } from 'react';
import { FAQType } from '@/app/lib/definitions';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Info from './info';

const FAQItem: React.FC<FAQType> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item pl-4 py-2">
      <div className="question" onClick={toggleAnswer}>
        {question}{" "}{isOpen ? <ExpandLess /> : <ExpandMore />}
      </div>
      {isOpen && <div className="answer mt-2" onClick={toggleAnswer}>{answer}</div>}
    </div>
  );
};

const FAQ = ({ faqs }: { faqs: FAQType[] }) => {
  return (
    <div className='py-16 container mx-auto gap-x-10 grid md:grid-cols-2 '>
      <Info />
      <div className="faq-container mx-4">
        {Array.isArray(faqs) && faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className="border-2 border-spacing-1 border-solid border-foreground rounded-lg mb-3 py-4">
            <FAQItem  question={faq.question} answer={faq.answer} />
            </div>
        ))
        ) : (
          <p>No FAQs available.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;