// let allows us to make use of block scoping(like loop, etc). var has function scope but no block scope.

var message = 'Hi'

{
    var message = 'Bye'
}

console.log(message)        //Bye

let message2 = 'Hi'

{
    let message2 = 'Bye'
}

console.log(message2)        //Hi


//let creates a different copy each time it traverses through the loop, and hence different values
//If we use var i instead of let i, all the function would refer to the same i. Hence the same value of 9...
var fs = []

for(let i=0; i<10; i++){
    fs.push(function(){
        console.log(i)
    });
}

fs.forEach(function (f){
    f();                            //0,1,2,3,...,9
});


var fs2 = []

for(var j=0; j<10; j++){
    fs2.push(function(){
        console.log(j)
    });
}

fs2.forEach(function (f){
    f();                            //9,9,9,9,...,9
});


