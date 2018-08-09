function* createIterator(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const s = createIterator()

//for of loop
for(let i of s){
    console.log(i)
}