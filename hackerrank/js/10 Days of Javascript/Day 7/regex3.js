// https://www.hackerrank.com/challenges/js10-regexp-3/problem


function regexVar() {
  /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

  const re = /\d+/g;
  /*
     * Do not remove the return statement
     */
  return re;
}

regexVar('12 33 ');
