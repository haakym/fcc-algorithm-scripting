// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  return str.split(/\s/g)
    .sort(function(a, b) {
      return b.length - a.length;
    })
    .shift()
    .length;
}
