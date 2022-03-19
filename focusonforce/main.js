const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
xhr.onload= function(){ //callback function
    let todo =JSON.parse(xhr.responseText);
    console.log(todo)
};
xhr.send(null)