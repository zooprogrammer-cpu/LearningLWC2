
//create a promise and store it in a variable, p
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
});

p.then((result)=>{
    console.log(result);
    return result * 2;
}).then((result1)=>{ //the previous promise is capture by then
    console.log(result1);
    throw new Error("Something is Wrong")
}).catch (error=>console.error(error))//catch to hold the error for then and promise 
