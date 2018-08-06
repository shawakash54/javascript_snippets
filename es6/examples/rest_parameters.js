//rest parameters vs arguments keyword
//arguments keyword returns an array like object with all the arguments passed to the function.
//since it is like an array few methods like length are available.
function myFunc(){
    console.log(arguments);
}
myFunc(1,2,3);                      //[0: 1, 1: 2, 2: 3]

function Store() {
    var aisle = {
        fruit: [],
        vegetalbe: []
    }
    return {
        //Store().add('category', 'item1', 'item2');
        add: function(category, ...items) {
            //var items = [].splice.call(arguments, 1);
            console.log(items);
            items.forEach(function(value, index, array) {
            aisle[category].push(value);
            });
        },
        aisle: aisle
    }
}
  
var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);
