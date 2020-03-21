// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
  const h = [];
  const hStr = 'hackerrank';
  s.split('').forEach((c) => {
    if (c === hStr[h.length]) {
      h.push(c);
    }
  });
  if (h.length === 10 && h.join('') === hStr) {
    return 'YES';
  }
  return 'NO';
}

console.log(hackerrankInString('hereiamstackerrank'));
