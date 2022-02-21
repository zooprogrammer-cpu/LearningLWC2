
// JSON stringify example
const jsObject ={
    song: {
        title: 'Together we\'re friends',
        artist: 'Blue Jays Choir',
        length: 3.5,
        genre: 'Country'
    }
};

const jsonString = JSON.stringify(jsObject);
console.log(jsonString);

// JSON parse example
const jsonString2='{"profile":{"name":"Caryn Brown","children":null,"age":24,"smoker":false,"hobbies":["biking","hiking","sailing"]}}';
const jsObject2 = JSON.parse(jsonString2);
console.log(jsObject2);
console.log(jsObject2.profile.hobbies)

// JSON text data
const prodJSON = '{ "name" : "White T-shirt","brand":"American Eagle", "price": 5.99,"inventory":[{"size":"M", "quantity": 150},{"size":"L","quantity": 100}],"returnable":true,"customization": null}';

//parses JSON data
const productsJs = JSON.parse(prodJSON)

//Log product name
console.log('Product Name =>',productsJs.name)

//Log product brand name
console.log('Product brand name =>',productsJs.brand.name);

//Access data inside array
console.log('Product size =>',productsJs.inventory[1].size, '\t', 'Product qty=>',productsJs.inventory[1].quantity)

// log key-value pairs using for...in loop
for(let item in productsJs){
    // log inventory item 
    console.log(item,'=>',productsJs[item]);
}

//Log key-value paids using Object.entries()
console.log('Object.entries()=>');
console.log(Object.entries(productsJs));
