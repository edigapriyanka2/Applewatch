import { useState } from 'react';
const BandCarousel = ({ bands, selectedBand, onSelectBand }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < bands.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <button className="absolute left-0" onClick={handlePrev}>Prev</button>
      <div className="flex overflow-hidden w-full">
        {bands.map((band, index) => (
          <div
            key={band.id}
            className={`flex-shrink-0 w-full ${index === currentIndex ? 'block' : 'hidden'}`}
            onClick={() => onSelectBand(band.id)}
          >
            <img src={band.image} alt={band.name} className="h-20 w-20 object-cover mx-auto" />
            <p className="text-center mt-2">{band.name}</p>
          </div>
        ))}
      </div>
      <button className="absolute right-0" onClick={handleNext}>Next</button>
    </div>
  );
};
