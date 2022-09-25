// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
	const vowels = "aeiou";
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) count++;
	}
	return count;
}

console.log(getCount("abracadabra")); // 5
console.log(getCount("pear tree")); // 4
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
console.log(getCount("my pyx")); // 0
