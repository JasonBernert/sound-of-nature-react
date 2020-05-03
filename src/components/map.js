import React, { useState, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/map.css';

const BaseMap = () => {
  const [coordinates, setCoordinates] = useState([39, -98]);
  const map = useRef(null);

  const handleMoveEnd = () => {
    const {lat, lng} = map.current.leafletElement.getCenter();
    setCoordinates([lat, lng]);
  }

  return (
    <Map
      center={coordinates}
      zoom={7}
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
