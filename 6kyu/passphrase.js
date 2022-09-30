// Everyone knows passphrases. One can choose passphrases from poems, songs,
// movies names and so on but frequently they can be guessed due to common cultural references.
// You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.

function passphrase(str, num) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let newStr = str.toLowerCase();
	let newPass = "";
	let tempChar = "";
	for (let i = 0; i < newStr.length; i++) {
		tempChar = "";
		if (Number.isInteger(parseInt(newStr[i]))) {
			let newNbr = 9 - parseInt(newStr[i]);
			newPass += newNbr;
			continue;
		}
		if (!alphabet.includes(newStr[i])) {
			newPass += newStr[i];
			continue;
		}
		tempChar = alphabet[(alphabet.indexOf(newStr[i]) + num) % 26];
		if (i % 2 !== 0) {
			newPass += tempChar.toLowerCase();
		} else {
			newPass += tempChar.toUpperCase();
		}
	}
	newPass = newPass.split("").reverse().join("");
	return newPass;
}

passphrase("BORN IN 2015!", 1); // "!4897 Oj oSpC";

passphrase("I LOVE YOU!!!", 1); // "!!!vPz fWpM J")

passphrase("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2); // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
