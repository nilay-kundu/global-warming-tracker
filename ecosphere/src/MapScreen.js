import React, { useState } from 'react';
import Map from './components/Map';

const MapScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <h1>{selectedCountry ? `Country selected: ${selectedCountry}` : "Please select a country"}</h1>
      <Map onCountrySelect={setSelectedCountry} />
    </div>
  );
};

export default MapScreen;
