// https://www.hackerrank.com/challenges/js10-objects/problem


/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  const rect = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  return rect;
}

Rectangle(10, 20);
