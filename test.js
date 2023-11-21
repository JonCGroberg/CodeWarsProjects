function findOdd(nums) {
  const numCounter = {};
  for (const num of nums) {
    if (num in numCounter) numCounter[num]++;
    else numCounter[num] = 1;
  }
  console.log(numCounter);
  for (const [key, value] of Object.entries(numCounter)) {
    if (value % 2 != 0) return key;
  }
}

console.log(findOdd([1, 2, 3, 4, 3, 4, 1, 2, 1]));
