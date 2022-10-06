function squareDigits(num) {
	let str = num.toString();
	let sum = "";
	let tmp = 0;
	for (let i = 0; i < str.length; i++) {
		tmp = Number(str[i]);
		sum += tmp * tmp;
	}
	return Number(sum);
}

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
