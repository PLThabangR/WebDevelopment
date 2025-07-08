

//Objects inside a array example
 const products = [
     {name:"Product 1", price:10},
     {name:"Product 2", price:20},
     {name:"Product 3", price:30},
     {name:"Product 4", price:40},  
 ]

 //Display array of objects
 console.log(products)

 //Display array of objects using for of loop
 for(let product of products){
    if(product.price>20)
        console.log(product.name,product.price)
 }

  //Destruncture object inside array
  
  const [product1,,,product4] = products
  console.log(product1.name,product4.name)
