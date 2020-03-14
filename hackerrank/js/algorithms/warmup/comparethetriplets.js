// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let aSum = 0;
  let bSum = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      aSum += 1;
    } else if (b[i] > a[i]) {
      bSum += 1;
    } else {
      //  do nothing
    }
  }
  return [aSum, bSum];
}

compareTriplets([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
