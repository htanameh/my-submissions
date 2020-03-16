// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let t = 'AM';
  let m = 0; let sec = 0; let
    h = 0;
  const sArr = s.split(':');
  t = sArr[2].slice(2);
  sec = sArr[2].slice(0, 2);
  [h, m] = sArr;
  if (t === 'AM' && h === '12') {
    h = '00';
  }
  if (t === 'PM') {
    if (h !== '12') { h = Number(h) + 12; }
  }
  return `${h}:${m}:${sec}`;
}

console.log(timeConversion('07:45:54PM'));
