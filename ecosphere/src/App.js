// src/App.js
import React, { useState } from 'react';
import Map from './components/Map';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('None');

  return (
    <div>
      <h1>Country selected: {selectedCountry}</h1>
      <Map onCountrySelect={setSelectedCountry} />
    </div>
  );
};

export default App;
