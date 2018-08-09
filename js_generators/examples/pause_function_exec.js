/*
In JS, function executed till they reach a return keyword or the end of the function
ES6 generators are different, they can be paused or resumed within a function
To create a generator we put an asterisk after the function keyword
*/

function* logger(){
    console.log(`first`)
    yield
    console.log(`second`)
    yield
    console.log(`third`)
}

const logg = logger()
logg.next()   //first
logg.next()   //second
logg.next()   //third