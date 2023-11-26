function doEquation(n) {
  let sum = 0;
  let digits = n.toString();
  for (let k = 0; k < digits.length - 1; k++) {
    let power = digits[k] - digits[k + 1];
    let number = Math.pow(digits[k], Math.abs(power));
    let sign = power > 0 ? -1 : 1;
    sum += sign * number;
  }
  sum += Number(digits[digits.length - 1]);
  return sum;
}

function findPrev(n) {
  for (let i = n; i >= 100; i--) {
    if (doEquation(i) == 0) return i;
  }
}
function findNext(n) {
  for (let i = n; i < 1000000; i++) {
    if (doEquation(i) == 0) return i;
  }
}

function prevNext(n) {
  let finalArray = [];
  let prev = findPrev(n - 1);
  if (prev) finalArray.push(prev);
  if (doEquation(n) == 0) finalArray.push(n);
  finalArray.push(findNext(n + 1));
  return finalArray;
}
console.log(doEquation(143));
console.log(prevNext(150));
console.log(prevNext(154));
console.log(prevNext(99));
console.log(prevNext(100));
