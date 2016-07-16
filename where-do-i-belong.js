// https://www.freecodecamp.com/challenges/where-do-i-belong

function getIndexToIns(arr, num) {
  return arr.sort()
    .filter(function(val) {
      return val < num;
    }).length;
}
