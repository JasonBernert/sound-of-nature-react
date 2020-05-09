const BirdText = (birds = []) => {
  function describeBirds(birds) {
    const birdRecordings = birds.recordings || [];
    const uniqueBirds = [];
    const usableBirds = [];
    let birdDescription = '';
  
    if (birdRecordings.length > 0) {
      // Find unique birds
      birdRecordings.forEach((bird) => {
        if (!uniqueBirds.includes(bird.en) && (bird.en).includes !== 'unknown') {
          uniqueBirds.push(bird.en);
          usableBirds.push(bird);
        }
      });
  
      const birdList = usableBirds.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      if (birdList.length === 3) {
        birdDescription = `You hear the ${birdList[0].en}, ${birdList[1].en} and ${birdList[2].en}.`;
      } else if (birdList.length === 2) {
        birdDescription = `You hear the ${birdList[0].en} and ${birdList[1].en}.`;
      } else if (birdList.length === 1) {
        birdDescription = `You hear the ${birdList[0].en}.`;
      }
    }
  
    return birdDescription;
  }

  return (
    describeBirds(birds.birds)
  )
}

BirdText.defaultProps = {
  birds: {}
};

export default BirdText;