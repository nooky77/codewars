// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member.
// Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(arr) {
	let result = [];
	for (let ele of arr) {
		if (ele[0] >= 55 && ele[1] > 7) result.push("Senior");
		else result.push("Open");
	}
	return result;
}

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	])
);
console.log(
	openOrSenior([
		[3, 12],
		[55, 1],
		[91, -2],
		[53, 23],
	])
);
console.log(
	openOrSenior([
		[59, 12],
		[55, -1],
		[12, -2],
		[12, 12],
	])
);
