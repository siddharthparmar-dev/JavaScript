// reduce method 

const arr = [4,6,8,2,9]

const initialValue = 0

const myTotal = arr.reduce( (previousValue,currentValue) => {
    console.log(`previousVal is ${previousValue} and currentVal is ${currentValue}`);
    
    return previousValue + currentValue},initialValue )
console.log(myTotal);

// one important thing 
// in for each , filter ,map we create a callback function but we can pass value index array 
// but reduce mei jo call back function create hota hai usme parameters m hum 
// previous value current value and initial values pass krte hai


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const initialval = 0
const totalPrice = shoppingCart.reduce( (preItemPrice,curItemPrice ) => preItemPrice + curItemPrice.price, initialval)
console.log(totalPrice);

const xyz = shoppingCart.filter( (val) => val.price > 2000).map( (val) => val.price +1000)
console.log(xyz);
