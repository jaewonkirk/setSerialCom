'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending → fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    // Doing Something
    setTimeout(() => {
        console.log("Task is done.");
        resolve("done");
    }, 2000)
})
// 2. Consumer: then, catch, finally
.then((value) => {console.log(value)})
.catch((error) => {console.log(error)})
.finally(() => {console.log("This is Promise!")})