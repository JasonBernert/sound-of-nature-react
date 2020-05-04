import React, { useState, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BirdText from './components/birdText';
import getData from './dataHelper';

import './App.css';
import './styles/map.css';

function App() {
  const [data, setData] = useState({});
  const [coordinates, setCoordinates] = useState([46.10370875598026, -117.61962890625001]);
  const [listening, setListening] = useState(false);

  const map = useRef(null); 

  const handleClick = () => {
    const {lat, lng} = map.current.leafletElement.getCenter();
    setCoordinates([lat, lng]);
    setListening(true)
    getData(coordinates).then((data) => setData(data))
  };

  return (
    <>
      <main>
        {!listening ? 
          (
            <div>
              <h1>The sounds of&nbsp;nature</h1>
              <button type="submit" onClick={handleClick}>Listen</button>
            </div>
          ) : (
            <h2>
              <BirdText birds={data}/>
            </h2>
          )
        }
      </main>
      <Map
        center={coordinates}
        zoom={7}
        ref={map}
        doubleClickZoom={false}
        keyboard={false}
        scrollWheelZoom={false}
        touchZoom={false}
        dragging={!listening}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          detectRetina="true"
        />
      </Map>
      <footer>
        ©{new Date().getFullYear()}, Made under quarantine by <a href="https://www.jasonbernert.com/">Jason Bernert</a>
      </footer>
    </>
  );
}

export default App;
