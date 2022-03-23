
//create a promise and store it in a variable, p
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
});

p.then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 3;
});
