# Javascript this keyword

Javascript's this keyword can be very **overwhelming**

Continue with the examples section to learn more. Comments have been included for better understanding. 

## "strict mode"
It prevents us from accidentally creating global objects or variables.
Check [function_calls.js](./examples/function_calls.js) for a better understanding.

## Constructor calls
In JS, a call with the new operator turns into a constructor call.
Check [constructor_call.js](./examples/constructor_call.js)

## ES6 Proxy
Proxy allow us to handle overrides or provide custom behavior
Check [proxy.js](./examples/proxy.js)

## this in method of an object
When a function is called as a method of an object. The function this is set to the object it is called on.
Check [method_object.js](./examples/method_object.js)

## call() and apply() methods
call() and apply() is defined in function prototype and therefore available in every function
Check [call_apply.js](./examples/call_apply.js)

## bind()
Check [bind.js](./examples/bind.js)

## Own version of bind() method
Check [bind_definition.js](./examples/bind_definition.js)

## this with an arrow function
Check [arrow_function.js](./examples/arrow_function.js)

## this in class bodies
Check [class_bodies.js](./examples/class_bodies.js)