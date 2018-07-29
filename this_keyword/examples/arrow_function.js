/*
An arrow function doesnt have its own this. Instead it uses the this from it's enclosing execution context.
this value of an arrow function can not be set explicitly. Even if we try to set it with call(), apply() or bind(), it will
be simply ignored. this of an arrow function always refer to the this value that was captured when the arrow function was
created.
*/

const outerThis = this;

const func = ()=>{
    console.log(this === outerThis);
}

func();                     //true
func.call(null);            //true
func.apply(null);           //true
func.bind({})();            //true

/*
We also cannot use arrow function as a constructor. 
Following will throw an error

new func();
*/

/*
Arrow functions are very useful when we want to access this within a callback.
*/

const counter = {
    count: 0,
    incrementPeriodically(){
        //here the this binding in the setInterval callback doesnt refer to the counter object. instead it refers to the global object
        setInterval(function(){
            console.log(++this.count)
        }, 1000);
    }
}

counter.incrementPeriodically();            //Give NaN


const counter2 = {
    count: 0,
    incrementPeriodically(){
        /*
            Here the callback uses the this from the incrementPeriodically method. Since the incrementPeriodically has
            been invoked using method syntax (counter2.incrementPeriodically()), hence it uses the this of the counter2 object
        */
        setInterval(()=>{
            console.log(++this.count)
        }, 1000);
    }
}

counter2.incrementPeriodically();            //Give 1..2..3..4..
