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