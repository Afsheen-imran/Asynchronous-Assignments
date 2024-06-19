"use strict";
//Question # 3
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function fetchData that returns a Promise which resolves with the string
//"Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched Successfully");
        }, 1000);
    });
}
fetchData();
