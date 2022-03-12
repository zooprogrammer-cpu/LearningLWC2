const urlstring = 'https://example.com:3000/path/page?name=Adam&age=31#profile/';
const urlobject = new URL(urlstring); //Create a URL object from the URL string
const wholeURL = new URLSearchParams(urlstring); //Create a URLSearchParams object from the whole URL string
const searchURL = new URLSearchParams(urlobject.search); //create a URLSeachParams object from the query string. 
const searchStrings =['somewebsite', 'name', 'age']; //create an array of strings to search for. 

console.log(`The URL String is:` , urlstring)
console.log(`The URL Object is:`, urlobject)
console.log(`The wholeURL is:`, wholeURL)
console.log(`The searchURL is:`, searchURL)
console.log(`The searchString is:`,searchStrings)

for (let item in searchStrings){
    urldiv.innerHTML += `<br/>Get ${searchStrings[item]} in ${urlstring} returns <strong>` + wholeURL.get(searchStrings[item]) 
    +`</strong></br>`;
    urldiv.innerHTML += `<br/>Get ${searchStrings[item]} in ${urlobject.search} returns <strong>` + searchURL.get(searchStrings[item])
    + `</strong></br>`;
}