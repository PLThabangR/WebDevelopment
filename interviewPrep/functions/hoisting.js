

//Hoisting is the process of moving variable and function declarations to the top of their scope, before the code is executed.
//example of hoisting in javascript

console.log(myVar);
var myVar = "John Doe";

//Example using a function
//hoisting works on traditional functions 
//myFunction();
console.log(myFunction());
function myFunction(){
    return "Hello World";
}

//When const and let do not support hoisting
//console.log(sum(1,2));//calling function before declaration gives error
const sum = (a,b) => a+b;
console.log(sum(1,2));