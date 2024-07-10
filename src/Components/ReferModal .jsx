import React, { useState } from 'react';
import axios from 'axios';

const ReferModal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const referralData = { referrerName, referrerEmail, refereeName, refereeEmail };
    try {
      const response = await axios.post('http://localhost:3001/api/referrals', referralData);
      console.log('Referral submitted successfully:', response.data);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              className="bg-gray-300 px-4 py-2 rounded-md mr-2" 
              onClick={onClose}>
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferModal;
