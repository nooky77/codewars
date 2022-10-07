// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter
// words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

function spinWords(string) {
	let str = string.split(" ");
	let newStr = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i].length > 4) {
			newStr.push(str[i].split("").reverse().join(""));
		} else {
			newStr.push(str[i]);
		}
	}
	return newStr.join(" ");
}

console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("You are almost to the last test")); // "You are tsomla to the last test"
