// I would like for you to write me a function that when given a
// number (n) returns the n-th number in the Fibonacci Sequence.

function nthFibo(num) {
	let fib = [0, 1];
	if (num === 1) return fib[0];
	if (num === 2) return fib[1];
	for (let i = 2; i <= num; i++) {
		let sum = fib[i - 1] + fib[i - 2];
		fib.push(sum);
	}
	return fib[num - 1];
}

console.log(nthFibo(4)); // 2
