//clone array
//used for adding elements to an array
let colors1 = ["red", "orange", "yellow", ];
let colors2 = ["green", "blue", "purple","grey", ];
//cloning and merging arrays
const colorsCopy = [...colors2,{name:"John", age:30}];

// slice will make a copy of the array
let array3 = colors1.slice();
console.log(array3)
console.log(colorsCopy)


//use array from to make a duplicate
let array4 = Array.from(colors2);
console.log(array4)



//primitve types - string, number, boolean
//non-primitive - object, array, function