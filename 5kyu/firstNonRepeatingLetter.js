// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
//  but the function should return the correct case for the initial letter.

// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("")
//  or None -- see sample tests.

function firstNonRepeatingLetter(str) {
	if (!str.length) return "";
	let countChar = {};
	let currentChar = "";
	for (let i = 0; i < str.length; i++) {
		currentChar = str[i];
		countChar[currentChar]
			? countChar[currentChar]++
			: (countChar[currentChar] = 1);
	}
	for (const key in countChar) {
		if (key === key.toLowerCase() && key === key.toUpperCase()) {
			if (countChar[key] === 1) return key;
			continue;
		}
		if (key === key.toLowerCase()) {
			let upperChar = key.toUpperCase();
			if (countChar[key] === 1 && !countChar[upperChar]) return key;
			continue;
		}
		if (key === key.toUpperCase()) {
			let lowerChar = key.toLowerCase();
			if (countChar[key] === 1 && !countChar[lowerChar]) return key;
			continue;
		}
	}
	return "";
}

console.log(firstNonRepeatingLetter("$2%%2")); // '$'
console.log(firstNonRepeatingLetter("a")); // 'a'
console.log(firstNonRepeatingLetter("sTreSS")); // 'T'
console.log(firstNonRepeatingLetter("MoOnmEn")); // 'E'
