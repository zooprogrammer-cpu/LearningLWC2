var x =[
    {name:"Ash", language:"javaScript", age:37},
    {name:"Dug", language:"bark", age:4}
]
x.forEach(item=>{
    console.group(item.name)
    console.log(`${item.name} is ${item.age} old`) 
    console.log(`${item.name} is a ${item.language} developer`) 
    console.groupEnd(item.name)
})


