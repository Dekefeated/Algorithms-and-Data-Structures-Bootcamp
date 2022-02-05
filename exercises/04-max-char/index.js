// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
  const characterMap = {};
  let max = 0;
  let maxChar = "";

  for (let character of string) {
    if (characterMap[character]) {
      characterMap[character]++;
    } else {
      characterMap[character] = 1;
    }
  }

  for (let char in characterMap) {
    if (characterMap[char] > max) {
      max = characterMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
