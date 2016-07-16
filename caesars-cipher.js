// https://www.freecodecamp.com/challenges/caesars-cipher

function rot13(str) {
  return str.split("")
    .map(function(val) {
      return /\W/.test(val) ? val : String.fromCharCode(
        /[A-M]/.test(val) ? val.charCodeAt() + 13 : val.charCodeAt() - 13
      );
    }).join("");
}
