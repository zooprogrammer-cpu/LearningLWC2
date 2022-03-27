//array methods

//splice to remove. Updates exixsting array

x = ['a','b','c','d','e']
x.splice(2,2)
console.log(x) // a,b,e

//use splice to add. Updates exixsting array
y=['j','k','l','m'] 
y.splice(1,0,'hurray')
console.log(y) // (5) ['j', 'hurray', 'k', 'l', 'm']

//indexOf()
z = ['tom','bob','lucas','bob']
console.log(z.indexOf('bob')) //1

//lastIndexOf()
console.log(z.lastIndexOf('bob')) //3

//join array into a string
console.log(z.join('')) //tomboblucasbob

//join array with a specific seperator
console.log(z.join('-')) //tom-bob-lucas-bob

//slice returns a new array
var arr3 = ['4','5','8','2','1']
var newArr3 = arr3.slice(1,3)
console.log(newArr3) // ['5', '8']

//concat
conArr1 = ["This is a"]
conArr2 =["great day"]
conArr3=conArr1.concat(conArr2)
console.log(conArr3)  //(2) ['This is a', 'great day']


