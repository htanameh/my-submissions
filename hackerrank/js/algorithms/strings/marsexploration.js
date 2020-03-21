// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
  let c = 0;
  for (let i = 0; i < s.length; i += 3) {
    const t = s[i] + s[i + 1] + s[i + 2];
    console.log(t);
    if (t !== 'SOS') {
      if (s[i] !== 'S') c += 1;
      if (s[i + 1] !== 'O') c += 1;
      if (s[i + 2] !== 'S') c += 1;
    }
  }
  return c;
}

console.log(marsExploration('SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS'));
