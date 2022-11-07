// Complete the method/function so that it converts dash/underscore delimited
// words into camel casing.
// The first word within the output should be capitalized only if
// the original word was capitalized (known as Upper Camel Case, also
// often referred to as Pascal case).

function toCamelCase(str) {
	if (!str.length) return str;
	let strLower = str.toLowerCase();
	let result = [];
	let tempStr = "";
	let capitalized = str[0] === str[0].toUpperCase() ? true : false;
	for (let i = 0; i < str.length; i++) {
		if (strLower[i].charCodeAt() < 97 || strLower[i].charCodeAt() > 122) {
			result.push(tempStr);
			tempStr = "";
			capitalized = true;
		} else {
			if (capitalized) {
				tempStr += strLower[i].toUpperCase();
				capitalized = false;
			} else tempStr += strLower[i];
		}
		if (i === strLower.length - 1) result.push(tempStr);
	}
	return result.join("");
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
