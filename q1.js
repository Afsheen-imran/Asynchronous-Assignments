"use strict";
/*Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/
Object.defineProperty(exports, "__esModule", { value: true });
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome,Afsheen ");
        }, 2000);
    });
}
fetchGreeting().then((greeting) => {
    console.log(greeting);
});
