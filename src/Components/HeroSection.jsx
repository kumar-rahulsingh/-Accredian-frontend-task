import React from "react";
import heroImage from "../assets/Images/heroImage.webp"; // Make sure to replace this with the actual path to your image

const HeroSection = ({ onReferClick }) => {
  return (
    <div className="bg-gray-200 py-20 flex justify-center items-center">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden max-w-4xl flex">
        <img
          src={heroImage}
          alt="Refer and Earn"
          className="w-1/2 h-full object-cover"
        />
        <div className="p-8 flex flex-col items-center justify-center w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Refer & Earn
          </h1>
          <p className="text-center text-lg mb-6 text-gray-700">
            Earn rewards by referring a course to your friends.
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            onClick={onReferClick}
          >
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
