try{
    setTimeout(function(){
        try{
            abc //script will di here
        } catch(err){
            console.error("setTimeout exception won't work")
        } 
    },1000)
}
catch(err){
    console.log(`Error from catch block`)
}
console.log(`Outside try and catch`)




