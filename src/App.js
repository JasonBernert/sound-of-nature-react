import React from 'react';
import './App.css';
import BaseMap from './components/map';

function App() {
  function getData() {    
    const promise = new Promise(((resolve) => {
      fetch(`/.netlify/functions/api/?query=box:38.527718840211605,-77.1845703125,39.527718840211605,-76.1845703125`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        }).catch((err) => {
          console.error(err);
        });
    }));
    return promise;
  }
  
  return (
    <>
    <main>
      <h1>What does it sounds like outside?</h1>
      <button type="submit" onClick={getData}>Explore</button>
      <BaseMap/>
    </main>
    <footer>
      ©
      {' '}
      {new Date().getFullYear()}
      , Made in quarantine by
      {' '}
      <a href="https://www.jasonbernert.com/">Jason Bernert</a>
    </footer>
    </>
  );
}

export default App;
