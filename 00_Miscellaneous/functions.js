// function are first class citizens - can pass functions as arguments and probably more
// hoisting ??? - bubbles to the surface. Even though it's before declaring the function it works
console.log(random(0, 50));


// function declaration
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// variable assigment - assignning a function. that's why there should be a ; at the end
const anonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);

};

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// fancy name - Lambda
// implicitly returns - no need to write return
const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

// the genericAction is passed as a callback function - callback functions are functions passed as arguments, that you call back
// the defining thing is that it is passed as an argument
// what is the use case for callback functions ???
function genericActionPerfomer(genericAction, genericName) {
    return genericAction(genericName);
}


const subtract = (name) => `${name} is subtracting`;

// String interpolation / template string
const walk = (name) => `${name} is walking`;


console.log(genericActionPerfomer(subtract, 'Tobias'));
console.log(genericActionPerfomer(walk, 'Nicolas'))
console.log(genericActionPerfomer((name) => `${name} is reading`, 'Andrea'));
// pass by value - 
// pass by reference