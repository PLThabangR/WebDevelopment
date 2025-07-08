//foreach method  higher order function
// for each does not return anything
//does not create a new array  
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];


//Use case of forEach
//Iterate throught an array
colors.forEach((currentValue,index)=>{
    console.log(index,currentValue)
})

number = [1,2,3,4,5,6,7,8,9,10];
//Square array
//Use for each when working with arrays especially if you wont work with the index
number.forEach((a,i)=>{
        //return even number use ! to inverse and return odd numbers
      console.log(a*a)
    
})
