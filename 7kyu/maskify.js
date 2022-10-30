// Your task is to write a function maskify, which changes all but
// the last four characters into '#'.

function maskify(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (i > str.length - 5) result += str[i];
		else result += "#";
	}
	return result;
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
