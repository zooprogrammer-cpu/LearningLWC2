//The outer div has an event listner for keypress event
//grabbing the e object and grabbing the key property
//from keypress event
document.getElementById('outer').addEventListener('keypress',function(e){
    console.log('Outer div received a keypress:',e.key)
});

//checkName function- 
//Prevent anything but letters from showing 
//using preventDefault while allowing charCode 8 (backspace)
//in case the user needs to delete a chracter
function checkName(e){
    let char =e.key;
    let charCode=e.charCode;
    let alphabet ='abcdefghijklmnopqrstuvwxyz';

    // if not a backspace or not a letter, 
    //we call preventDefault to prevent putting it in that field
    if (charCode != 8 && !alphabet.includes(char.toLowerCase())){
    e.preventDefault()
}
}

//grab the field here and add the addEventListener 
//for the keypress event and we call the function checkName
const nameField = document.getElementById('name');
nameField.addEventListener('keypress',checkName);