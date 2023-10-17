function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var t = i+1; t < numbers.length; t++) {
            if (numbers[i] + numbers[t] == target) return [i, t] 
        }
    }
}
