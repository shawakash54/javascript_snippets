var {color} = {
    color: 'Red',
    name: 'Shaw',
    position: 'Forward',
    state: 'New York'
}

console.log(color);         //Red

var [first,,,,fifth] = ['red','yellow','green','blue','orange']
console.log(first)      //red
console.log(fifth)      //orange



var people = [
    {
        "firstName": "Clinton",
        "lastName": "Ruiz",
        "phone": "1-403-985-0449",
        "email": "pharetra@facilisislorem.org",
        "address": "Ap #829-3443 Nec St."
    },
    {
        "firstName": "Skyler",
        "lastName": "Carroll",
        "phone": "1-429-754-5027",
        "email": "Cras.vehicula.alique@diamProin.ca",
        "address": "P.O. Box 171, 1135 Feugiat St."
    },
    {
        "firstName": "Kylynn",
        "lastName": "Madden",
        "phone": "1-637-627-2810",
        "email": "mollis.Duis@ante.co.uk",
        "address": "993-6353 Aliquet, Street"
    },
    {
        "firstName": "Chaney",
        "lastName": "Edwards",
        "phone": "1-397-181-4501",
        "email": "rutrum@Nullamlobortis.net",
        "address": "P.O. Box 342, 9574 Egestas Street"
    }
]

people.forEach(({firstName}) => console.log(firstName))     //Clinton Skyler Kylynn Chaney


var [,Skyler] = people;

function logEmail({email}){
console.log(email);                                         //Cras.vehicula.alique@diamProin.ca
}

logEmail(Skyler);
