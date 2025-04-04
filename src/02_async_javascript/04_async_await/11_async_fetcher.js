/*
Problem: Implement an Asynchronous Data Fetcher
Create a function called fetchData that takes a URL and an 
optional delay in milliseconds. The function should return a Promise 
that fetches data from the URL after the given delay and parses it as JSON. 
Use async/await and the native fetch API.

Requirements:
- the function should have a default delay of 0 milliseconds if not provided
- Use setTimeout to implement the delay
- use async/await and fetch to get the data from the URL and parse it as JSON.
*/
async function fetchData(url, delay = 0) {
  // Implement this function

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      resolve(jsonResponse);
    }, delay);
  });
}

module.exports = fetchData;
