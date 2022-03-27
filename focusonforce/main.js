//reduce method

var numbers =[1,2,3,4,5]

numbers.reduce(function(total,currItem,index,actualArr){
    console.log("total:", total) 
    console.log("current value is:", currItem)
    return total+currItem
},0)
/*

main.js:6 total: 0
main.js:7 current value is: 1
main.js:6 total: 1
main.js:7 current value is: 2
main.js:6 total: 3
main.js:7 current value is: 3
main.js:6 total: 6
main.js:7 current value is: 4
main.js:6 total: 10
main.js:7 current value is: 5
*/