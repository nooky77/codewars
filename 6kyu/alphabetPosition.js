// In this kata you are required to, given a string, replace every letter
// with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
	let str = text.toLowerCase();
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let hash = {};
	let char = "";
	for (let i = 0; i < alphabet.length; i++) {
		char = alphabet[i];
		if (!hash[char]) hash[char] = i + 1;
	}
	let result = [];
	for (let i = 0; i < str.length; i++) {
		char = str[i];
		if (hash[char]) result.push(hash[char]);
	}
	return result.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition("The narwhal bacons at midnight.");
