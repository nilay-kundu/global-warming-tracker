import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';

const App = () => {
  const [showMap, setShowMap] = useState(false);

  return showMap ? <MapScreen /> : <HomeScreen onStart={() => setShowMap(true)} />;
};

export default App;
