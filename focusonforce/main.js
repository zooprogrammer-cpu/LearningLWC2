//reduceRight method

var numbers =[1,2,3,4,5]

numbers.reduceRight(function(total,currItem,index,actualArr){
    console.log("total:", total) 
    console.log("current value is:", currItem)
    return total+currItem
},0)

/*total: 0
main.js:7 current value is: 5
main.js:6 total: 5
main.js:7 current value is: 4
main.js:6 total: 9
main.js:7 current value is: 3
main.js:6 total: 12
main.js:7 current value is: 2
main.js:6 total: 14
main.js:7 current value is: 1
*/
