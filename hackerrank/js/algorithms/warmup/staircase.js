// https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
  let printString = '';
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (j < n - i - 1) {
        printString += ' ';
      } else {
        printString += '#';
      }
    }
    if (i !== n - 1) printString += '\n';
  }
  console.log(printString);
}
staircase(5);
