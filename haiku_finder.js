// haiku_generator should take two command line arguments: a structure (array of numbers)
// and a document (file name of js file that has turned a book into an array of words with their syllable counts)

var structure = process.argv[2].replace(/\W/g,"").split("").map(Number);
var doc = require('./' + process.argv[3]).bookWithSyllableCount;


function findHaiku(structure,doc){
	var haiku = ""
	var counter = 0;

	structure.forEach(function(num){
		haiku += doc[5];

	});
	return haiku;
}

//console.log(findHaiku(structure,doc));

console.log(doc);