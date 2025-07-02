//filter method returns a new array with the results of calling a function for every array element
//Filter Method create a new array from an array with modifying the original
const nums = [1,2,3,4,5,6,7,8,9,10];
//Square array
const results = nums.filter((a,i)=>{
    
      return !(a%2==0)
    
})
console.log(results)

//Use case of filter method
//Capitalizing the first letter
const fruits = ['apple', 'pear', 'plum','blueberry', 'strawberry']


const lenGreaterThan4 = fruits.filter((a,i)=>{
    //Combine the string using slice
    return a.length>4
})
console.log(lenGreaterThan4)