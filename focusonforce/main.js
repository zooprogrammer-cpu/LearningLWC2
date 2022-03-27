// //hoisting example 1
// var variable =10;
// function test(){
//     console.log(variable)
//     var variable = 20;
//     console.log(variable)
// }

// test() //prints 
//undefined
//20

//hoisting example 2

var variable = 10;
function test2(){
    console.log(variable)
    variable = 20; 
    console.log(variable)
}
test2()  
// prints 10
// prints 20 



