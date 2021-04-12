/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) { // sum of upper level of matrix
    sum += matrix[0][i];
  }
  for (let i = 0; i < matrix.length - 1; i++) { // exclude upper level
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) sum += matrix[i + 1][j]; // [i + 1] for shift to level down
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
