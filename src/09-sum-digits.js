/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const radix = 10;
  let result = 0;
  const stringArr = n.toString().split('');
  const numArr = stringArr.map((item) => parseInt(item, radix));
  for (let i = 0; i < numArr.length; i++) {
    result += numArr[i];
  }
  if (result < 10) {
    return result;
  }
  return getSumOfDigits(result);
}

module.exports = getSumOfDigits;
