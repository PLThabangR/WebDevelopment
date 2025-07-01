//Spread Operator
//clone array
//used for adding elements to an array
const colors1 = ["red", "orange", "yellow", ];
const colors2 = ["green", "blue", "purple","grey", ];
//cloning and merging arrays
const colorsCopy = [...colors1, ...colors2];

console.log(colorsCopy)

//Add new element in array using spread operator
const colors = ["red", "orange", "yellow", ];
const colorsCopy1 = [...colors, "green", "blue", "purple", ];
console.log(colorsCopy1)


//Use case of Object
//Merge object
//Add properties

const person1 = {name:"John", age:30};

const person3 = {...person1}
console.log(person3)

//Add new properties to object
let person4 = {...person1, job:"Software Engineer", salary:70000, isMarried:false}
console.log(person4)

const changeExistingValues={...person1, isMarried:true}
console.log(changeExistingValues)

person4={...person4, isMarried:true,hobbies:["music", "sports","movies","books"]}
//console.log(person4)

for(let key in person4){
    console.log(key,":",person4[key])
}