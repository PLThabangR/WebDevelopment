"use strict";
// function
const greet = (name) => console.log(`Hello, ${name}!`);
greet("John");
//Basic types
//strings
let myName = "John";
let myLastName = "Doe";
let fullName = `${myName} ${myLastName}`;
let myAge = 30;
let isMarried = false;
//Arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
const showAray = (fruits) => {
    return fruits;
};
showAray(fruits);
//Tuple
let mixedArray = ["apple", 2, "cherry", 4, "lemon", 6];
//Second
let scores = [10, 20, 30, 40, 50];
let mixedArra = ["apple", true, "cherry", false, "lemon", true];
let numbersEmpty = [];
let myCar = {
    name: "Honda",
    color: "Blue",
    year: 2020,
    price: 50000,
};
//Shwwooing object
function displayCar(car) {
    return `${car.name} ${car.color} ${car.year} ${car.price}`;
}
let results = displayCar(myCar);
console.log(results);
