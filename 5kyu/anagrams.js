// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array
// if there are none.

// Count number of letter and adds in object
function countLetter(word) {
	let countStr = {};
	let tmpStr = "";
	for (let i = 0; i < word.length; i++) {
		tmp = word[i];
		countStr[tmp] ? countStr[tmp]++ : (countStr[tmp] = 1);
	}
	return countStr;
}

// Compare if 2 objects have the same number of letters
function compare(obj1, obj2) {
	for (const key in obj2) {
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
}

function anagrams(word, words) {
	let arrAnagrams = [];
	let wordCount = countLetter(word);
	let wordsCountsObj = [];

	words.forEach((word) => {
		wordsCountsObj.push(countLetter(word));
	});

	wordsCountsObj.forEach((word, i) => {
		if (compare(wordCount, word)) arrAnagrams.push(words[i]);
	});
	return arrAnagrams;
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]); // ['aabb', 'bbaa']

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]); // ['carer', 'racer']

anagrams("laser", ["lazing", "lazy", "lacer"]); // []
