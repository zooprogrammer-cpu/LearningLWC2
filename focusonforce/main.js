// sort method for strings. mutates original array
var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

people.sort(function(a,b){
    return (a.name>b.name) ? 1:(a.name<b.name)? -1:0
})

console.log(people)
/*
0: {name: 'ash', age: 37}
1: {name: 'brita', age: 33}
2: {name: 'dug', age: 4}
*/
