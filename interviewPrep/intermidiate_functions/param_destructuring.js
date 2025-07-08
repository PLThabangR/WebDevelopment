

person ={
    name:"John",
    age:30,
    isMarried: false,
    hobbies:["music", "sports","movies","books"]
}

//Object destructuring
function info({name, age}){ //Destructure parameters
    console.log("Inside a function")
    //console.log(name, age)
    console.log(name, age)
}

info(person)


//Array destruction
const arr = [1,2,3,4,5]
function sum([a,b,c,d,e]){
   console.log(a,b,c,d,e)
}
//call the function
sum(arr)