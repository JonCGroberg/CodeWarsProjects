function findOdd(nums) {
  const numCounter = {};
  for (const num of nums) {
    if (num in numCounter) numCounter[num]++;
    else numCounter[num] = 1;
  }
  for (const [key, value] of Object.entries(numCounter)) {
    if (value % 2 != 0) return Number(key);
  }
}