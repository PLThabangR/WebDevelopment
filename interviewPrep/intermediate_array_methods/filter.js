//High order function
//filter method returns a new array with the results of calling a function for every array element
//Filter Method create a new array from an array without modifying the original array
const nums = [1,2,3,4,5,6,7,8,9,10];
//Square array
const results = nums.filter((a,i)=>{
        //return even number use ! to inverse and return odd numbers
      return !(a%2==0)
    
})
//Display results
console.log(results)

//Use case of filter method
const fruits = ['apple', 'pear', 'plum','blueberry', 'strawberry']

//Create new arrays from filter methods which follow certian conditions
const lenGreaterThan4 = fruits.filter((a,i)=>{
    //Combine the string using slice
    return a.length>5
})
console.log(lenGreaterThan4)

//Manipulate a object
const users=[
    {name:"John", age:18},
    {name:"Jane", age:25},
    {name:"Bob", age:35},
    {name:"Alice", age:40}
]

//filter age
const ageGreaterThan25 = users.filter((user)=>{
    return user.age>25
})
console.log(ageGreaterThan25)

//Prime numbers
const nums1 = [1,2,3,4,5,6,7,8,9,10];

const primeNumber = nums1.filter((number)=>{
    for(let i=2; i<number; i++){
        if(number%i==0 ){
            return false
        }
    }
    return number>1
})

console.log(primeNumber)