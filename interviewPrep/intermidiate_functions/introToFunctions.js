// is a block of code that completely performs a task.
// it can accept parameters and can return a value
// it can be called many times
// it can be nested and it is reusable
//Support DRY approuch means do not repeat yourself

// create a function
function sayHello() {
    return "Hello World";
}

// call the function
const message = sayHello();

console.log(message);

//function with parameters num1 and num2
function addNumber(num1, num2) {
    return num1 + num2;
}
 let a=20, b=50;
 // call the function and pass the arguments a and b
const  sum =addNumber(a,b);
// print the result
console.log("The sum is",sum);

//convert lowercase to uppercase
function toUpperCase(str){
    return str.toUpperCase();
}
// call the function
const result = toUpperCase("javascript is a high level la");
console.log(result);

//convert uppercase to lowercase
//default parameter: if we do not pass any value it will use the default value
function toLowerCase(str="DEFAULT VALUE"){
    return str.toLowerCase();
}
// call the function without passing any value
const result1 = toLowerCase();
console.log(result1);

//Create a function that accept a parameter of a array and return  the index of the element
function findIndex(arr,element){
    let trimmedElement = element.trim(); //trim the string incase is damaged
     for(let i  of arr){
        console.log(i)
        if(i===trimmedElement){
          
            return 1;
        }
      
     }
     return -1 //return -1 if you cannot find anything
}

// call the function
const index = findIndex(["apple", "banana", "cherry", "lemon"],"leon");
console.log(index);