function addNumToStr(arr) {
	if (!arr.length) return [];
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(`${i + 1}: ${arr[i]}`);
	}
	return newArr;
}

console.log(addNumToStr([])); // [], 'Empty array should return empty array
console.log(addNumToStr(["a", "b", "c"])); //, ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
