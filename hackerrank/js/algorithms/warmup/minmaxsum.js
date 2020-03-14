// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  let sum = 0;
  sortedArr.forEach((item) => { sum += item; });
  console.log(sum - sortedArr[arr.length - 1], sum - sortedArr[0]);
}

miniMaxSum([1, 2, 3, 4, 5]);
