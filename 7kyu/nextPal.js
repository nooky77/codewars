// In this kata you will be given a positive integer, val and you have to create the
// function next_pal()(nextPal Javascript) that will output the smallest palindrome
// number higher than val.

function nextPal(val) {
	let num = 0;
	while (true) {
		val++;
		num = String(val).split("").reverse().join("");
		if (val === Number(num)) return val;
	}
}

console.log(nextPal(11)); //== 22

console.log(nextPal(188)); //== 191

console.log(nextPal(191)); //== 202

console.log(nextPal(2541)); //== 2552
