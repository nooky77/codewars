// Complete the function to find the count of the most frequent item of an array.
// You can assume that input is an array of integers. For an empty array return 0

function mostFrequentItemCount(arr) {
	let count = {};
	for (let el of arr) {
		count[el] ? count[el]++ : (count[el] = 1);
	}
	let arrCountSorted = Object.values(count).reduce(
		(acc, el) => (el > acc ? el : acc),
		0
	);
	return arrCountSorted;
}

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
	mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
	5
);
