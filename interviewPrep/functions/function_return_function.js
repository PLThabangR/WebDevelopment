function create(a) {
    return function(b) { //return a anynomous function
        return a + b;
    }
}
//Call the function
const addFive = create(5);
//Call the anonymous function
const results=addFive(10);

//Print the result from the anonymous function
console.log(results);

//Create a counter
function createCounter(){
let count =0;
 return function(){
     count++;
     return count;
 }
}

//Call the function
const counter = createCounter();
//Call the anonymous function
const result1 = counter();
//Print the result from the anonymous function
console.log(result1);