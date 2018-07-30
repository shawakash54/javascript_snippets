/*
 We concat string in JS using + symbol in ES5
 In ES6, we use template literals to do it
*/

var salutation = 'Hello'

var greeting = salutation + ', World.'

var greeting2 = `${salutation}, World.`         //template literal example

//template literals also preserve newlines and spaces
//We can also do expressions inside the braces

var x=1
var y=2
var equation = `${x} + ${y} = ${x + y}`

console.log(equation)           //1 + 2 = 3


function tag(strings, ...values){           //strings will contain static content of the template literal and values the value inside ${} and both are arrays.
    if(values[0] < 20) {                    //values[0] contains new Date().getHours()
        values[1] = "awake";
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}


var message = tag`It's ${new Date().getHours()} I'm ${""}`;         //format a string literal based upon the value