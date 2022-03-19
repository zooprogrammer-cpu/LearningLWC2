// Sets and Maps

// Set is created from an array so that only unique values are included. 
let decades = [1990,1990,2000,2010]
let uniqueDecades = new Set(decades)
uniqueDecades.add(2005)
console.log(uniqueDecades)  //outputs Set(4) {1990, 2000, 2010, 2005}

//map is used instead of object to store values 
let quizScores = new Map()
quizScores.set('quiz1',[100,200,300,400])
quizScores.set('quiz2',[234,231,564,789])
quizScores.set('quiz3',[456,789,012,333])

console.log(quizScores.values())
//prints
//MapIterator {Array(4), Array(4), Array(4)}

//console.log(`Quiz1 values are:`,quizScores)
