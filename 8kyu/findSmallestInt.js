// Given an array of integers your solution should find the smallest integer.
// For example:
//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
	if (arr.length === 1) return arr[0];
	let smallest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) smallest = arr[i];
	}
	return smallest;
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); //8
console.log(findSmallestInt([78, 56, 232, 12, 18])); //12
console.log(findSmallestInt([78, 56, 232, 12, 0])); //0
console.log(findSmallestInt([1, 56, 232, 12, 8])); //1
