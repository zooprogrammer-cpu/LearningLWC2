var accountCall = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('account fetched successfully');
        resolve(["Saving","Current"]);
    },1000)
});

var countryCall = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('country list fetched succesfully');
        resolve(["INDIA","AUSTRALIA"]);
    },2000)
});

var currencyList = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('currencyList list fetched succesfully');
        resolve(["INR","USD","AUD"]);
    },3000)
});
Promise.all([accountCall,countryCall,currencyList]).then(results=>{
    console.log("FORM LOADED SUCCESSFULLY",results)
})

