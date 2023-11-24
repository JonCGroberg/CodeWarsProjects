function adLetters(...letters) {
  if (letters.length === 0) return "z";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let resultIndex = 0;

  for (let letter of letters) {
    let letterIndex = alphabet.indexOf(letter) + 1;
    resultIndex += letterIndex;
  }
  if (resultIndex >= 26) resultIndex = resultIndex % 26;

  return alphabet[resultIndex - 1];
}

console.log(adLetters());
