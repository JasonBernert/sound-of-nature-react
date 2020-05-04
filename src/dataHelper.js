const makeSearchBox = ([lat,lng]) => `${lat - 0.5},${lng - 0.5},${lat + 0.5},${lng + 0.5}`;

const getData = (coordinates) => {     
  const promise = new Promise(((resolve) => {
    fetch(`http://localhost:9000/.netlify/functions/api/?query=box:${makeSearchBox(coordinates)}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      }).catch((err) => {  
        console.error(err);   
      });
  }));
  return promise;
}

export default getData;