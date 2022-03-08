//This has an event handler for each div
// The useCapture parameter is set to false 


document.getElementById('outer').addEventListener('click',function(e){
    console.log('Click event received by outer div')
},false);

document.getElementById('inner').addEventListener('click',function(e){
    e.stopPropagation();
    console.log('Click event received by inner div')
},false)
