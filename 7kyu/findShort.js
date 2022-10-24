// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str) {
	return str.split(" ").reduce((acc, word) => {
		if (word.length < acc) {
			return word.length;
		} else {
			return acc;
		}
	}, 100);
}

findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");
findShort("Let's travel abroad shall we");
