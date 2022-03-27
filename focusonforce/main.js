//scope pollution
let num = 50; 
function logNum(){
    num = 100
    console.log(num)
}

logNum() //prints 100
console.log(num) //prints 100
