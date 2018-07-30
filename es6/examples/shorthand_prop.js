//Construct objects with properties. Oppostie to destructuring of object.

let firsrName = 'Akash'
let secondName = 'Shaw'

let person = {firsrName, secondName}
console.log(person)         //{firstName: 'Akash', secondName: 'Shaw'}

let college = 'HIT-K'
let org = {person, college}

console.log(org)            //{person: {firstName: 'Akash', secondName: 'Shaw'}, college: 'HIT-K'}