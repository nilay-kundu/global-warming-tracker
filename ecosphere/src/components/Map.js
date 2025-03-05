// src/components/Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesGeoJson from './countries.geo.json';

const Map = ({ onCountrySelect }) => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [countryColors, setCountryColors] = useState({});

  useEffect(() => {
    setGeoJsonData(countriesGeoJson);

    // Generate and store colors for each country only once
    const colors = {};
    countriesGeoJson.features.forEach(feature => {
      colors[feature.properties.name] = getRandomColor();
    });
    setCountryColors(colors);
  }, []);

  const getRandomColor = () => {
    const blue = Math.floor(Math.random() * 200);  
    const green = Math.floor(Math.random() * 200); 
    const red = Math.floor(Math.random() * 30); 
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const style = (feature) => {
    return {
      fillColor: countryColors[feature.properties.name] || '#000',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  // Bind country name and click event
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.name;
    if (countryName) {
      layer.bindTooltip(countryName, { permanent: false, direction: 'center' });
      layer.on('click', () => onCountrySelect(countryName));
    }
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
      minZoom={2.5}
      maxBounds={[
        [90, -180],
        [-90, 180],
      ]}
      maxBoundsViscosity={0.2}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
      {geoJsonData && <GeoJSON data={geoJsonData} style={style} onEachFeature={onEachFeature} />}
    </MapContainer>
  );
};

export default Map;
