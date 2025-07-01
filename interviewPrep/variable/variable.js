
const name = "John\nDoe";
 
//rule for naming varibles

// 1. A variable name must start with a letter, underscore or dollar sign
// 2. A variable name cannot start with a number
// 3. A variable name can only contain alpha-numeric characters and underscores

//examples  

// var myVar = "John";
// var my_var = "John";
// var _myVar = "John";
// var $myVar = "John";

//difference between var and let and const 

// var can be updated and redeclared
// let cannot be redeclared but can be updated
// const cannot be updated or redeclared

let age = 20;
 age = 30;
console.log(age);

//String indexing 

let str = "Hello";
let len = str.length;
let lastElement= str[len-1];
//find the second last element
let secondLastElement = str[len-2];
console.log(str[0]);
console.log(lastElement);

//String methods
 str = "javascript ";
 //Alows good to know the length of the string
 len = str.length;
 //Returns the last character in the string
 console.log(len);
 //trim string
 let trimmed = str.trim();
 console.log(trimmed);
 
 //to lowercase and uppercase
 let lowerCase = str.toLowerCase();
 let upperCase = str.toUpperCase();
 console.log(upperCase);
 console.log(lowerCase);

//Slice methed is used for substring
let sliced = str.slice(0,2);
console.log("Sliced string ",sliced);

let ismale=false;
let color = "red";

console.log(typeof ismale,ismale);


//BigInt
//What is the maximum value a int can store
console.log(Number.MAX_SAFE_INTEGER);
let myNum1 =1434354546546546546546545n;
 console.log(typeof myNum1, myNum1);

 //Undefined = variable with no value
 let myVar;
 console.log(typeof myVar, myVar);