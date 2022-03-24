let name ="bob"
try{
    if (name!=='ash'){
        throw new Error("Something is wrong with the name")
    } else {
        console.log ("All good")
    }

}

catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)
}




