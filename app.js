const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Mario', 'Santiago', 'Jack', 'Adrian', 'Winston'];
const femaleNames = ['Paula', 'Maria', 'Angelica', 'Anna', 'Zoe'];
const lastNames = ['Grociak', 'Hughes', 'Jackman', 'Canizares', 'Lewinsky'];
const people = [];

const randChoice = (arr) => {
    let selected = Math.floor(Math.random() * arr.length);
    return arr[selected];
};

for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);

    if (person.gender === 'male') person.firstName = randChoice(maleNames);
    if (person.gender === 'female') person.firstName = randChoice(femaleNames);

    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.round(Math.random() * 90);

    people.push(person);
};

const jsonPeople = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonPeople, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});