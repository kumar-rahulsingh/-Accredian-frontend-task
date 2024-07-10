import React, { useState } from 'react';
import HeroSection from './Components/HeroSection';
import ReferModal from './Components/ReferModal ';
import Navbar from './Components/Nvbar';
import StepsSection from './Components/StepsSection';
import AdditionalInfoSection from './Components/AdditionalInfoSection';


const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleReferClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <HeroSection onReferClick={handleReferClick} />
      {/* <StepsSection/> */}
      <AdditionalInfoSection/>
        {/* <Faq/> */}
      <ReferModal showModal={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
