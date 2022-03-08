//This has an event handler for each div
// The useCapture parameter is set to false 


document.getElementById('outer').addEventListener('click',function(e){
    console.log('Click event received by outer div')
},true);

document.getElementById('inner').addEventListener('click',function(e){
    console.log('Click event received by inner div')
},true)
