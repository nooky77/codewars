// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return number > 0 ? number * -1 : Math.abs(number);
}

console.log(opposite(1), -1);
console.log(opposite(0), 0);
console.log(opposite(4.25), -4.25);
console.log(opposite(3.3333333), -3.3333333);
console.log(opposite(-12525220.3325), 12525220.3325);
console.log(opposite(-5), 5);
