// sort method
var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

people.sort(function(a,b){
    return a.age - b.age
})

console.log(people)
/*0: {name: 'dug', age: 4}
1: {name: 'brita', age: 33}
2: {name: 'ash', age: 37}
*/