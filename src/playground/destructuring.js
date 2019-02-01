/*
    Object destructuring
*/

const test = {
    hey: 'tet'
};

const person = {
    name: 'Ivaylo',
    age: 21,
    location: {
        city: 'Montreal',
        temp: -40
    }
};

const funa = ({name, location}, {hey}) => {
    console.log(`${name} and ${location.city} and ${hey}`);
};

funa(...person, ...test);

// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;

// console.log(`It's ${temp} in ${city}.`);

/*
    Array destructuring
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`${city} and ${state}`);