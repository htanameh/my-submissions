// https://www.hackerrank.com/challenges/js10-throw/problem


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  try {
    if (a > 0) {
      return 'YES';
    } if (a < 0) {
      // eslint-disable-next-line no-throw-literal
      throw 'Negative Error';
    } else {
      // eslint-disable-next-line no-throw-literal
      throw 'Zero Error';
    }
  } catch (e) {
    return e;
  }
}

isPositive(-2);
