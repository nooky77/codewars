// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while
// leaving the even numbers at their original positions.

function sortArray(array) {
	let oddArr = [];
	let newArr = [];
	array.forEach((num) => {
		if (num % 2 !== 0) oddArr.push(num);
	});
	oddArr = oddArr.sort((a, b) => a - b);
	array.forEach((num) => {
		if (num % 2 !== 0) {
			newArr.push(oddArr[0]);
			oddArr.shift();
		} else {
			newArr.push(num);
		}
	});
	return newArr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4];
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0];
console.log(sortArray([])); // []
