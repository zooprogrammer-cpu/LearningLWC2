//map method
//map - heavily used in LWC. It takes a callback. 
//callback is a function that passes an arguement to antoher function
//helpful when creating a checkbox or picklist

var people = [
    {name:"ash", age: 37},
    {name:"brita", age: 33},
    {name:"dug",age:4}
]

console.log(people)
//0: {name: 'ash', age: 37}
//1: {name: 'brita', age: 33}
//2: {name: 'dug', age: 4}

newPeople = people.map(function(currItem,index,actualArr){
    console.log("currItem",currItem);
    console.log("index",index);
    console.log("actualArr",actualArr);
    //currItem {name:'ash', age:37}
    //index 0 
    //actualArr 
    //0: {name: 'ash', age: 37}
    //1: {name: 'brita', age: 33}
    //2: {name: 'dug', age: 4}

    return {"key":currItem.name, "value":currItem.age}

})

console.log(newPeople)
//0: {key: 'ash', value: 37}
//1: {key: 'brita', value: 33}
//2: {key: 'dug', value: 4}


