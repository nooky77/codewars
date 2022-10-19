// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is
// an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
	let hash = {};
	str = str.toLowerCase();
	let char = "";
	for (let i = 0; i < str.length; i++) {
		char = str[i];
		if (hash[char]) {
			return false;
		} else {
			hash[char] = 1;
		}
	}
	return true;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);
