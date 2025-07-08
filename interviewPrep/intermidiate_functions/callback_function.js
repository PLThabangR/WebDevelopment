//What is a callback function?
//A callback function is a function that is passed as an argument to another function.
//Allows code to run asynchronously and reusable

//example
function greet(name, callback) {
        console.log(`Hello, ${name}!`);
        callback(name);
    }
    
    function sayGoodbye(name) {
        console.log('Goodbye!', name);
    }
    
    greet('John', sayGoodbye);
    
//Example of a callback function using loop and array

function processArray(arr, callback) {
    // Loop through the array
    sum=0
        for (let i = 0; i < arr.length; i++) {
            // Call the callback function for each item in the array
             
        sum+=arr[i]
            callback(sum);
        }
    }
    
    function logItem(sum) {
        // Do something with the item
       
        console.log("Sum is",sum);
    }
    // Example usage
    const myArray = [1, 2, 3, 4, 5];
    // Pass the logItem function as a callback
    processArray(myArray, logItem);
    