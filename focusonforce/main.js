function loginUser(){
    console.log('Logging in user')
}

// Get the login-button lement and add the event listener 
//using the addEventListener() method

// const loginButton = document.getElementById('login-button');
// loginButton.addEventListener('click',function(event){
//     loginUser(event);
// })

// loginButton.addEventListener('mouseover',function(event){
//     event.target.style.color ='white';
// })

// loginButton.addEventListener('mouseleave',function(event){
//     event.target.style.color='black';
// })

function onClickItem(event){
    let text = event.target.textContent; 
    console.log(`Mouse coordinates:${event.clientX},${event.clientY}`)
    console.log(`Captured text:${text}`)
}
document.querySelector('ol').addEventListener('click',onClickItem)

//Example of an anonymous event listener
let button = document.querySelector('button');
button.addEventListener('click',function(e){
    console.log('Timer starts now...')
});

//Example of named event listener

function startTimer(){
    console.log('Timer starts now..')
}
button.addEventListener('click',startTimer); 


// A named listener allows it to be easily removed using removeEnveListener();
button.removeEventListener('click',startTimer)