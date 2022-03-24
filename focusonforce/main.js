function callApi(){
    console.time(`API TIMER`)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>{
            console.timeEnd('API TIMER')//prints time taken by the API
            console.table(json) //prints the response of the API
        })
}
callApi()


