// let x =10;
// function timesTen(a){
//     return a * 10
// } 

// let y = timesTen(x);
// console.log (y)

////// task(message) is a Blocking function that 
//is taking a long time to execute

function task (message){
    let n = 100000000;
    while (n>0){
        n--;
    }
    console.log(message)
}

console.log(`Start the script..`)
task (`Download a file`)
console.log(`Done`)