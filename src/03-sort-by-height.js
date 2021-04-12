/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const mask = [];
  let basic = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      mask.push('fixed');
    } else {
      mask.push('basic');
      basic.push(arr[i]);
    }
  }

  basic = basic.sort((a, b) => a - b);
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === 'fixed') {
      result.push(-1);
    } else {
      result.push(basic.shift());
    }
  }
  return result;
}

module.exports = sortByHeight;
