/*When we pass a method as a callback to a function, we lose the intended receiver of the method.
We can solve it using bind method. It will create a new sayHi function and permanently set as this value to person
*/

const person = {
    firstName: 'Shaw',
    sayHi(){
        console.log(`My name is ${this.firstName}`);
    }
};

//we pass the hard bound function sayHi to setTimeout. Also known as hard binding
setTimeout(person.sayHi.bind(person),1000);             //My name is Shaw

const greet = person.sayHi.bind(person)
greet();                                                //My name is Shaw

/*
    It is known as hard binding. And, once a function is bound, it cannot be changes. Not even with call() or apply()
    Here the greet function is bound to person.
*/

const otherPerson = {
    firstName: "Akash"
};

greet.call(otherPerson);                                //My name is Shaw


