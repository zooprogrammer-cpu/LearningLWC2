// //when onchange event occurs (the cursor leaves the password field), user and password are stored in variables
// function checkPassword(){
//     let pass = document.getElementById('pass').value;
//     let user = document.getElementById('user').value
//     console.log(user,pass)
// }

// oneventhandler direclty in javascript

document.getElementById('pass').onchange = function(event){
    let pass = document.getElementById('pass').value;
    let user = document.getElementById('user').value;
    console.log(user,pass);
}
