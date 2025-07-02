

//Product object with name and price
const products = [
    {name:"Watch", price:100},
    
    {name:"Laptop", price:309},
    {name:"smartphone", price:200},
    {name:"Smart TV", price:400},
    {name: "Shoes", price: 100 },
 ]
 //_________________________________________________________________//

 //use find method to get values less than 200
 const lessthan200=products.filter((product)=>{
    return product.price<=200
 })

 console.log(lessthan200)
//_____________________________________________________________//
 //use map method to get dicount on every item
   const dicountOf10=products.map((product)=>{
    //calculate dicount on prices
    product.price-= (0.1*product.price).toFixed(2)
    return products
   })

   console.log("After adding 10%",dicountOf10)
   //_____________________________________________________________//
   // use reduce method to get total price
    const totalPrice= products.reduce((accumulator,currentValue)=>{
        //Get the total value price for all the products
        accumulator+=currentValue.price
        //return the total after calculation
        return accumulator
       },0)
//      display total price
       console.log(totalPrice)



//_________________________________________________________//
    //Add new product using map method
    //add is availble true if price is greater than 200
    const newProduct=products.map((product)=>{
       if(product.price>200){
        return {...product, isAvailable:true}
       }else{
        return {...product, isAvailable:false}
       }
       
    })
    
    console.log(newProduct)