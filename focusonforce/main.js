function displayName(name){
    console.log(name);
}

function displayNameDecorator(fn){
    return function(name){
        const str = `Welcome to the hotel, ${name}`;
        fn (str);
    }
}

const customerName = displayNameDecorator(displayName);
customerName(`John Wayne`);