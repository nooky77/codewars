// Write function RemoveExclamationMarks which removes all exclamation
// marks from a given string.

function removeExclamationMarks(s) {
	return s
		.split("")
		.filter((char) => char !== "!")
		.join("");
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");