// https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding(str, target) {
  return target === str.substr(str.length - target.length);
}
