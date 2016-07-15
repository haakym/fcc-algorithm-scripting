// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  return str.toLowerCase()
    .split(/\s/)
    .map(function(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    })
    .join(" ");
}
