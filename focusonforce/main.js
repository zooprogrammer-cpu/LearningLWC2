// some method
var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

oldPeople = people.some(function(currItem,index,actualArr){
    return currItem.age>30
})

console.log(oldPeople)
// returns true