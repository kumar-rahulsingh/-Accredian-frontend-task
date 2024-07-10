// FAQ.js
import React from 'react';

const FAQ = ({ question, answer }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default FAQ;
