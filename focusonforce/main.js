//When the page loads, this JavaScript code uses getItem() to get the name from the local storage and display it
if (typeof(Storage) !== "undefined") {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName || lastName) document.getElementById("welcome").innerHTML = `Welcome back, ${firstName ? firstName : ''}${lastName ? ' ' + lastName : ''}!`;
}
    
// This function uses setItem() to store both First Name and Last Name in local storage.
const save = (event) => {const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
if (firstName && lastName) {
    // Call setItem() to store in local storage.        
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);        
    document.getElementById("thankyou").innerHTML= `Thank you, ${firstName}${lastName}!`;    
}
}
// This function uses removeItem() to remove the First Name from localStorage.
const clearFirstName = (event) => {    
    localStorage.removeItem('firstName');     
    document.getElementById("firstName").value = '';
    
}// This function uses clear() to clear the local storage.
const clearAll = () => {    
    localStorage.clear();
}

