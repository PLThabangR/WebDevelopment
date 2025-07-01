//Ways to define a function

//1. Traditional way

//function declaration
function addNumber(a,b) {
    return a + b;
}

//2. Function expression
//Assign the function to a variable
const addNumber2 = function(a,b) {
    return a + b;
}

console.log(addNumber2(10,20))

//3. Arrow function
const addNumber3 = (a,b) => {
    return a + b;
}

console.log(addNumber3(100,20))

//4. Anonymous function same as function expression
const addNumber4 = function(a,b) {
    return a + b;
}

// //IFE (Immediately Invoked Function Expression)
// (function(a,b) {
//     return a + b;
// })(10,20)


// Combine to functions using arrow function
const combineArrays = (a,b) => {
    return [...a,...b];
}
const multiplyArray = (a,n) => {
    let array2=[]
    for(let i  of a){
        
        array2 = [...array2,i*n]
        //array2.push(i*n)
    }

    return array2
}

const a=[6,2,3,4,5]
const c =[10,20,40]
const b =[6,7,8,9,...c]

console.log(combineArrays(a,b))

console.log(multiplyArray(a,2))