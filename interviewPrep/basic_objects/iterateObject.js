

const car ={
    name:"Honda",
    color:"Blue",
    year:2020,
    price:50000,
}

//for in loop to display values
for(let key in car){
   // console.log(key);
    console.log(key,car[key]); //Use key as index to display values
}

//for of loop to display values
for(let value of Object.values(car)){
    console.log(value)
}

//for of loop to display keys
for(let key of Object.keys(car)){
    console.log(key,car[key])
}

//for of loop to display key value pair
for(let [key,value] of Object.entries(car)){
    console.log(key,value)
}

//This is a array of objects
const array=[{name:"John",age:30},{name:"Jane",age:25},{name:"Bob",age:35}]

for(let person of array){
    console.log(person.name,person.age)
}