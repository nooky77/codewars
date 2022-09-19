function sumTwoSmallestNumbers(numbers) {
	if (numbers.length < 2) return;
	let a = numbers[0];
	let b = numbers[1];
	if (numbers.length === 2) return a + b;
	for (let i = 2; i < numbers.length; i++) {
		if (numbers[i] < a) {
			if (a < b) b = a;
			a = numbers[i];
		} else if (numbers[i] < b) {
			b = numbers[i];
		}
	}
	return a + b;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455
