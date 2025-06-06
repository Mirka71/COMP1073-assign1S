// make array for the word columns

// column 1
const wC1 = [
    'Your cat', 
    'My dog', 
    'The rabbit',
    'The chicken',
    'The cow'
];

// column 2
const wC2 = [
    'falls',
    'jumps',
    'runs',
    'digs',
    'poops'
];

// column 3
const wC3 = [
    'into his',
    'on your',
    'between the',
    'for your',
    'by the'
];

// column 4
const wC4 = [
    'couch',
    'food',
    'cow',
    'face',
    'table'
];

// function chooses random number

function randomNum () {
    let randomNum = Math.floor(Math.random()*5);
    return randomNum;
}

// var to hold input as an array
const complete = [];

// Make a global var
let arrayIndex = 0;


// Created a function to ensure the correct array index variable is selected.
function increment(value){
    if(value == 0) {
        if(arrayIndex > 3) {
            arrayIndex = 0;
        }else{
            arrayIndex++
        }
        return arrayIndex
    }
}





