try{
    hello

}

catch(err){
    console.log(err.name) // reference error
    console.log(err.message) // ex, hello is not defined
    console.log(err.stack) // name:message
}




