// should take two command line arguments, an array made up of arrays of 
// integers with one array per line of haiku, e.g. [[2,2,1],[1,1,2,1,2],[2,1,1,1]]
// and a file name for a file that sorts a text into a string of syllable counts,
// e.g. sorted_game_of_thrones.js

var structure = eval(process.argv[2])
var book = require('./' + process.argv[3]);

function findHaiku(structure,string,array){
	var haiku = ""

	structure.forEach(function(line){
		line = line.join("");
		var match = null
		var matches = []
		var regex = new RegExp(line,"g");

		while ((match = regex.exec(string)) != null){
			matches.push(match.index);
		}		
		var randomMatch = matches[Math.floor(Math.random() * matches.length)];
		haiku += " " + array.slice(randomMatch,randomMatch + line.length).join(" ") + "\n";
	})
	return haiku;
}

console.log(findHaiku(structure,book.syllableCounts,book.words));
