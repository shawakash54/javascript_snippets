var color = 'red'
var speed = 10

var car = {
    color,
    speed,
    go(){
        console.log(`vroom`);
    }
}

console.log(car.color);             //red
console.log(car.speed);             //10
car.go()                            //vroom


//dynamically generating a string which can call a function afterwards

var color2 = 'green'
var speed2 = 20
var drive = 'go'

var car2 = {
    color2,
    speed2,
    [drive]: function(){
        console.log(`vroom2`);
    }
}

car2.go()                             //vroom2