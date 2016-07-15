// https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString(str, num) {
  if (str.length > num)
    return str.slice(0, num <= 3 ? num : num - 3) + "...";
  return str;
}
