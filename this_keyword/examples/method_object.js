const person = {
    firstName: "Akash",
    sayHi(){
        console.log(`Hi! My name is ${this.firstName}!`);
    }
};

person.sayHi();                                      //Hi! My name is Akash!
/* Here person is the receiver of the method call. Hence any function set to the receiver will set it's `this` to the receiver */

/* If it is like foo.bar.person.sayHi()
    For this as well, the immediate receiver for sayHi() function is person
*/

// When we set the sayHi() to a variable, the receiver is lost and this refers to the global object and not to person anymore

const greet = person.sayHi; 
greet();                                             //Hi! My name is undefined!

/*
    Usually it occurs, when we pass function as a callback to another function. setTimeout below will call sayHi with this set
    to the global object which is not intended 
*/

setTimeout(person.sayHi, 1000);                     //Hi! My name is undefined!

// One solution to above is to pass person.sayHi as a wrapper function and it won't lose it's receiver

setTimeout(function(){
    person.sayHi();                                 //Hi! My name is Akash!
}, 1000)

//Another solution is the bind method - which allows us to bind this to a specific object.

setTimeout(person.sayHi.bind(person), 1000)         //Hi! My name is Akash!