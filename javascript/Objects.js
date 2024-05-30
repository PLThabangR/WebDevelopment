//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

assistantManager.greeting="Hello"

console.log(assistantManager.greeting)

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

var fruits =[]
fruits.push("apple");
fruits.push("Kiwi")

console.log(fruits)

fruits.reverse()

console.log(fruits)

//MAth method built in function

console.log(Math.round(Math.random()*100,2))

/*String functions
charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  
*/ 

let clothes = []

clothes.push("Nike","Puma","Reebok","Adidas","Lacosta")

console.log(clothes)
clothes.pop()

favCar ={
    color :""
}

favCar.color = "Red"
console.log(favCar.color)

//Error handling 
//Syntax error logical error and reference error variable not defined type error
//Syntax Error invalid javascript code 
// var a  "there's no assignment operator here";
//TypeError is thrown when, for example, trying to run a method on a non-supported data type.
//"hello".pop() // Uncaught TypeError: "hello".pop is not a function


//Code errors task 
function addTwoNumbers3(a,b){
    try{
        if(typeof(a) != "number"){
            console.log("The first argument is not a number")
            throw new ReferenceError()
        }else if(typeof(b) != "number"){
            console.log("The Second argument is not a number")
            throw new ReferenceError()
        } else{
            console.log(a+b)
        }
    }catch(error){
        console.log("Error!",error)
    }
    console.log(a+b)
}


console.log(addTwoNumbers3("a",5))


//Letter finder using try catch

function letterFinder(word, match) {

    try{
       if(typeof(word) != "string"){
            console.log("The first argument is not a string")
            throw new ReferenceError()
        }else if(typeof(match) != "string"){
            console.log("The Second argument is not a string")
            throw new ReferenceError()
        } else{
            for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
            break
        } else {
            console.log('---No match found at', i)
        }
    }
        }

    }catch(error){
         console.log("Error!",error)
    }
    
}

letterFinder("test","e")