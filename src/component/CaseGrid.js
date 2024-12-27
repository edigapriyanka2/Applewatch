import React from 'react';
const CaseGrid = ({ cases, selectedCase, onSelectCase }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cases.map((watchCase) => (
        <div
          key={watchCase.id}
          className={`p-4 border rounded ${selectedCase === watchCase.id ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => onSelectCase(watchCase.id)}
        >
          <img src={watchCase.image} alt={watchCase.name} className="h-20 w-20 object-cover mx-auto" />
          <p className="text-center mt-2">{watchCase.name}</p>
        </div>
      ))}
    </div>
  );
};
