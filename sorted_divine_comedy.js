var fs = require('fs');
var divineComedy = readDivineComedy('./divine_comedy.txt');
var dictionary = require('./sorted_cmu_dictionary.js').wordArray;
//var testDoc = "Words should be in dictionary fertilization."
var sortedDivineComedy = divineComedy.replace(/\W+/g," ").split(" ");
var bookSyllableCounts = ""


function readDivineComedy(file){
	return fs.readFileSync(file).toString();
}

function syllableCounter(doc){
	doc = doc.replace(/\W+/g," ").split(" ");
	doc.forEach(function(word,index){
		for (var i = 0; i < dictionary.length; i++){
			if (dictionary[i].indexOf(word.toUpperCase()) > -1){
				bookSyllableCounts += i + 1;
			}
		}
	})
	return bookSyllableCounts;
}

syllableCounter(divineComedy);


module.exports = {
	sortedDivineComedy: sortedDivineComedy,
	bookSyllableCounts: bookSyllableCounts
}