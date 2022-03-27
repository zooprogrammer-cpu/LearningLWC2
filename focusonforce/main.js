//Arrays
//1. Array Literal 
var arr = [1,2,3,4,5]
var arr2 = ["sun","moon"]
var mixedArr = [true, 1,"three"]


//2. Array constructor method
var stringArray = new Array()
stringArray[0] = "one"

var numericArray = new Array(3)
console.log(numericArray)//3 blocks available but empty
console.log(numericArray.length) // prints 3
numericArray[0] = 9;
numericArray[1] =8;
numericArray[2]=2;
numericArray[3]=6;
console.log(numericArray)// prints 9,8,2,6

//Pass value to constructor directly
var mixedArray = new Array(4,"two",89)
console.log(mixedArray)

