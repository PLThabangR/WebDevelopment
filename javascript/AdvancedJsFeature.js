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


//Convert Json to javascript object
const greet = '{"greeting":"Hello"}'

const jsonStr=JSON.parse(greet)

console.log(jsonStr)



//Convet object to string 

const data ={
    firstName:"John",
    secondName:"Doe",
    age:30
}

//Use stringyfy to convert to string

const newData = JSON.stringify(data)

console.log(newData)
console.log(newData.age=40)
console.log(newData)


//Quiz
function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();




class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

const [a, b]  =  [1,2,3,4] 

console.log(b)

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);