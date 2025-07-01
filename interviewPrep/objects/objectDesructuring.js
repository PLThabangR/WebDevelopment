//Object destructure

//Extract values from object
const person = {
    name:"John",
    age:30,
    isMarried: false,
    hobbies:["music", "sports","movies","books"]
}
//Extract values from object
console.log(typeof person)
const {name, age, isMarried, hobbies} = person
console.log(name, age, isMarried, hobbies)

console.log(typeof name)


//Rename object with destructuring
const person1 = {
    name:"Karabo",
    age:23,
    isMarried: false,
    hobbies:["food", "sleep","crying","complaining"]
}
//Extract values from object
const {name:name1, age:age1, isMarried:isMarried1, hobbies:hobbies1} = person1
//console.log(name1, age1, isMarried1, hobbies1)

