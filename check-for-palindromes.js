// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome(str) {
  return str.replace(/\W|_/g, "").toLowerCase() === str.replace(/\W|_/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
}
