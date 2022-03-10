let arr =[]; 
const paragraphs = document.querySelectorAll('p'); 
for(let elem of paragraphs){
    elem.style.color ='red';
    arr.push(elem.innerHTML)
}

console.log(arr)


