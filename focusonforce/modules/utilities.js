function saveFunc(){
    console.log(`File has been saved`)
}
function openFunc(){
    console.log(`File has been opened`)
}

export{saveFunc as save,openFunc as open}