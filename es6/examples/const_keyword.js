//const allows us to declare a variable that is read only. const is not a constant variable but a constant reference. 
//And, like let declaration, const declaration is also block scoped(if-else, for, etc).

const VALUE = {};

//Declared VALUE to be an object. We can assign and reassign properties to the object without breaking the const rule as the reference is still the same.
VALUE.foo = 'bar';

/*
But however if we try to assign VALUE to bar, like:

VALUE = bar;

Then the reference of VALUE is changing, and hence throws error

*/