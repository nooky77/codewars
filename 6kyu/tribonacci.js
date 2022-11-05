function tribonacci(arr, num) {
	if (num === 0) return [];
	if (num === 1) return [arr[0]];
	if (num === 2) return [arr[0], arr[1]];
	for (let i = 2; i < num - 1; i++) {
		let result = arr[i - 2] + arr[i - 1] + arr[i];
		arr.push(result);
	}
	return arr;
}

tribonacci([1, 1, 1], 10);
tribonacci([0, 0, 1], 10);
tribonacci([0, 1, 1], 10);
tribonacci([1, 0, 0], 10);
