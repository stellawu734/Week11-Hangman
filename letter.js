//constructor that control whether a letter appear as an underscore or itself on the screen
var exports = module.exports 
var guessArray=[];
var correct = 0;
exports.showWords = function (letter,targetWord,index) {
	var letterArray = targetWord.toLowerCase().split("");
	for (var i = 0; i < letterArray.length; i++) {
		if (index.indexOf(i)!= -1) {
		guessArray[i] = letter;
		} 
	}
}
	exports.newWord = guessArray;