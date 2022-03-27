// filter method
var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

oldPeople = people.filter(function(currItem,index,actualArr){
    return currItem.age>30
})

console.log(oldPeople)

//{name: 'ash', age: 37}
//{name: 'brita', age: 33}