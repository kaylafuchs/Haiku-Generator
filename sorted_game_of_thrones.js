var fs = require('fs');
var book = readBook('./game_of_thrones.txt');
var dictionary = require('./sorted_cmu_dictionary.js').wordObj;
var words = book.replace(/\W+/g," ").split(" ");
var syllableCounts = ""


function readBook(file){
	return fs.readFileSync(file).toString();
}

function syllableCounter(doc){
	doc.forEach(function(word){
		var found = false;
		for (var key in dictionary){
			if (dictionary[key].hasOwnProperty(word.toUpperCase())){
				syllableCounts += key;
				found = true;
			} 
		}
		if (!found){
			syllableCounts += "0";
		}
	})
	return syllableCounts;
}

syllableCounter(words);


module.exports = {
	words: words,
	syllableCounts: syllableCounts
}
