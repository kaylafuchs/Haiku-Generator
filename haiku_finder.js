// haiku_generator should take two command line arguments: a structure (array of numbers)
// and a document (file name of js file that has turned a book into an array of words with their syllable counts)

var structure = process.argv[2].replace(/\W/g,"")//.split("").map(Number);
//var book = require('./sorted_divine_comedy')
var book = require('./sorted_dracula')
//var doc = require('./' + process.argv[3]).bookSyllableCounts;
//console.log(typeof structure, structure);
var stringOfSyllableCounts = book.bookSyllableCounts;
var wordsInBook = book.sortedDracula;
//var doc = "3422211121221111423323423423222111212211114234234"
//var words = ["Word1","word2","word3","word4","word5","word6","word7","word8","word9","word10","word11","word12","word13","word14","word15","word16","word17","word18","word19"]

function findHaiku(structure,string,array){
	var haikuArray = [];
	var haiku = ""
	var counter = 0;
	var numOfWords = structure.length
	var regex = new RegExp(structure,"g");
	var matches = [],
	match

	while ((match = regex.exec(string))!= null){
		matches.push(regex.lastIndex);
	}
	haikuArray = array.slice((matches[0] - numOfWords),matches[0]);

	structure.split("").map(Number).forEach(function(num,index){
		haiku += haikuArray[index] + " ";
		counter += num;
		console.log(counter);
		if (counter == 5 || counter == 12 || counter == 17){
			haiku += "\n";
		}
	});
	return haiku;
}

console.log(findHaiku(structure,stringOfSyllableCounts,wordsInBook));

//console.log(structure);


//haiku patterns

//1,2,2
//2,3,1,1
//2,1,2

//[1,2,2,2,3,1,1,2,1,2]