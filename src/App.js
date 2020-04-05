import React from 'react';
import './App.css';
import BaseMap from './components/map';

function App() {
  return (
    <>
    <main>
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
