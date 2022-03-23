// function foo(){
//     console.log('I');
//     console.log('cannot');
//     console.log('pause');
// }
// foo();

function* generate(){
    console.log('Invoked 1st time');
    yield 9; 
    console.log('invoked 2nd time');
    yield 8;
}

let gen = generate()

