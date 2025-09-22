
let names = ["John", "Jane", "Doe"];

let arrayIndex = names.length-1;

console.log(arrayIndex)
console.log(names.length)

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let i = arrayIndex; i >= 0; i--) {
    console.log(names[i]);
}
const fruits = ["apple", "banana", "cherry"];
for(let fruit of fruits){
    console.log(fruit)
}

let upperCaseArray=[]
for(let fruit of fruits){
    upperCaseArray.push(fruit.toUpperCase())
    
}

console.log("upperCaseArray ",upperCaseArray)


for(let index in fruits){
    console.log(fruits[index])
}