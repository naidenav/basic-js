const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(string, keyword) {
	string = string.toLowerCase();
	keyword = keyword.toLowerCase();
	let lengthOfKeyword = keyword.length;
	if (keyword.length < string.length) {
		for (let n = 0; n < string.length - lengthOfKeyword; n++) {	
			keyword += keyword[n];
		}
	} else if (keyword.length > string.length) {
		keyword = keyword.slice(0,string.length);
	}	 
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() == string[i].toUpperCase()) {
			result += string[i];
			keyword = ' ' + keyword;
 		} else {
			let indexOfStringLetter = alphabet.indexOf(string[i]);
			let indexOfKeywordLetter = alphabet.indexOf(keyword[i]);
			if (indexOfKeywordLetter + indexOfStringLetter < 26) { 
				result += alphabet[indexOfKeywordLetter + indexOfStringLetter];
			} else {
				result += alphabet[indexOfKeywordLetter - 26 + indexOfStringLetter];
			}
		}
	}
	if (this.type == undefined || this.type === true) {
    return result.toUpperCase();	
  } else {
    return result.toUpperCase().split('').reverse().join('');	
  }
  }    
  decrypt(string, keyword) {
	string = string.toLowerCase();
	keyword = keyword.toLowerCase();
	let lengthOfKeyword = keyword.length;
	if (keyword.length < string.length) {
		for (let n = 0; n < string.length - lengthOfKeyword; n++) {
				keyword += keyword[n];
		}
	} else if (keyword.length > string.length) {
		keyword = keyword.slice(0,string.length);
	}	 
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() == string[i].toUpperCase()) {
			result += string[i];
			keyword = ' ' + keyword;
		} else {
			let indexOfStringLetter = alphabet.indexOf(string[i]);
			let indexOfKeywordLetter = alphabet.indexOf(keyword[i]);
			if (indexOfStringLetter >= indexOfKeywordLetter) { 
				result += alphabet[indexOfStringLetter - indexOfKeywordLetter];
			} else {
				result += alphabet[indexOfStringLetter + 26 - indexOfKeywordLetter];
			}
		}
	}
  if (this.type ==undefined || this.type === true) {
    return result.toUpperCase();	
  } else {
    return result.toUpperCase().split('').reverse().join('');	
  }
}
}

module.exports = VigenereCipheringMachine;
