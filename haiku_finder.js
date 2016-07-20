var structure = eval(process.argv[2])
var book = require('./sorted_waste_land')
//var doc = require('./' + process.argv[3]).bookSyllableCounts;
var stringOfSyllableCounts = book.bookSyllableCounts;
var wordsInBook = book.sortedWasteLand;
//var doc = "3422211121221111423323423423222111212211114234234"

function findHaiku(structure,string,array){
	var haiku = ""

	structure.forEach(function(line){
		line = line.join("");
		//console.log(line);
		var match = null
		var matches = []
		var regex = new RegExp(line,"g");

		while ((match = regex.exec(string)) != null){
			matches.push(match.index);
		}
		
		//console.log(matches);
		var randomMatch = matches[Math.floor(Math.random() * matches.length)];
		//console.log(randomMatch);
		haiku += " " + array.slice(randomMatch,randomMatch + line.length).join(" ") + "\n";
	})
	return haiku;
}



console.log(findHaiku(structure,stringOfSyllableCounts,wordsInBook));
//console.log(findHaiku(structure,doc,words));
// console.log(numOfWords);
//haiku patterns

//1,2,2
//2,3,1,1
//2,1,2

//[1,2,2,2,3,1,1,2,1,2]

//[[2,2,1],[1,1,2,1,2],[2,1,1,1]]
