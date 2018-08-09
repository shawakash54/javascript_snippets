//communication between two generators
// function* firstGenerator(){
//     yield 3
//     yield 4
// }

// function* secondGenerator(){
//     yield 1
//     yield 2
//     yield* firstGenerator()
//     yield 5
// }

function* firstGenerator(){
    yield 3
    return 4
}

function* secondGenerator(){
    yield 1
    yield 2
    const x = yield* firstGenerator()
    console.log(x)
    yield 5
}

const s = secondGenerator()
for(let i of s){
    console.log(i)
}