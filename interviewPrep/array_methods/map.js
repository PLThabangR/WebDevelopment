
//.map method returns a new array with the results of calling a function for every array element
//Map Method create a new array from an array with modifying the original
const nums = [1,2,3,4,5,6,7,8,9,10];
//Square array
const results = nums.map((a,i)=>{
    
      return a*a
    
})
console.log(results)

//Use case of map method
//Capitalizing the first letter
const fruits = ['apple', 'pear', 'plum','blueberry', 'strawberry']

const capitalizedFruits = fruits.map((a,i)=>{
    //Combine the string using slice
    return a.charAt(0).toUpperCase()+a.slice(1)
})
console.log(capitalizedFruits)


//Extract properties using map method
const users=[
    {name:"John", age:30},
    {name:"Jane", age:25},
    {name:"Bob", age:35},
    {name:"Alice", age:40}
]
//Extract values from object

const userNames= users.map((a)=>{
    return a.name 
})
console.log(userNames)  


const nums1 = [1,2,3,4,5,6,7,8,9,10];
//Square array
const results1 = nums1.map((a,i)=>{
    
      if(a%2==0){
        //Square the even numbers
          return a*a
      }else{
        //Double the odd numbers
          return a*2
      }
    
})
console.log(results1)
