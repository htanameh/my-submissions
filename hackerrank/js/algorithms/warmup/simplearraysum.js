// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  return ar.reduce((acc, item) => acc + item, 0);
}

simpleArraySum([1, 2, 3, 4, 5]);
