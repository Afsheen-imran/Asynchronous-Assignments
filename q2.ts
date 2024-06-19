// Question # 2

//Write a function simulateTask that simulates a task by logging "Task started",
//waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask():any  { console.log("Task Started");


    setTimeout(() => {console.log("Taske Completed");
    
    }, 1000);
};

simulateTask();