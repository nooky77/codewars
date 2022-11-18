// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but
// exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		for (let char of pin) {
			if (char.charCodeAt() < 48 || char.charCodeAt() > 57) return false;
		}
		return true;
	} else return false;
}

console.log(validatePIN("2867"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));
