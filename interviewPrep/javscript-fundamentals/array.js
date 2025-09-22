//primitive - string, number, boolean
//string
let myName = "John";
let myLastName = "Doe";
let fullName = `${myName} ${myLastName}`;
let myAge = 30;
let isMarried = false;




//value can be changed directly
//non-primitive - object, array, function
//array - is a collection of values of any types 

let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let mixedArr = ["apple", 2n, "cherry", 4, "lemon", 6];
let numbersEmpty = [];

console.log(typeof(fruits))
console.log(mixedArr[1]);

//Useful array methods
//indexOf
//includes
//slice
//join

//indexOf find the index of a specific element
console.log(fruits.indexOf("2n"))

//includes returns true or false check if element is present or not
console.log(fruits.includes("cherry"))

//slice do partition of an array  without changing the original
const newArr=fruits.slice(1,4)
console.log(newArr)

//join combine the elements of an array into a string
const joinedArr=fruits.join(" ")
console.log(joinedArr)


