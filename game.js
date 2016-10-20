//randomly select a word for the user
var exports = module.exports;
exports.getWord = function() {
	var wordBank = ["Bulbasaur","Ivysaur","Venusaur","Charmander"
,"Charmeleon","Charizard","Squirtle","Wartortle","Blastoise"
,"Caterpie","Metapod","Butterfree","Weedle","Kakuna"
,"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"
,"Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu"
,"Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen"
,"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales"
,"Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom"
,"Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett"
,"Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey"
,"Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl"
,"Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke"
,"Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel"
,"Geodude","Graveler","Golem","Ponyta","Slowpoke","Slowbro","Magnemite"
,"Magneton","Doduo","Dodrio","Seel","Dewgong","Grimer"
,"Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix"
,"Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode"
,"Exeggcute","Exeggcutor","Cubone","Marowak","Hitmonlee","Hitmonchan"
,"Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey"
,"Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking"
,"Staryu","Starmie","Scyther","Jynx","Electabuzz"
,"Magmar","Pinsir","Tauros","Magikarp","Gyarados"
,"Lapras","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte"
,"Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Dratini"
,"Dragonair","Dragonite"];

	var targetIndex = Math.floor(Math.random()*wordBank.length);
	var targetWord = wordBank[targetIndex];
	exports.pickedWord = targetWord;
	var targetWordArray = targetWord.toLowerCase().split("");
	var newArray = new Array(targetWordArray.length)
	for (var i = 0; i < newArray.length; i++) {
		newArray[i] = "_";
		}
	var wordLength = targetWordArray.length;
	console.log('Please guess the word: '+newArray+' ( '+wordLength+'-letter word: Pokemon themed!)');
	exports.word = targetWord;
	}
	
