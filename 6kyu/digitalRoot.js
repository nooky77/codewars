// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digitalRoot(nbr) {
	let sum = add(nbr);
	while (sum > 9) {
		sum = add(sum);
	}
	return sum;
}

function add(nbr) {
	let numToArr = `${nbr}`.split("");
	let result = 0;
	for (let i = 0; i < numToArr.length; i++) {
		result += Number(numToArr[i]);
	}
	return result;
}

console.log(digitalRoot(16)); // -->  1 + 6 = 7
console.log(digitalRoot(942)); //  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(132189)); //  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(digitalRoot(493193)); //  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
