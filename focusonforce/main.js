let locationElement = document.getElementById('location');//use DOM APi to grab location
const options ={ //These are options to be passed to the getCurrentPosition() method.
    enableHighAccuracy :true, //Enable high accuracy.
    timeout: 5000, //Amount of time before the error callback is invoked.
    maximumAge: 0 //Maximum cached position age in milliseconds.
};

// if getCurrentPosition is successful
const handleSuccess =(position) =>{
    const result = position.coords; //save the coordinates of the location
    let message ='You are at:<br/>' +
    `Latitude: ${result.latitude}<br/>`+
    `Longitude: ${result.longitude}</br>`+
    `+/- ${result.accuracy} meters.`;
    locationElement.innerHTML = message; 
}
// if getCurrentPosition is not successful
const handleError = (error) =>{
    console.warn(`ERROR(${error.code}): ${error.message}`);
}
// this is the method that is called when the get location button is clicked and this 
//uses the geolocation API
const getLocation = ()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(handleSuccess,handleError,options);
    } else{
        locationElement.innerHTML ='Sorry, this browser does not support Geolocation';
    }
}



