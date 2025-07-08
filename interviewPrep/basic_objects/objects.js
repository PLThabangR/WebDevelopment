
// Object is a collection of key value pair
// Object is a reference type similiar to array 
//Object does not have indexes
//Object has key value pair
//You can access the object using its key
//The person is an object
const person ={
    name:"John",
    age:30,
    isMarried: false,
    hobbies:["music", "sports","movies","books"]
}

//Dipsplay array value using different methods
console.log(person.name)//Dot notation
console.log(person["name"])//Bracket notation
console.log(person.hobbies)// Dot notation
console.log(person["hobbies"][0])//Bracket notation

//Adding new key value pair
person.job="Engineer"
person.salary=50000
console.log(person)

car={

}

console.log(typeof car)
// Add values to the objects
car.name="Honda"
car.model="Civic"
car.year=2020
console.log(car);

//Add using bracket notation
car["color"] = "Blue";
console.log(car);
