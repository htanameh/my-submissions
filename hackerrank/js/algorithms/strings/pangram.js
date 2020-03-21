// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
  const sObj = {};
  if (s.length < 26) {
    return 'not pangram';
  }
  s.split('').forEach((c) => {
    if (c !== ' ') {
      if (sObj[c.toLowerCase()]) {
        sObj[c.toLowerCase()] += 1;
      } else {
        sObj[c.toLowerCase()] = 1;
      }
    }
  });
  //   console.log(sObj);
  if (Object.keys(sObj).length === 26) {
    return 'pangram';
  }
  return 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the prize'));
