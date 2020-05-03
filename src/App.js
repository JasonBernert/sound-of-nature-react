import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import BirdText from './components/birdText';
import BaseMap from './components/map';

function App() {
  const [data, setData] = useState({});

  function getData() {    
    const promise = new Promise(((resolve) => {
      fetch(`http://localhost:9000/.netlify/functions/api/?query=box:38.527718840211605,-77.1845703125,39.527718840211605,-76.1845703125`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        }).catch((err) => {
          console.error(err);
        });
    }));
    return promise;
  }

  function describeBirds(birds) {
    setData(birds)
  }

  function handleClick () {
    getData().then(describeBirds)
  }

  return (
    <>
      <main>
        <h1>The sounds of&nbsp;nature</h1>
        {/* <TransitionGroup component={'section'}>
          <CSSTransition classNames={"fade"} timeout={500}>

          </CSSTransition>
        </TransitionGroup> */}
        <BirdText birds={data}/>
        <button type="submit" onClick={handleClick}>Listen</button>
        <p>Drag to explore</p>
      </main>
      <BaseMap/>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Made under quarantine by
        {' '}
        <a href="https://www.jasonbernert.com/">Jason Bernert</a>
      </footer>
    </>
  );
}

export default App;
