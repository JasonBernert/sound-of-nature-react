import React from 'react';
import { Sound, Buffer } from '../lib/audioHelpers';

const BirdSounds = (birds = []) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();

  const fileName = 'XC402959-180212_03 Northern Pygmy Owl Jasper.mp3';
  const url = `https://www.xeno-canto.org/sounds/uploaded/JHFICMRVUX/${fileName}`;
  const apiEndpoint = `http://localhost:9000/.netlify/functions/api/?type=audio/mp3&query=${url}`;
  // const birdMp3 = getData(url, false);

  let sounds = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A4.mp3',
    apiEndpoint
  ]

  let buffer = new Buffer(context, sounds);
  buffer.getBuffer();

  function playGuitar() {
    const guitar = new Sound(context, buffer.getSound(2));
    guitar.play();
  }

  return (
    <button 
    type="submit" 
    onClick={playGuitar} 
    >
      play
    </button>
  )
}

export default BirdSounds;
