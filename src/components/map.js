import React, { useState, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/map.css';

const BaseMap = () => {
  const [coordinates, setCoordinates] = useState([39, -98]);
  const map = useRef(null);

  const handleMoveEnd = () => {
    setCoordinates(map.current.leafletElement.getCenter());
  }

  return (
    <Map
      center={coordinates}
      zoom={4}
      ref={map}
      onMoveEnd={handleMoveEnd}
      doubleClickZoom={false}
      keyboard={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
    </Map>
  );
};


export default BaseMap;
