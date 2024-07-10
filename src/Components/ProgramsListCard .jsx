import React from 'react';

const ProgramListCard = ({ programs, onSelectProgram }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 md:w-1/3 md:mb-0 md:mr-4">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">List of Programs</h3>
        <div className="text-gray-700">
          {programs.map((program, index) => (
            <div key={index} className="cursor-pointer mb-4" onClick={() => onSelectProgram(program)}>
              <div className="flex items-center">
               
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{program.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramListCard;
