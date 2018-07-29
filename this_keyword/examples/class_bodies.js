// class bodies are implicitly in strict mode

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        //we can also bind the sayHi method here 
        // this.sayHi.bind(this);
    }

    sayHi(){
        console.log(`Hi, my name is ${this.firstName}`);
    }

    /*
        Another alternative is to use class field and arrow function. We won't need to call bind anymore.
        sayHi = ()=>{
            //in arrow function, this refers to the class this only.
            console.log(`Hi, my name is ${this.firstName}`)
        }

    */
}

const person = new Person('Akash', 'Shaw')
//the following invokes sayHi as a method and person as a receiver. Therefore the this binding is correct.
person.sayHi();                             //Hi, my name is Akash

//if we explicitly set it to a variable. Then invoke it. We will lose the receiver of the method.

const greet = person.sayHi;
//greet()                                     //this.firstName is now set to undefined. 
//greet() doesn't work because we now invoke the sayHi() function as a ordinary function whereas class Person is in strict mode.


//We can manually call bind on it.

const greet2 = person.sayHi.bind(person)        //Hi, my name is Akash
greet2();