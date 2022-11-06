// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters -
// each taken only once - coming from s1 or s2.

function charCount(str1, str2) {
	let count = {};
	for (let char of str1) {
		count[char] = true;
	}
	for (let char of str2) {
		count[char] = true;
	}
	return count;
}

function longest(s1, s2) {
	let countChar = charCount(s1, s2);
	let result = [];
	let count = 0;
	for (let key in countChar) {
		result.push(key);
		count++;
	}
	return result.sort().join("");
}

longest("aretheyhere", "yestheyarehere");
longest("loopingisfunbutdangerous", "lessdangerousthancoding");
longest("inmanylanguages", "theresapairoffunctions");
