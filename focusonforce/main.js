try{
    console.log(`Hello from try block`)
    let value="{ash}"
    JSON.parse(value)
    console.log(`Hurray`)
}

catch(err){
    console.log(`Error from catch block`)
}

finally{
    console.log(`Hello I am from finally`)

}

