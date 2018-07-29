/*
    In browsers, this keyword refers to the window object.
    In node, this keyword refers to the global object. 

    In a node module, this doesn't refers to the global object. It refers to module.exports
    Node runs each module within a wrapper function, and the wrapper function is invoked with this set to module.exports
*/


console.log(this === global)                    // returns false

console.log(this === module.exports)            // returns true