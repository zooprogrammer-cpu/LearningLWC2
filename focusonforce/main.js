var job1 = new Promise((resolve,reject)=> setTimeout(resolve,2000,'Job1 ready'))
var job2 = new Promise((resolve,reject)=> setTimeout(reject,1000,'Job2 ready'))
var job3 = new Promise((resolve,reject)=> setTimeout(resolve,3000,'Job3 ready'))


// Promise.all([job1,job2,job3]).then(results=>{
//     console.log("SUCCESSFUL",results)
// })

Promise.race([job1,job2,job3]).then(results=>console.log("result is here",results))
.catch(err=>{
    console.log("err",err)
})