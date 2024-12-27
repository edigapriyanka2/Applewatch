import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
import { useState } from 'react';
const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  const cases = [
    { id: 1, name: 'Aluminum', image: 'aluminum.jpg', price: 0 },
    { id: 2, name: 'Titanium', image: 'titanium.jpg', price: 100 },
  ];

  const sizes = [42, 46];

  const bands = [
    { id: 1, name: 'Solo Loop', image: 'sololoop.jpg', price: 50 },
    { id: 2, name: 'Braided Solo Loop', image: 'braided.jpg', price: 75 },
  ];

  const basePrice = 399;
  const casePrice = cases.find((c) => c.id === selectedCase)?.price || 0;
  const bandPrice = bands.find((b) => b.id === selectedBand)?.price || 0;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Apple Watch Customizer</h1>
      <CaseGrid cases={cases} selectedCase={selectedCase} onSelectCase={setSelectedCase} />
      <SizeToggle sizes={sizes} selectedSize={selectedSize} onSelectSize={setSelectedSize} />
      <BandCarousel bands={bands} selectedBand={selectedBand} onSelectBand={setSelectedBand} />
      <PriceDisplay basePrice={basePrice} casePrice={casePrice} bandPrice={bandPrice} />
    </div>
  );
};


export default App
