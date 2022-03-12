
// const url = new URL(window.location.href)
// console.log(url)

// const pathname = url.pathname

// //console.log(`pathname`.pathname)

// console.log(`category => ${pathname.split('/')[1]}`);

const urlstring='http://bookbin.com/programming/search?name=JavaScript&year=2005&condition=used#used'
const urlobject = new URL(urlstring);

// urlobject.pathname returns a USVString which maps to a String object in JavaScript
const pathname = urlobject.pathname;

// Split the pathname separated by '/' and display the second half
console.log(`category => ${pathname.split('/')[1]}`);

// Extract the search parameters and print out each key-value pair// urlobject.searchParams returns a URLSearchParams object// In order to manipulate it as a string, it needs to be converted to one with .toString()
const paramstring = urlobject.searchParams.toString();
const paramslist = paramstring.split('&'); // This returns an array of strings previously separated by '&'
for (item in paramslist) { // Iterate over the array
    const pairs = paramslist[item].split('=');// Further split the string separated by '=' to return an array of 2 items  
    console.log(`${pairs[0]} => ${pairs[1]}`);// Display each key-value pair
}
