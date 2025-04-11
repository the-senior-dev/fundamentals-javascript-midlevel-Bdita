// TODO: Implement the Curry Function
// This function should take another function `fn` as its argument
// and return a new function that allows arguments to be passed one at a time.
// Example:
// function add(a, b) {
//     return a + b;
// }
// const curriedAdd = curry(add);
// curriedAdd(1)(2); // 3

function curry(fn) {
  // Your implementation here
  // return a func
  // closures needed: function and arg
  // last invocation return result of the func else return curried func expecting next arg
  return function curriedFunction(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}

module.exports = curry;
