//job queue
console.log('start');
setTimeout(function(){
    console.log(`timeout`)
},0);

var promise = new Promise(function(resolve,reject){
    resolve();
});

promise.then(function(resolve){
    console.log('promise 1')
})
.then(function(resolve){
    console.log('promise 2')
});
console.log('end');