// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other

function arrayDiff(arr1, arr2) {
	let result = [];
	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr1[i])) result.push(arr1[i]);
	}
	return result;
}

arrayDiff([1, 2], [1]); //  [2]
arrayDiff([1, 2, 2, 2, 3], [2]); //  [1,3]
