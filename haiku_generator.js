// haiku_generator takes two command line arguments: a structure (array made up of 3 arrays of numbers, one for each line)
// and a document (file name of module that sorts a document like cmu dictionary by syllable numbers into a wordArray)
// eg: node haiku_generator.js [[2,3],[4,3],[1,1,2,1]] sorted_cmu_dictionary.js

var structure = eval(process.argv[2])
var doc = require('./' + process.argv[3]).wordArray;

function createHaiku(structure,doc){
	var haiku = ""
	structure.forEach(function(line){
		line.forEach(function(num){
			var syllableArray = doc[num - 1];
			haiku += " " + syllableArray[Math.floor(Math.random() * syllableArray.length)].replace(/[^a-zA-Z]/g,"");
		});
		haiku += "\n";
	});
	return haiku;
}

console.log(createHaiku(structure,doc));
