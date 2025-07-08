//Repeating or for calculations 

for (let i = 0; i < 10; i++) {
 
   if(i==5){
       break
   }
   console.log(i)
}

console.log('Done')

//Array 

let fruitsArray= ["apple", "banana", "cherry", "lemon"]
//Array methods
//Useful array methods 
//indexOf
//includes
//slice
//join

//indexOf find the index of a specific element
console.log(fruitsArray.indexOf("apple"))

//includes returns true or false check if element is present or not
console.log(fruitsArray.includes("cherry"))

//slice do partition of an array  without changing the original
const newArr=fruitsArray.slice(1,4)
console.log(newArr)

//Join create a string from an array by joining the elements of the array using specified separator
const joineFruits=fruitsArray.join(" | ")

console.log(typeof joineFruits)
console.log(joineFruits)

///Conct method ==concatenation of two arrays

let arr1 = []
let arr2 = ["apple","banana","cherry","Mangos","lemon","kiwi"]

//Push values of aar1 to array 2
let upper 
for(let i=0; i<arr2.length;i++){
    
    arr1.push(arr2[i].toUpperCase())
}
console.log("Valuse from array 1 ",arr1)

//Spread operator ==used to expand an array or object into individual elements
// let arr4 = [...arr1,...arr2]
// console.log(arr4)

let [kiwi,...a66] = arr2
console.log(a66)

console.log(typeof kiwi)