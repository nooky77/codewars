// Given an array of integers, find the one that appears an
// odd number of times.

// There will always be only one integer that appears an
// odd number of times.

function findOdd(arr) {
	let count = {};
	let nbOfTimes = 0;
	arr.forEach((num) => {
		count[num] ? count[num]++ : (count[num] = 1);
	});
	for (const key in count) {
		if (count[key] % 2 !== 0) nbOfTimes = key;
	}
	return parseInt(nbOfTimes);
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); // 1
