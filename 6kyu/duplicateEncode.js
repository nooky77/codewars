// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character appears
// only once in the original string, or ")" if that character appears more
// than once in the original string. Ignore capitalization when determining
// if a character is a duplicate.

function duplicateEncode(word) {
	let str = word.toLowerCase();
	let hash = {};
	let result = "";
	for (let char of str) {
		hash[char] ? hash[char]++ : (hash[char] = 1);
	}
	for (let char of str) {
		hash[char] > 1 ? (result += ")") : (result += "(");
	}
	return result;
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");
