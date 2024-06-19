"use strict";
//Question # 5
/*Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}
function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data processed successfully! ");
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then((fetchedData) => {
        console.log(fetchedData); // Log the result of fetchData
        return processData(); // Return the promise from processData
    })
        .then((processedData) => {
        console.log(processedData); // Log the result of processData
    })
        .catch((error) => {
        console.error(error); // Handle any errors that occur in the chain
    });
}
// Call the function to execute the sequence
executeSequentially();
