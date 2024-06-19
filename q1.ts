/*Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/

function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome,Afsheen ");
        }, 2000);
    });
}

 fetchGreeting().then((greeting) => {
    console.log(greeting);
});

