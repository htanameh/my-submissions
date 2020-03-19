// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return s.split('').reduce((acc, item) => {
    const isUpperCase = item.toUpperCase() === item;
    if (alphabets.includes(item.toLowerCase())) {
      const alphaIndex = alphabets.findIndex((it) => it === item.toLowerCase());
      const cipherLetter = alphabets[((alphaIndex + k) % 26)];
      if (isUpperCase) { return acc + cipherLetter.toUpperCase(); }
      return acc + cipherLetter;
    }
    return acc + item;
  }, '');
}

console.log(caesarCipher('middle-Outz', 2));
