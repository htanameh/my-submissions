// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let postiveSum = 0; let negativeSum = 0; let
    zeroSum = 0;
  arr.forEach((item) => {
    if (item < 0) {
      negativeSum += 1;
    } else if (item > 0) {
      postiveSum += 1;
    } else {
      zeroSum += 1;
    }
  });
  console.log(postiveSum / arr.length);
  console.log(negativeSum / arr.length);
  console.log(zeroSum / arr.length);
}

plusMinus([1, -2, 0, 1, 3]);
