import React, { useState } from 'react';
import ReferModal from './ReferModal '; 

const StepsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleReferClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How to Refer a Friend</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Steps */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
            <p className="text-center text-lg text-gray-700">Sign Up or Log In to your account</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
            <p className="text-center text-lg text-gray-700">Navigate to the Refer & Earn section</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
            <p className="text-center text-lg text-gray-700">Share your unique referral link with friends</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
            <p className="text-center text-lg text-gray-700">Earn rewards when your friends sign up</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300" 
            onClick={handleReferClick}>
            Refer Now
          </button>
        </div>
        <ReferModal showModal={showModal} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default StepsSection;
