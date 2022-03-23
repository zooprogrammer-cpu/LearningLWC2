//async and await
async function abc(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("Hello!"),3000)
    })
    let greeting = await promise
    return greeting
}
abc().then(result=>console.log(result))