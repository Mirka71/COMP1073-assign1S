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

// Function chooses random number

function randomNum () {
   let randomNumber = Math.floor(Math.random()*5);
   return randomNumber;
}

// Testing function to use random number to pick word from array.

function wordPicker() {
    let newWord = wC1[randomNum()].toString();
    document.getElementById('output').innerHTML = newWord
}




