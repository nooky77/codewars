// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
	let result = "";
	for (let i = 0; i < n; i++) {
		result += s;
	}
	return result;
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
