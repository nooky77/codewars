// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
	let hash = {};
	str = str.toLowerCase();
	for (let char of str) {
		if (char === "x" || char === "o") {
			hash[char] ? hash[char]++ : (hash[char] = 1);
		}
	}
	return hash["o"] === hash["x"];
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
