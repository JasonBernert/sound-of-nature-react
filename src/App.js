import React, { useState, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BirdText from './components/birdText';
import birdSounds from './components/BirdSounds';
import getData from './dataHelper';

import './App.css';
import './styles/map.css';

function App() {
  const [state, setState] = useState({
    birdData: {},
    coordinates: [46.10370875598026, -117.61962890625001],
    listening: false,
    loading: false
  });

  const map = useRef(null); 

  const handleClick = () => {
    if (state.listening){
      setState({
      ...state,
      listening: false,
      birdData: {}
    })
    } else {
      const {lat, lng} = map.current.leafletElement.getCenter();

      setState({
        ...state,
        loading: true,
        coordinates: [lat, lng],
      })

      const makeSearchBox = ([lat,lng]) => `${lat - 0.5},${lng - 0.5},${lat + 0.5},${lng + 0.5}`;
      const url = `https://www.xeno-canto.org/api/2/recordings?query=box:${makeSearchBox(state.coordinates)}`;

      getData(url).then((data) => {        
        setState({
          ...state,
          coordinates: [lat, lng],
          birdData: data,
          listening: true,
          loading: false,
        })

        birdSounds();
      })
    }
  };

  return (
    <>
      <main>
        {!state.listening ? 
          (
            <h1>The sounds of&nbsp;nature</h1>
          ) : (
            <h2>
              <BirdText birds={state.birdData}/>
            </h2>
          )
        }
        <button 
          type="submit" 
          onClick={handleClick} 
          className={state.loading ? "loading" : undefined}
        >
          {state.listening ? "Explore" : "Listen"}
        </button>
      </main>
      <Map
        center={state.coordinates}
        zoom={9}
        ref={map}
        doubleClickZoom={false}
        keyboard={false}
        scrollWheelZoom={false}
        touchZoom={false}
        dragging={!state.listening}
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
