// An array is called zero-plentiful if it contains multiple zeros,
// and every sequence of zeros is at least 4 items long.

// Your task is to return the number of zero sequences
// if the given array is zero-plentiful, oherwise 0.

function zeroPlentiful(arr) {
	let counterZero = 0;
	let streak = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			counterZero += 1;
			if (arr[i] === 0 && counterZero === 4) streak += 1;
			if (arr[i + 1] !== 0 && counterZero < 4) return 0;
		} else if (arr[i] !== 0 && counterZero > 0) {
			counterZero = 0;
		}
	}
	return streak;
}

console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0])); // 0
console.log(zeroPlentiful([3])); //0
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0])); //1;
console.log(zeroPlentiful([0, 2, 19, 4, 4])); //0;
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])); //2;
console.log(zeroPlentiful([-3, 2, 1, 3, -1, -2])); //0;
console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0])); //0;
console.log(zeroPlentiful([10, 0, 0, 0])); //0;
console.log(zeroPlentiful([])); //0;
