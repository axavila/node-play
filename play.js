const name = 'Axel';
let age = 34;
const hobbies = true;

function summarizeUser (userName, userAge, userHobby) {
    return (
        'Name is ' + userName + ' , age is ' + userAge + ' and the user has hobbies ' + userHobby
    );
};

//const add = (a, b) => a + b;
//const addOne = a => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(1, 2));
//console.log(addOne(1));
console.log(addRandom());


console.log(summarizeUser(name, age, hobbies));