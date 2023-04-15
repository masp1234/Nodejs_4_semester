/*
Why: because Javascript is single-threaded

// Examples:
    Fetching over a network
    Heavy calculations
    Reading/writing to files
    Cryptographic functions - hashing and comparing (heavy calculation)
    Databases

*/

/* Solution 1:
Callbacks
Con: 'Callback hell', 'Pyramid of doom' - callbacks within callbacks etc.



node is callback on callback on callback


*/

/* Solution 2: Promises
promises are syntactic sugar for callbacks

Two states
- pending
- fulfilled: 2 sub-states
    - rejected
    - resolved

*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Error message";
            resolve("Yaaay")
        }
        catch (errorMessage) {
            reject(errorMessage);
        }
        }
    , 3000)
    
})
.then(successMessage => {
    console.log("Success message: ", successMessage);
}).catch(errorMessage => {
    console.log("Error message: ", errorMessage);
})


function celebrate(name) {


    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`banzai, ${name}, banzai`)
        }
        else {
            reject('No name received')
        }
    })
}

celebrate()
    .then(message => {
    console.log(message)
})
    .catch(error => {
        console.log(error);
})

console.log(celebrate)
console.log(celebrate())

function somethingGoodSomethingBad() {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            try {
                throw Error;
                resolve('something good');
            }
            catch {
                reject('something bad')
            }
        }, 3000)
    })

};

somethingGoodSomethingBad()
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.log(errorMessage))


/* Solution 3: Await/Async - syntactic sugar for promises. it uses promises, which uses callbacks*/

async function getGoodOrBadMessage() {
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    console.log(somethingGoodSomethingBadMessage);
}

getGoodOrBadMessage();

// IIFE
(async function getGoodOrBadMessageIFEE() {
    try {
        const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
        console.log(somethingGoodSomethingBadMessage);
        const celebrationMessage = await celebrate();
    }
    catch {

    }
})()


function parallel() {
    // starts all the the calls but wait untill both is fulfilled
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")]);
}





   
