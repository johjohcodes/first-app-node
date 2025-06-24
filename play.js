const { log } = require("console");

let name = 'maximum';
let description = 'You are a software engineer at a tech company. Your task is to write a function that takes an array of integers and returns the maximum value in the array. The function should handle edge cases such as an empty array or an array with negative numbers.';
const hasHobbies = true;

const allUser = () =>{
    return {
        name: name,
        description: description,
        hasHobbies: hasHobbies
    }
}

function summary(userName, userDescription){
    return {
        summary: 'name is ' + userName + ' and description is ' + userDescription
    }
    
}

log(summary(name, description));

console.log(allUser());


const add = (a, b) =>  a + b;
const addone = a => a + 1;
const addRandom = () => Math.random() * 10;



