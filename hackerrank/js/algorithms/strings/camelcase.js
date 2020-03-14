// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  return s.split('').reduce((acc, item) => {
    let count = acc;
    if (item === item.toUpperCase()) {
      count += 1;
    }
    return count;
  }, 1);
}

console.log(camelcase('savechangesInTheEditor'));
