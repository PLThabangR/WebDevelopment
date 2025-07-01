//Nested object destructuring 
const person2 = {
    name:"John",
    age:30,
    isMarried: false,
    hobbies:["music", "sports","movies","books"],
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        zip:"10001"
    }
}

//Destruncture nested object
//Rename varible name and access nested object
const {name, age, isMarried, hobbies, address:{street, city, state, zip}} = person2
console.log(name, age, isMarried, hobbies, street, city, state, zip)