// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  return arr.map(function(val) {
      return val.sort(function(a, b) {
        return b - a;
      })[0];
    });
}
