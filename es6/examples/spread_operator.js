//allows us to take an array and spread it out into it's individual items.

let first = [1,2,3]
let second = [4,5,6]

first.push(second)          //[1,2,3,[4,5,6]]
first.push(...second)       //[1,2,3,4,5,6]     Spread operator pushes each item individually



function addThreeThings(a, b, c){
    let result = a+b+c
    console.log(result)
}

addThreeThings(...first)            //6         The spread operator is spreading the array out into it's individual elements.



