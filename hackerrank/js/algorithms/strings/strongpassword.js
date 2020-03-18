// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  // numbers = '0123456789';
  // lower_case = 'abcdefghijklmnopqrstuvwxyz';
  // upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // special_characters = '!@#$%^&*()-+';
  let count = 0;
  const hasNumber = /\d/;
  if (!hasNumber.test(password)) {
    count += 1;
  }
  const hasLowerCase = /[a-z]/;
  if (!hasLowerCase.test(password)) {
    count += 1;
  }
  const hasUpperCase = /[A-Z]/;
  if (!hasUpperCase.test(password)) {
    count += 1;
  }
  const hasSpecialCharacter = /[!@#$%^&*()\-+]/;
  if (!hasSpecialCharacter.test(password)) {
    count += 1;
  }
  if (n < 6) {
    if ((6 - n) > count) {
      return 6 - n;
    }
  }
  return count;
}

console.log(minimumNumber(7, 'AUzs-nV'));
