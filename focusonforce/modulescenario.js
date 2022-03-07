

const btn = document.getElementById('btn-print');

btn.addEventListener('click', loadModulePrint);
function loadModulePrint() { 
    let num; //initialize num as integer
    import ('./print.js')
    .then((module)=>{
        module.add(num)
    })
}
