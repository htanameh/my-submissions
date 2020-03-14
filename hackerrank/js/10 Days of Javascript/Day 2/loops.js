// https://www.hackerrank.com/challenges/js10-loops/problem

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  const vowelsInS = [];
  const consonantsInS = [];
  s.split('').forEach((char) => {
    if (vowels.includes(char)) {
      vowelsInS.push(char);
    } else {
      consonantsInS.push(char);
    }
  });
  vowelsInS.forEach((item) => console.log(item));
  consonantsInS.forEach((item) => console.log(item));
}

vowelsAndConsonants('hello');
