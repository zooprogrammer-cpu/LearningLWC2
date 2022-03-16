let items= [
    {name: 'Laptop X1000', price:2, quantity:1},
    {name: 'Laptop X2000', price:5, quantity:2},
    {name: 'Laptop X3000', price:6, quantity:3},


]

const total = items.reduce((accumulator, value)=>{
return(accumulator + value.price * value.quantity)},0)

console.log(total)