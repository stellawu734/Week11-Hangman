//logic of the app
//app ends when the player guesses the correct word or runs out of guesses
//get a random word for play
var HP=20;
var game = require('./game.js');
var newWord = new game.getWord();
//get user input ans stored it as 'key'
var stdin = process.stdin;
stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( key ){
  if ( key === '\u0003' ) {
    process.exit();
  }
      HP--;
  //pass key into letter comparison, get index of letter
 // process.stdout.write( key );
  var word = require('./word.js');
  var compare = new word.checkLetters(key,game.word);
  //pass index into showwords, get newWord
  var letter = require('./letter.js');
  var showLetter = new letter.showWords(key,game.word,word.index);
  console.log('Correct Guesses: '+letter.newWord);
  console.log(' You have '+HP+' guesses left');
  	if(HP===0) {
		console.log('Game Over!');
		process.exit();
	}
	if(letter.newWord.join('').toLowerCase()===game.pickedWord.toLowerCase()){
		console.log('You Won!');
		process.exit();
	}
});


