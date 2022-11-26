// In this kata you should simply determine, whether a given year is a leap year or not.
// In case you don't know the rules, here they are:
//     years divisible by 4 are leap years
//     but years divisible by 100 are not leap years
//     but years divisible by 400 are leap years
// Additional Notes:
//     Only valid years (positive integers) will be tested, so you don't have to validate them

function isLeapYear(year) {
	if (year % 100 === 0 && year % 400 !== 0) return false;
	if (year % 4 === 0) return true;
	return false;
}

console.log(isLeapYear(1990), false);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2004), true);
console.log(isLeapYear(2010), false);
console.log(isLeapYear(2013), false);
console.log(isLeapYear(2100), false);
