function setVariables(){
    let maxVisitors = 1000; //set a local variable
    window.minVisitors = 25; // set a global variable
}

let [userid,timestamp] = [15,1606801541];
let state ={id: userid, ts:timestamp};
let url ="?id=" + userid +'&ts=' + timestamp; 
//push an entry to the browser's history stack
window.history.pushState(state,'', url);

setVariables();
console.log('this=== window:', this === window);
console.log('minVisitors:', minVisitors);
console.log('this.minVisitors:', this.minVisitors);
console.log('maxVisitors:', maxVisitors);
