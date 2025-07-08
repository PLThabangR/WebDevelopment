//Rest parameter in functions

//Rest parameter handle many parameters
const sum = (...args)=>{
    let total = 0;
    for(let i of args){
        total += i
    }
    return total
}
//call the function using many arguments
const result = sum(1,2,3,4,5,4,3,2,1)
console.log("The sum is",result)


const findMaxNumber = (...args)=>{
    let max = 0;
     for(let i of args){
        if(i>max){
            max = i
        }
     }
     return max

}

const result2 = findMaxNumber(1,2,3,4,5,4,3,2,1)
console.log("The max number is",result2)