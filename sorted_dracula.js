var fs = require('fs');
var dracula = readDracula('./dracula.txt');
var dictionary = require('./sorted_cmu_dictionary.js').wordArray;
//var testDoc = "Words should be in dictionary fertilization."
var sortedDracula = dracula.replace(/\W+/g," ").split(" ");
var bookSyllableCounts = ""


function readDracula(file){
	return fs.readFileSync(file).toString();
}

function syllableCounter(doc){
	doc = doc.replace(/[\W_]/g," ").split(" ");
	//console.log(doc);
	doc.forEach(function(word,index){
		for (var i = 0; i < dictionary.length; i++){
			if (dictionary[i].indexOf(word.toUpperCase()) > -1){
				bookSyllableCounts += i + 1;
			}
		}
	})
	return bookSyllableCounts;
}

syllableCounter(dracula);


module.exports = {
	sortedDracula: sortedDracula,
	bookSyllableCounts: bookSyllableCounts
}