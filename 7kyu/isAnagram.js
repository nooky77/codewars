let isAnagram = function (test, original) {
	if (test.length !== original.length) return false;
	let str1 = countLetters(original);
	let str2 = countLetters(test);
	for (let key in str2) {
		if (str2[key] !== str1[key]) return false;
	}
	return true;
};

function countLetters(str) {
	str = str.toLowerCase();
	let count = {};
	for (let char of str) {
		count[char] ? count[char]++ : (count[char] = 1);
	}
	return count;
}

console.log(isAnagram("foefet", "toffee"), true);
console.log(isAnagram("Buckethead", "DeathCubeK"), true);
console.log(isAnagram("Twoo", "WooT"), true);
console.log(isAnagram("dumble", "bumble"), false);
console.log(isAnagram("ound", "round"), false);
console.log(isAnagram("apple", "pale"), false);
