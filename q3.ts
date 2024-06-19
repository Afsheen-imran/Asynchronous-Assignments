//Question # 3

//Write a function fetchData that returns a Promise which resolves with the string
//"Data fetched successfully!" after a delay of 1 second.

function fetchData(): Promise<string> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            console.log("Data fetched Successfully");
            
        }, 1000);
    });}

    fetchData()