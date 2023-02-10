
// catches problems
"use strict"

// totalGlobalVariable = 'Never do this';

// global scope - the code below shows why it's a problem (scoping problem)
var globalVariable = 'Also never do this';


{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

{
    let anotherValue = true;
    // every time you create a scope (like in functions and stuff) - you create a call execution stack ??
    {
        let anotherValue = false;
    }
    console.log(anotherValue);
}

// var is global - prints 6 6 times
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// let is bound to the scope - print 0, 1, 2, 3, 4, 5
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
