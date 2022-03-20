//promise creation
var completed = true //by default we set completed to true
var task = new Promise(function(resolve,reject){
    setTimeout(()=>{
        if (completed){
            resolve("task completed")
        } else {
            reject("task is rejected")
        }
    },5000)
})