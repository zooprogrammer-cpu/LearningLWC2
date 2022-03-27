// every method
//return true or false if all elements satisfy condition
var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

x = people.every(function(currItem, index,actualArr){
    return currItem.age>8

})

console.log(x) //false