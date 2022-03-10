const msg = document.getElementById('message');
msg.innerHTML = '<span>Good Morning</span>';

//The following properties and attributes are available in the DOM element

console.log(msg.tagName); //tag name of the element
console.log(msg.innerHTML); //HTML content of the element
console.log(msg.classList); //class attributes of the element

//retreive the value of a specified attribute
console.log(msg.getAttribute('id'));
//retreive the size and position relative to the viewport
console.log(msg.getBoundingClientRect());


