// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.

function doubleChar(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		newStr += str[i] + str[i];
	}
	return newStr;
}

console.log(doubleChar("abcd")); // "aabbccdd");
console.log(doubleChar("Adidas")); // "AAddiiddaass");
console.log(doubleChar("1337")); // "11333377");
console.log(doubleChar("illuminati")); // "iilllluummiinnaattii");
console.log(doubleChar("123456")); // "112233445566");
console.log(doubleChar("%^&*(")); // "%%^^&&**((");
