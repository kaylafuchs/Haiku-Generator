// haiku_generator should take two command line arguments: a structure (array of numbers)
// and a document (file name of js file that sorts a document like cmu dictionary by syllable numbers)
var structure = process.argv[2].replace(/\W/g,"").split("").map(Number);
var doc = require('./' + process.argv[3]).wordArray;

function createHaiku(structure,doc){
	var haiku = ""
	var counter = 0;

	structure.forEach(function(num){
		var syllableArray = doc[num - 1]
		haiku += " " + syllableArray[Math.floor(Math.random() * syllableArray.length)].replace(/[^a-zA-Z]/g,"");
		counter += num;
		if (counter == 5 || counter == 12 || counter == 17){
			haiku += "\n";
		}
	});
	if (counter != 17){
		return "You entered " + counter + " syllables instead of 17, so this isn't really a haiku.\n" + haiku;
	}
	return haiku;
}

console.log(createHaiku(structure,doc));
