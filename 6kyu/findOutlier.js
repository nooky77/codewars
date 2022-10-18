// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr) {
	let countOdd = 0;
	let oddNbr = false;
	let countEven = 0;
	let evenNbr = false;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenNbr = arr[i];
			countEven++;
		} else {
			oddNbr = arr[i];
			countOdd++;
		}
		if (countEven > 1 && countOdd === 1) return oddNbr;
		if (countOdd > 1 && countEven === 1) return evenNbr;
	}
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
