function* sample(){
    const word = yield('hello')
    console.log(word)       //bye
}

const sam = sample()
const s1 = sam.next('world')
const s2 = sam.next('bye')

console.log(s1)             //{value: 'hello', done: false}
console.log(s2)             //{value: undefined, done: true}

