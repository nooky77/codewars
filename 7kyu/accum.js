// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (i === str.length - 1) {
			result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
			break;
		}
		result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + "-";
	}
	return result;
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));
