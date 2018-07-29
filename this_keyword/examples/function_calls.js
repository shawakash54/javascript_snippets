/*
    The value of this in function is determined by how the function has been invoked.
    Value of this keyword can be different depending on the execution of the function.
*/


/*
    Without strict mode, this is set to global.
    It does not matter if the calling side is in strict mode, all that matters is that the 
    function is in strict mode or not.
*/


/*
"use strict";
function func(){
    console.log(this === undefined);            //true
}
func()
*/


/*
function func(){
    console.log(this === global);            //true
}
func()
*/


/*
function func(){
    "use strict";
    console.log(this === undefined);            //true
}
func()
*/


/*
//without the strict mode the following will set the variables to global object
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const person = Person('Akash', 'Shaw')
console.log(person)                 //undefined
console.log(global.firstName)       //Akash
console.log(global.lastName)        //Shaw

//But the above is not what we intended to do. Now let's check it with strict mode
*/


/*
"use strict"
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const person = Person('Akash', 'Shaw')

//It will throw an error because the this keyword inside the function is not undefined. To use it properly
//we need to pass it inside the constructor(creating the person instance using new keyword), 
//so that the this keyword will be set to the present instance.
*/


"use strict"
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const person = new Person('Akash', 'Shaw')
console.log(person.firstName)       //Akash
console.log(person.lastName)        //Shaw
