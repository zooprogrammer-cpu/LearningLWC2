const canvas = document.getElementById('myCanvas'); //get the canvas element
let ctx = canvas.getContext('2d');   //get the canvas drawing context
ctx.strokeStyle ='green';           // set the color
ctx.lineWidth =10;                //set the line width
ctx.strokeRect(10,10,150,100);
ctx.strokeStyle ='blue';          //change the color
ctx.lineWidth =5;                 //change the line width
ctx.strokeRect(50,100,50,150);    //render a blue rectangle at a new position
ctx.strokeStyle='red';    //change the color
ctx.lineWidth =15;            //change the line width
ctx.strokeRect(120,50,150,200);