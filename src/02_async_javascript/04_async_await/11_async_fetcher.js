// /*
// Problem: Implement an Asynchronous Data Fetcher
// Create a function called fetchData that takes a URL and an
// optional delay in milliseconds. The function should return a Promise
// that fetches data from the URL after the given delay and parses it as JSON.
// Use async/await and the native fetch API.

// Requirements:
// - the function should have a default delay of 0 milliseconds if not provided
// - Use setTimeout to implement the delay
// - use async/await and fetch to get the data from the URL and parse it as JSON.
// */
async function fetchData(url, delay = 0) {
  // Implement this function

  return new Promise((resolve, reject) => {
    try {
      setTimeout(async () => {
        const response = await fetch(url);
        const jsonResponse = await response.json();

        resolve(jsonResponse);
      }, delay);
    } catch (err) {
      reject("error");
    }
  });
}

module.exports = fetchData;

/**
 * Create a function makeMultiplier that takes a single parameter multiplier.
 * The function should return another function that takes a single parameter x,
 * and returns the result of x multiplied by multiplier.
 *
 * @param {number} multiplier - The number to multiply by.
 * @returns {Function} - A function that multiplies its argument by multiplier.
 */
function makeMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}
