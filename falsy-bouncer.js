// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {
  return arr.filter(function(val) {
    return !!val;
  });
}
