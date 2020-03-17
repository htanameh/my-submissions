// https://www.hackerrank.com/challenges/js10-bitwise/problem


function getMaxLessThanK(n, k) {
  let maxAnb = 0;
  for (let b = n; b > 0; b -= 1) {
    for (let a = b - 1; a > 0; a -= 1) {
      // eslint-disable-next-line no-bitwise
      if ((a & b) < k && (a & b) > maxAnb) {
        // eslint-disable-next-line no-bitwise
        maxAnb = (a & b);
      }
    }
  }
  return maxAnb;
}

getMaxLessThanK(5, 2);
