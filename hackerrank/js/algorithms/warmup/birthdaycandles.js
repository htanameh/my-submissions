// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  const sortedArr = ar.sort((a, b) => a - b);
  const max = sortedArr[sortedArr.length - 1];
  console.log(max);
  return ar.reduce((acc, item) => {
    let count = acc;
    if (item === max) {
      count += 1;
    }
    return count;
  }, 0);
}

console.log(birthdayCakeCandles([5, 1, 600, 9, 0]));
