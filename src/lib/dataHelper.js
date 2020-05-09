const getData = (url, json = true) => {     
  const promise = new Promise(((resolve) => {
    fetch(`http://localhost:9000/.netlify/functions/api/?query=${url}`)
      .then((response) => json ? response.json() : response)
      .then((data) => {
        resolve(data);
      }).catch((err) => {  
        console.error(err);   
      });
  }));
  return promise;
}

export default getData;