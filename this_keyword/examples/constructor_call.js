/*
    In JS, any call with the new operator infront of the function will turn it into a constructor call.
    When a function is invoked as a constructor, a brand new object is created for us and then it is used for `this` binding for 
    the particular function call.
*/

"use strict"
function Person(firstName, lastName){
    //this will be linked to the Person function prototype
    console.log(this)                       // Person {}
    this.firstName = firstName;
    console.log(this)                       // Person { firstName: 'Akash' }
    this.lastName = lastName;
    console.log(this)                       // Person { firstName: 'Akash', lastName: 'Shaw' }
    

    /*
        since the Person function doesn't have a return statement. That is the reason the Person object that
        was created is returned. It is like an invisivle `return this` statement at th end of the function.
        If we try to return something else other than the object, the JS engine will simply ignore it, and return
        the newly created object.

        In dev environment, we can also use proxy here to tell the user if they try to access some unset values.
    */
}
const person = new Person('Akash', 'Shaw')
console.log(person.firstName)       //Akash
console.log(person.lastName)        //Shaw

