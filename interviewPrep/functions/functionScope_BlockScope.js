
//Function Scope

const sum= 30
function addTwoNumbers(a,b){
// Function Scope accessible inside the function
    const sum = a + b;
    if(true){
        //Block Scope accessible inside the block
        const name ="javascript"
        console.log(name)
    }
  //  console.log(name) name not accessable outside the block
    console.log(sum)
}
//PArameters destructuring


const user={
    name:"Thbang",
    age:30,
    isMarried: true,
    hobbies:["music", "sports","movies","books"]
}

//Destructure parameters
const {name, age} = user
console.log(name, age)

//Destruncture parameters using a function
function myFUnct({name, age}){
    console.log("Inside a function")
    //console.log(name, age)
    console.log(name, age)
}
//Call the function and pass the object
myFUnct(user)


//Array destructuring in functions
const colors = ["red", "orange", "yellow", ];
//const [color1, color2, color3] = colors;

//console.log(color1, color2, color3)

//destruct array using function
function myFUnct1([color1, color2, color3]){
    console.log("Inside a function")
    //console.log(name, age)
    console.log(color1, color2, color3)
}
//Call the function and pass the object
myFUnct1(colors)