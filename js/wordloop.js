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

    else if(value == 1) {
        if(arrayIndex > 3){
            arrayIndex = 0;
        }else{
            arrayIndex++
        }
        return arrayIndex
    }
    else if(value == 2) {
        if(arrayIndex > 3) {
            arrayIndex = 0;
        }else{
            arrayIndex++
        }
        return arrayIndex
    }

    else if(value == 3) {
        if(arrayIndex > 3) {
            arrayIndex = 0;
        }else{
            arrayIndex++
        }
        return arrayIndex
    }
    return;
}



// Creating a function that uses if statements to choose the corresponding array, then adding it to the global array "complete"
function addValue(order) {
    if(order == 0){
        complete[order] = wC1[increment(0)].toString();
        document.getElementById('word1').innerHTML = complete[order];
    }else if(order == 1){
        complete[order] = wC2[increment(1)].toString();
        document.getElementById('word2').innerHTML = complete[order];
    }else if(order == 2){
        complete[order] = wC2[increment(2)].toString();
        document.getElementById('word3').innerHTML = complete[order];
    }else if(order == 3){
        complete[order] = wC3[increment(3)].toString();
        document.getElementById('word4').innerHTML = complete[order];
    }else{
        return;
    }
}




