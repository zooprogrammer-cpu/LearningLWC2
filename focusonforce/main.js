//synchronous callback
let numbers =[1,2,3,4,5,6,7,8];
const num = numbers.filter(item=>item>4);
console.log(num)

//1. asynchronous callback - callback is a function 
//passed into another function as an arguement
function loadData(callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/orgs/nodejs')
    xhr.onload = function(){
        callback(xhr.response)
    }
    xhr.send()
}

loadData(function(result){
    console.log(result)
})
console.log("data is present") // this prints first

//2. generate asynchronocity using setTimeout

setTimeout(function(a,b){
    console.log(a)
    console.log(b)
},5000,"Salesforce", "Hello")

//callback hell