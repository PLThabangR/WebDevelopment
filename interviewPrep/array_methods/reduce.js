//Reduce method is useful when you need to aggregate sum,total or max or minimum value from an array


//
const nums = [4,5,6,3,7,8,2,9,10];
//Square array
const results = nums.reduce((accumulator,currentValue)=>{
        //return even number use ! to inverse and return odd numbers
            accumulator+=currentValue //accumulator+ currentValue
      return accumulator; // return the accumulator
    
},0)//accumulator start from 0 initializer
console.log(results)

//Use case of reduce method to find max value of an array
const maxValue=nums.reduce((a,currentValue)=>{
    //Using logical operator to find the maximum value
    if(currentValue>a){
        a=currentValue //set currentValue = a if currentValue is greater than a until the loop finish
    }
    return a
},0)
console.log(maxValue)

//Find the minimum value of the array
const minValue=nums.reduce((accumulator,currentValue)=>{
        console.log("Accumulator:",accumulator,"CurrentValue:",currentValue)
    //Using logical operator to find the maximum value
    if(currentValue<accumulator){
        accumulator=currentValue //set currentValue = accumulator if currentValue is greater than accumulator until the loop finish
    }
    return accumulator
},nums[0])
console.log(minValue)


