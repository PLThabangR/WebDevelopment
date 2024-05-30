//Destruct the pie from math object

let {PI} = Math

console.log(PI)

const veggies = ['onion', 'garlic', 'potato'];
//Works as a for loop
veggies.forEach( a =>{
console.log(a )
})

// Filter Method======returns data based on given conditions
const nums = [0,10,20,30,40,50];
let results = nums.filter(a=>{
    return a<30
})

console.log(results)

///Map Method == returns results after calculations 

let results2 = nums.map(a =>{
    return a*2
})
console.log(results2)