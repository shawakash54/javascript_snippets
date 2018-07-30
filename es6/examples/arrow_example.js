var arrowGreeting = (message, greet) => message + greet         //for a single line no braces are needed and the
//return is implicit


//If there is only one argument passed

var squared = x => x*x;


//with arrow function the this of a block is set to the external scope
//without the arrow function in below example, the this.name will be undefined. 
var deliveryBoy = {
    name: 'Shaw',
    handleMessage: function(message, handler){
        handler(message)
    },
    receive: function(){
        this.handleMessage("Hello ", (message)=> console.log(message + this.name));
    }
}