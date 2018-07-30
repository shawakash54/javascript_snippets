//In ES6, we can set default values to function arguments to prevent it from being undefined

function greet(greeting, name){
    console.log(greeting +", "+ name);
}

greet();                        //undefined, undefined

function greet2(greeting, name="Shaw"){
    console.log(greeting +", "+ name);
}

greet2();                       //undefined, Shaw

greet2("Hello");                //Hello, Shaw
greet2("Hello", "Akash")        //Hello, Akash


//We can also make function as default values
/*
function create(complete){
    complete();
}

create()                        //undefined is not a function
*/


function create2(complete=()=>console.log('Here')){
    complete();
}
create2();                      //Here

