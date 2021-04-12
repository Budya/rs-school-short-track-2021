/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let smallString = s1;
  let bigString = s2;
  if (smallString.length > bigString.length) {
    smallString = s2;
    bigString = s1;
  }
  for (let i = 0; i < smallString.length; i++) {
    if (bigString.indexOf(smallString[i]) !== -1) {
      bigString = bigString.replace(smallString[i], ' ');
      counter++;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
