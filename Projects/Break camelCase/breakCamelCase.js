const solution = (string) =>
  string
    .split("")
    .map((char) => (char === char.toUpperCase() ? " " + char : char))
    .join("");
