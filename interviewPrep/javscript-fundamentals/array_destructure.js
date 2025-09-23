//Object oriented programming
//this keyword is used to access the current object

//prints empty object because this keyword is used in global scope
console.log(this)
//console.log(window)

//this keyword is used to access the current object
//this keyword is used to access the current object
//window is the global object
//window and this keyword are same object
//this returns true
//console.log(this===window);

//this refers to the current object
const person = {
    name:"John",
    age:30,
    isMarried: false,
    info: function(name,age){return `My name is ${name} and I am ${age} years old`
    }
}


console.log(person.info("thabang",24))