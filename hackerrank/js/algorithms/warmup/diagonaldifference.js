// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let lefSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === j) {
        lefSum += arr[i][j];
      }
      if (i + j === (arr.length - 1)) {
        rightSum += arr[i][j];
      }
    }
  }
  return Math.abs(lefSum - rightSum);
}

diagonalDifference([1, 2, 3, 4, 5, 6, 7, 8, 9]);
