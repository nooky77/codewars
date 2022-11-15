// Consider an array/list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the
//  array (true means present).

function countSheeps(arr) {
	let test = arr.reduce(
		(acc, ele) => (ele === true ? (acc += 1) : (acc += 0)),
		0
	);
	return test;
}

const sheeps = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

console.log(countSheeps(sheeps));
