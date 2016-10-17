//constructors that will check letters against the word selected
var exports = module.exports 
var wrongArray=[];
exports.checkLetters = function (letter,targetWord) {
	exports.index = [];
	var letterArray = targetWord.toLowerCase().split("");
	for (var i = 0; i < letterArray.length; i++) {
		if(letterArray[i]===letter) {
			exports.index.push(i);
		} 
	}
	if(letterArray.indexOf(letter)=== -1) {
		wrongArray.push(letter);
	}
	console.log('wrong guesses: '+wrongArray);
}