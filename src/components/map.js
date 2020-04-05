import React, { useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/map.css';

const BaseMap = () => {
  // const map = useRef(null);
  // const [lat, lng] = map.current.props.center;

  return (
    <Map
      center={[39, -98]}
      zoom={4}
      // ref={map}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
    </Map>
  );
};


export default BaseMap;
