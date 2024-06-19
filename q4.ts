//Question # 4
/*Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch*/

function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Randomly determine if the promise should be resolved or rejected
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data fetch failed!");
      }
    }, 1000);
  });
}

// Call the function and handle the response
fetchWithError()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
