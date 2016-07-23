
var fs = require('fs');
var cmuDict = readCmudictFile('./cmudict.txt');
var wordObj = wordSorter(cmuDict)
function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function wordSorter(document){
	var lines = document.toString().split("\n"),
		lineSplit
	var output = []
		var output = {
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
		}

	lines.forEach(function(line){
		lineSplit = line.split(" ");
		var counter = 0;

		for (var i = 2; i < lineSplit.length; i++){
			if (lineSplit[i].match(/\d/)){
				counter ++
			}
		}
		if (counter > 0 && counter <= 7){
			var key = counter.toString();
			output[key][lineSplit[0]] = counter;		
		}
	});
	return output;
}


module.exports = {
	wordObj: wordObj
}