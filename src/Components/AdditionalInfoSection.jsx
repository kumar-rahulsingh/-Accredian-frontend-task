import React, { useState } from 'react';
import ProgramListCard from './ProgramsListCard ';
import BonusTableCard from './BonusTableCard ';
import FAQ from './Faq';
import StepsSection from './StepsSection'; 
import ReferModal from './ReferModal '; 
import Footer from './Footer';

const AdditionalInfoSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const programs = [
    {
      name: 'Program A',
      subPrograms: ['Sub A1', 'Sub A2', 'Sub A3'],
      priceTable: { referralBonus: '5000', refereeBonus: '250' }
    },
    {
      name: 'Program B',
      subPrograms: ['Sub B1', 'Sub B2', 'Sub B3'],
      priceTable: { referralBonus: '4000', refereeBonus: '2000' }
    },
    {
      name: 'Program C',
      subPrograms: ['Sub C1', 'Sub C2', 'Sub C3'],
      priceTable: { referralBonus: '1000', refereeBonus: '500' }
    },
    // Add more programs as needed
  ];

  const faqs = [
    { question: 'Question 1?', answer: 'Answer to question 1.' },
    { question: 'Question 2?', answer: 'Answer to question 2.' },
    { question: 'Question 3?', answer: 'Answer to question 3.' },
    // Add more FAQs as needed
  ];

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
    <StepsSection onReferClick={openPopup}  />
    <div className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Program List Card */}
         
          <ProgramListCard programs={programs} onSelectProgram={handleSelectProgram} />

          {/* Bonus Table Card */}
          <BonusTableCard selectedProgram={selectedProgram} />
        </div>

        {/* Refer Now Button */}
        <div className="mt-8 text-center">
          <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Refer Now
          </button>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Refer Now Button below FAQ */}
        <div className="mt-8 text-center">
          <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Refer Now
          </button>
        </div>
        {/* Popup Form */}
        <ReferModal showModal={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdditionalInfoSection;
