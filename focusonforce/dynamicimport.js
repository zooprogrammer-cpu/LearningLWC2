let a = 6
let b= 7
function loadModule(a,b){
    import("./modules/modules.js")
    .then((module)=>{
        console.log(`Hello`)
        module.dividenow(a,b)
    })
}

loadModule(6,7)
