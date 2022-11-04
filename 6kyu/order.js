// Your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.

function order(words) {
	if (words === "") return words;
	let order = [];
	let result = [];
	for (let i = 0; i < words.length; i++) {
		if (Number(words[i])) order.push(Number(words[i]));
	}
	let arrStr = words.split(" ");
	for (let i = 0; i < order.length; i++) {
		let pos = order[i] - 1;
		result[pos] = arrStr[i];
	}
	return result.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
