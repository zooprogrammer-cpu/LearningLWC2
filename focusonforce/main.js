//async and await
async function abc(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("Hello!"),5000)
    })
    console.log("start")
    let greeting = await promise
    console.log("end")
}
abc()