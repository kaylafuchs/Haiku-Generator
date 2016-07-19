
var fs = require('fs');
var cmuDict = readCmudictFile('./cmudict.txt');
var wordArray = [wordSorter(cmuDict,1),wordSorter(cmuDict,2),wordSorter(cmuDict,3),wordSorter(cmuDict,4),wordSorter(cmuDict,5),wordSorter(cmuDict,6),wordSorter(cmuDict,7)]

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function wordSorter(document,number){
	var lines = document.toString().split("\n"),
		lineSplit
	var output = []

	lines.forEach(function(line){
		lineSplit = line.split(" ");
		var counter = 0;

		for (var i = 2; i < lineSplit.length; i++){
			if (lineSplit[i].match(/\d/)){
				counter ++
			}
		}
		if (counter == number){
			output.push(lineSplit[0]);
		}
	});
	return output;
}


module.exports = {
	wordArray: wordArray,
}