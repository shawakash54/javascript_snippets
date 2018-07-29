/*
    We will override the getter of a object.
    First we need to identify the handler, Handlers for proxy are object. They have various things to tap into,
    we will tap into get() method here
*/

var handler = {
    //here target is the object the proxy is being called on, the name is the thing we are
    //searching for. Something like object.foobar.
    // name=foobar, targer=object
    get: function(target, name){            
        //put all sort of custom logic here
        if(name in target){
            return target[name];
        }else{
            return 'Custom Error';
        }
    }
};


//we can create proxy using the handler
/*
    var p = new Proxy(target, handler);
    Target object (can be any sort of object, including a native array, a function or even another proxy) to wrap with Proxy.
    Handler is an object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

*/
var p = new Proxy({}, handler);

p.foo = 'bar'
p.bar = 'baz'

console.log(p.foo)          //foo
console.log(p.bar)          //baz
console.log(p.foobar)       //Custom Error


/*
    We can implement all sort of logics inside the overriden method. We can overwrite things like:
        get(), set(), delete(), apply(), construct(), getProtoTypeOf(),..
    The most common thing is to override getters and setters and do some kind of validation.
*/



let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age);              // 100
//person.age = 'young';                 // Throws an exception
//person.age = 300;                     // Throws an exception



// using arrow functions

const wrap = obj => {
    return new Proxy(obj, {
        get(target, propKey){
            console.log(`Reading property "${propKey}"`)
            return target[propKey];
        }
    })
}

const object = {message: 'Hello World'};
const wrapped = wrap(object);
console.log(wrapped.message);