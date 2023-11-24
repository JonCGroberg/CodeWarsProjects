function countSel(lst) {
  let numbers = {};
  for (let num of lst) {
    if (numbers[num]) {
      numbers[num]++;
    } else {
      numbers[num] = 1;
    }
  }

  let totalNum = lst.length;
  let numDifferentValues = Object.keys(numbers).length;
  let numOccurOnce = Object.values(numbers).filter((num) => num === 1).length;

  let maxCount = 0;
  for (let num in numbers) {
    if (numbers[num] > maxCount) {
      maxCount = numbers[num];
    }
  }

  let mostFrequentNums = Object.keys(numbers)
    .filter((key) => numbers[key] === maxCount)
    .map((num) => Number(num))
    .sort((a, b) => a - b);

  return [
    totalNum,
    numDifferentValues,
    numOccurOnce,
    [mostFrequentNums, maxCount],
  ];
}