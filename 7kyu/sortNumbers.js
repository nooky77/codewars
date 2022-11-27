function sortNumbers(nums) {
	if (!nums) return [];
	return nums.sort((a, b) => a - b);
}

console.log(sortNumbers([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
console.log(sortNumbers(null), []);
console.log(sortNumbers([]), []);
console.log(sortNumbers([20, 2, 10]), [2, 10, 20]);
console.log(sortNumbers([2, 20, 10]), [2, 10, 20]);
