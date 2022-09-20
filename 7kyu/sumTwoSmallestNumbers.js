// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

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
