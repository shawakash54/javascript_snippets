/*
    Calling sayHi() with person as a receiver without attaching sayHi() to person first.
    It can be done using call() or apply() method.
*/

function sayHi(){
    console.log(`My name is ${this.firstName}`);
}

const person = {
    firstName: 'Shaw'
};

sayHi.call(person)                              //My name is Shaw
sayHi.apply(person)                             //My name is Shaw
//In the above, the person supplied is called thisArg

// call and apply are the same. Only the way off supplying the arguments differ.

const numbers = [10, 20, 30, 40, 50];

const slice1 = numbers.slice(1,4)
const slice2 = numbers.slice.call(numbers, 1, 4)
const slice3 = numbers.slice.apply(numbers, [1,4])

console.log(slice1);                            //[ 20, 30, 40 ]
console.log(slice2);                            //[ 20, 30, 40 ]
console.log(slice3);                            //[ 20, 30, 40 ]



function fun(){
    console.log(this ===  global)
}

//if we set the call or apply's thisArg to null or undefined, JS assigns this to the global object instead. But in strict mode
// this won't happen

fun.call(null)                          //true
fun.call(undefined)                     //true

fun.apply(null)                         //true
fun.apply(undefined)                    //true


function fun2(){
    "use strict";
    console.log(this ===  global)           
}

fun2.call(null)                         //false
fun2.call(undefined)                    //false

fun2.apply(null)                        //false
fun2.apply(undefined)                   //false