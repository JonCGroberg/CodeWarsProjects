function generateHashtag(input) {
  let finalResult = "#";
  if (input === "") return false;

  finalResult = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (finalResult.length >= 140) return false;
  if (finalResult === "") return false;
  else return '#'+finalResult;
}

console.log(generateHashtag("      test    est test 5"));
