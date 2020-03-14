// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  const str = s.split('').reduce((acc, item) => {
    if (acc.length && acc[acc.length - 1] === item) {
      return acc.substring(0, acc.length - 1);
    }
    return acc + item;
  }, '');
  if (str === '') {
    return 'Empty String';
  }
  return str;
}

console.log(superReducedString('aa'));
