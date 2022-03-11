//setup a request function. It is an async function as seen by the async keyword
const request = async()=>{
    try{
        // get data from this site that allows us to work with data fetch
        const url = 'https://jsonplaceholder.typicode.com/users/7';
        //Invoke the fetch() method using the specified url and the 'GET' method.
        //This returns a promise. We don't want to execute the rest of the code
        //until we have the promise back. 
        //So we use await keyword 
        const response = await fetch(url,{method:'GET'});
        //Use the json() method to get the parsed data from the response. 
        //This also returns a promise so we need to wait for that to return
        const data = await response.json();
        let string ='';
        //Iterate over all the keys in the data using a for....in loop.
        for (key in data){
            string +=`${key} => ${JSON.stringify(data[key])}<br/>`;
        }
        //put it in the HTML page using the DOM API and set innerHTML to the string
        document.getElementById('data').innerHTML = string; 
    } catch(error){
        document.getElementById('data').innerHTML = error;
    }
}
//invoke the fecth method
request();




