//promiseObject.then(onFulfilled,onRejected); 
//wrapping the previous example in another function called
//makeTaskPromise
function makeTaskPromise(completed){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if (completed){
                resolve("task completed")
            } else {
                reject("task is rejected")
            }
        },5000)
    })
}
//promise gets stored in task
//change promise to false for catch method example
var task = makeTaskPromise(true); 
//once the promise is received, we need then method
//to see what the result is
task.then(
    success=>console.log(success),
    failure=>console.error("error from then method",failure)
    )
.catch(error=>console.error("error",error)
).finally(()=>{
    console.log("promise completed")
})

//standard notation version of the arrow function above- 
// task.then(function(success){
//     console.log(success)
// },function(error){
//     console.log(error)
// })

//finally method - third property  - irrespect of success or failure
// you want to execute something such as spinner

