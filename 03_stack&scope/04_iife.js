// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// function chai(){
//     console.log("Database connection established");
// }

// agar hume iss function ko immediately print krna hai taki ye global scope se pollute na ho 
// aur immediately execute ho jaye to hum isko ek paranthesis mei wrap kar denge aur iske aage ek parantheis aur lagyenge
// execute karne ke liye

(function chai(){
    console.log("Database connection established");
})();

// this is called as named iife
// output:Database connection established

// humne pure function ko ek paranthesis mei daal diya hai aur uske baad  humne uske aage ek aur paranthesis laga diya
// first paranthesis mei humara function define hogya hai aur dusre function mei humara function  execute hogya hai 

// isi ko hum  kehte hai iife ( immediately invoked function expression)

// one important thing jab bhi hum iife ko declare kar rha hai toh usse end karne ke liye last me ek colon ; lagana hai 

// can we write arrow function iife way 

(() => {console.log("database connected");
}) () ;

// output: database connected
// it means we can write in this way also

// what if we want to add any variable in iife

( (myname) => {
    console.log(`hello ${myname}`);
}) ('sid') 

