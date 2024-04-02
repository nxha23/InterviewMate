import React, { useState } from 'react';
import "../CSS/Accordian.css";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={onClick}>
        <span>{isOpen ? '-' : '+'}</span> <strong>{title}</strong>
      </div>
      <div className="accordion-content">{isOpen && children}</div>
    </div>
  );
};

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = index => {
    // If the current index is already open, close it. Otherwise, open the new index.
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: index === openIndex,
          onClick: () => handleAccordionClick(index),
        })
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
