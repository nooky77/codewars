// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(str) {
	let middleIndex = 0;
	if (str.length % 2 === 0) {
		middleIndex = str.length / 2 - 1;
		return str[middleIndex] + str[middleIndex + 1];
	} else {
		middleIndex = Math.floor(str.length / 2);
		return str[middleIndex];
	}
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
