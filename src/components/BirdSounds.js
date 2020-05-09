import getData from '../dataHelper';

const birdSounds = (birds = []) => {
  let birdBuffer = null;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();

  const fileName = 'XC402959-180212_03%20Northern%20Pygmy%20Owl%20Jasper.mp3';
  const url = `https://www.xeno-canto.org/sounds/uploaded/JHFICMRVUX/${fileName}`;
  const birdMp3 = getData(url, false);

  // audioBuffer not working?  load mp3?
  // birdMp3.then(data => {
  //   context.decodeAudioData(
  //     Buffer.from(data), 
  //     buffer => birdBuffer = buffer
  //   );
  // });
}

export default birdSounds;
