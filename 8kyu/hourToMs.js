// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds

function hourToMs(h, m, s) {
	let hSec = h * 3600000;
	let mSec = m * 60000;
	let sSec = s * 1000;
	return hSec + mSec + sSec;
}

console.log(hourToMs(0, 1, 1)); // 61000
console.log(hourToMs(1, 1, 1)); // 3661000
console.log(hourToMs(0, 0, 0)); // 0
console.log(hourToMs(1, 0, 1)); // 3601000
console.log(hourToMs(1, 0, 0)); // 3600000
