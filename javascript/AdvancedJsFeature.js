//Destruct the pie from math object

let {PI} = Math

console.log(PI)

const veggies = ['onion', 'garlic', 'potato'];
//Works as a for loop
veggies.forEach( a =>{
console.log(a )
})

// Filter Method======returns data based on given conditions
const nums = [0,10,20,30,40,50];
let results = nums.filter(a=>{
    return a<30
})

console.log(results)

///Map Method == returns results after calculations 

let results2 = nums.map(a =>{
    return a*2
})
console.log(results2)

///Using spread and rest operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
//Use spread operator to combine arrays
const fruitsAndBerries = [...fruits,...berries]
console.log(fruitsAndBerries)

//Add new members to arrays without using the push() method
let veggies1 = ['onion', 'parsley'];
veggies1 = [...veggies1,"Carrot","Cabbage"]

console.log(veggies1);

//Convert a string to an array using the spread operator
const greetings = "Good-Morning"
const newArr = [...greetings]
const newArr2= [...newArr,"H","E"]
console.log(newArr2)

const meal = ["soup", "steak", "ice cream"]
let [s] = meal;
console.log(s);