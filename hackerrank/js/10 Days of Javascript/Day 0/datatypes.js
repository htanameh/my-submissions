// https://www.hackerrank.com/challenges/js10-data-types/problem

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank ';

  console.log(Number(firstInteger) + Number(secondInteger));

  console.log(Number(firstDecimal) + Number(secondDecimal));

  console.log(firstString + secondString);
}

performOperation(1, 2.12, 'hello');
