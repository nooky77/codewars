// Write a function, persistence, that takes in a positive parameter num
// and returns its multiplicative persistence, which is the number of times
// you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	let arrNum = Array.from(String(num), Number);
	let count = 0;
	let result = 1;
	while (arrNum.length > 1) {
		count++;
		for (let num of arrNum) {
			result *= num;
		}
		arrNum = Array.from(String(result), Number);
		result = 1;
	}
	return count;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
