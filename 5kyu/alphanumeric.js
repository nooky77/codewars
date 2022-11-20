// In this example you have to validate if a user input string is alphanumeric.
// The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
	if (!string.length) return false;
	for (let char of string) {
		if (!isAlpha(char)) return false;
	}
	return true;
}

function isAlpha(char) {
	char = char.toLowerCase();
	if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) return true;
	if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) return true;
	return false;
}

console.log(alphanumeric("hello world_"));
console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
