//Lexical scope is the location in the code where a variable is defined.
//Lexical scope is determined by the position of a variable in the code
//Lexical scope is determined by the block in which a variable is defined

const num =30  //Global scope environment 
function outer(){
  
    const num=20; //This will be printed second in the lexical environment if present
    function inner(){
     const num= 10; //This will be printed first in the lexical environment if present
        console.log(num);
    }
      inner()
}

outer()