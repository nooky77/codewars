// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase)
// and numeric digits.

function duplicateCount(text) {
	let str = text.toLowerCase();
	let hash = {};
	let char = "";
	for (let i = 0; i < str.length; i++) {
		char = str[i];
		hash[char] ? hash[char]++ : (hash[char] = 1);
	}
	let count = 0;
	for (let key in hash) {
		if (hash[key] > 1) count++;
	}
	return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);
