window.onpopstate= function(event){
    document.getElementById('message').innerHTML = `You are here:${document.location}, state:${JSON.stringify(event.state)}`;
}
const backward=()=>{ //Navigate backward one step in the history stack or use history.go(-1)
    history.back();
}
const forward =()=>{ //Navigate forward one step in the history stack or use history.go(1)
    history.forward(); 
}

//Replace the top page of history stack with this page by calling the replaceState() method of the hostory object
const replace=()=>{
    history.replaceState(
        {page:3},  //a JavaScript object that represents the state of a page
        "Page 3",  //the page title
        "?page=3") //the page URL which replaces the top of the history stack 
    
}
//Push a page to the history stack by calling the pushState() method of the history object
const push =(state,title,url)=>{
    history.pushState(
            state,  //a JavaScript object that represents the state of a page
            title,  // the page title
            url);   // the page URL that is added to the history stack
        
}