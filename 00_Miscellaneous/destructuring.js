const { name, test2 } = {
    name: "Hans",
    test: "Test",
    test2: "Test2"
}

console.log(name, test2);


const [firstNumber, secondNumber, thirdNumber] = [0, 1];

console.log(firstNumber, secondNumber, thirdNumber);


const [test, ...theRest] = [0, 1, 2, 3, 4, 5];

console.log(test, theRest);