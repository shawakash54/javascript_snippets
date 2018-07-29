/*
A very simple definition of bind method. It accepts a thisArg that we want to bind to. 
...args takes care of any arguments that the caller might provide. It also takes care of any fixedArgs that might be provided
ahead of binding.
*/

Function.prototype.bind = function(thisArg, ...fixedArgs){
    const func = this;
    return function(...args){
        return func.apply(thisArg, [...fixedArgs, ...args]);
    };
};