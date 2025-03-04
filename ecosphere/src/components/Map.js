// src/components/Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesGeoJson from './countries.geo.json';

const Map = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    setGeoJsonData(countriesGeoJson);
  }, []);

  // apply the random color
  const style = (feature) => {
    return {
      fillColor: getRandomColor(),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  // blue-green random color generation
  const getRandomColor = () => {
    const blue = Math.floor(Math.random() * 200);  
    const green = Math.floor(Math.random() * 200); 
    const red = Math.floor(Math.random() * 30); 
    return `rgb(${red}, ${green}, ${blue})`;
  };

  // bind country name to map
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.name;

    if (countryName) {
      layer.bindTooltip(countryName, {
        permanent: false,
        direction: 'center',
        className: 'country-tooltip', 
      });
    }
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
      minZoom={2.5} // minimum zoom level
      maxBounds={[
        [90, -180], 
        [-90, 180], 
      ]} // limit scrollig into repeat/uncolored maps 
      maxBoundsViscosity={0.2} 
    >
      {/* TileLayer is the base map */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      {/* Adding the GeoJSON data for country borders */}
      {geoJsonData && (
        <GeoJSON 
          data={geoJsonData} 
          style={style} 
          onEachFeature={onEachFeature} 
        />
      )}
    </MapContainer>
  );
};

export default Map;
