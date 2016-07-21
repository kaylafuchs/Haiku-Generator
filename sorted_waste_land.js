var fs = require('fs');
var wasteLand = readWasteLand('./the_waste_land.txt');
var dictionary = require('./sorted_cmu_dictionary.js').wordArray;
var sortedWasteLand = wasteLand.replace(/\W+/g," ").split(" ");
var bookSyllableCounts = ""


function readWasteLand(file){
	return fs.readFileSync(file).toString();
}

function syllableCounter(doc){
	var found = false;
	doc.forEach(function(word){
		for (var i = 0; i < dictionary.length; i++){
			if (dictionary[i].indexOf(word.toUpperCase()) > -1){
				bookSyllableCounts += (i + 1);
				found = true;
			} 
		}
		if (!found){
			bookSyllableCounts += "0";
		}
	})
	return bookSyllableCounts;
}

syllableCounter(sortedWasteLand);


module.exports = {
	sortedWasteLand: sortedWasteLand,
	bookSyllableCounts: bookSyllableCounts
}

console.log(bookSyllableCounts);