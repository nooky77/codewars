// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

const summation = function (num) {
	let result = 0;
	for (let i = 1; i <= num; i++) {
		result += i;
	}
	return result;
};

console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);
