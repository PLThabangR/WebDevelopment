// function
const greet = (name: string) => console.log(`Hello, ${name}!`);


greet("John");

//Basic types
//strings
let myName: string = "John";
let myLastName: string = "Doe";
let fullName: string = `${myName} ${myLastName}`;
let myAge: number = 30;
let isMarried: boolean = false;


//Arrays
let fruits: string[] = ["apple", "banana", "cherry"];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

const  showAray = (fruits: string[]) :string[]=> {
    return fruits
}


showAray(fruits)
//Tuple
let mixedArray: (string | number)[] = ["apple", 2, "cherry", 4, "lemon", 6];


//Second
let scores: Array<number> = [10, 20, 30, 40, 50];

let mixedArra: (string | boolean)[] = ["apple",true , "cherry", false, "lemon", true];

let numbersEmpty: number[] = [];

//Objects
type Car={
    name:string,
    color:string,
    year:number,
    price:number
}

let myCar:Car = {
    name:"Honda",
    color:"Blue",
    year:2020,
    price:50000,
}

//Shwwooing object
function displayCar(car:Car):string{
    return `${car.name} ${car.color} ${car.year} ${car.price}`
}

let results =displayCar(myCar)

console.log(results)