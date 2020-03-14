// https://www.hackerrank.com/challenges/js10-function/problem

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i += 1) {
    fact *= i;
  }
  return fact;
}

factorial(5);
