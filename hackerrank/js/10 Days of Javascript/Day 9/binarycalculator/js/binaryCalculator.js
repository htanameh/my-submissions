// https://www.hackerrank.com/challenges/js10-binary-calculator
const elem = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

function checkOperator() {
  if (elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')) {
    return true;
  }
  return false;
}

function clickZero() {
  elem.innerHTML += '0';
}
btn0.addEventListener('click', clickZero);

function clickOne() {
  elem.innerHTML += '1';
}
btn1.addEventListener('click', clickOne);

function clickSum() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '+';
  }
}
btnSum.addEventListener('click', clickSum);

function clickSub() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '-';
  }
}
btnSub.addEventListener('click', clickSub);

function clickMul() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '*';
  }
}
btnMul.addEventListener('click', clickMul);

function clickDiv() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '/';
  }
}
btnDiv.addEventListener('click', clickDiv);

function clickClr() {
  elem.innerHTML = '';
}
btnClr.addEventListener('click', clickClr);

function clickEql() {
  if (!checkOperator()) {
    const re = /\d+/g;
    const re2 = /[+\-*/]+/g;
    const numbers = elem.innerHTML.match(re);
    const operations = elem.innerHTML.match(re2);
    while (operations.length > 0) {
      if (operations.includes('*')) {
        const indexOfMul = operations.indexOf('*');
        const mul = (indexOfMul !== 0
          ? parseInt(numbers[indexOfMul - 1], 2)
          : parseInt(numbers[indexOfMul], 2)) * parseInt(numbers[indexOfMul + 1], 2);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toString(2));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes('/')) {
        const indexOfDiv = operations.indexOf('/');
        const division = (indexOfDiv !== 0
          ? parseInt(numbers[indexOfDiv - 1], 2)
          : parseInt(numbers[indexOfDiv], 2)) / parseInt(numbers[indexOfDiv + 1], 2);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toString(2));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes('+')) {
        const indexOfSum = operations.indexOf('+');
        const sum = (indexOfSum !== 0
          ? parseInt(numbers[indexOfSum - 1], 2)
          : parseInt(numbers[indexOfSum], 2)) + parseInt(numbers[indexOfSum + 1], 2);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toString(2));
        operations.splice(indexOfSum, 1);
      } else {
        const indexOfSub = operations.indexOf('-');
        const sub = (indexOfSub !== 0
          ? parseInt(numbers[indexOfSub - 1], 2)
          : parseInt(numbers[indexOfSub], 2)) - parseInt(numbers[indexOfSub + 1], 2);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toString(2));
        operations.splice(indexOfSub, 1);
      }
    }
    elem.innerHTML = numbers[0].toString(2);
  } else {
    // eslint-disable-next-line no-alert
    alert('Line must ends with number.');
  }
}
btnEql.addEventListener('click', clickEql);
