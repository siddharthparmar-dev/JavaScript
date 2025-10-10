// truthy and falsy statement

// const email = "siddharthp.codes@gmail.com"

// if (email) {
//     console.log("welcome");
    
// }else{
//     console.log("Please enter your email");
    
// }
// we have not given any condition that email = ... or true or false 
// we have just written email . so this is called truthy statement 
// if the email variable in not empty so it will considered true and it will execute it 
// but if the email value is empty then it will execute else command

const email = ""

if (email) {
    console.log("welcome");
    
}else{
    console.log("Please enter your email");
    
}

// which values are falsy values ?
// false , 0 , -0 ,NaN , BigInt, undefined , null , ""

// truthy values : although all values which are not falsy are truthy values but there are some special values also
// "0" , "false" , " " , [] , {} , function(){}
// 0 or false if written inside a string will be considered truthy value

// how to check empty array and empty object in javascript 

const newArr = []

if (newArr.length === 0) {
    console.log("array is empty");
    
}
// array is empty

const emptyObject = {}

// so we print keys of object and it will return in the form of array and then we can check length of that array

if (Object.entries(emptyObject).length === 0) {
    console.log("This is an empty object");
    
}
//This is an empty object

// some basic general knowledge 
 // false == 0   : true
 // false == ""  : true
 // "" == 0      : true

 // NULLISH COALESCING OPERATOR  ?? 

 // this operator is used only for null and undefined 

 // if we assign two values to a variable first one is null or undefined and second one is a number

 let value1 = null ?? 10

 console.log(value1);   // 10

 // so this method is used when we have doubt that null or undefined can come so to avoid disturbance in code 
 // we use ?? operator so that if null or undefined comes it will run the second option 
 // it help in database and further in web dev that if at any point error comes than it will move to second option

const value2 = undefined ?? 25 ?? 96

console.log(value2);

// if we more than two values then also it will print second option next after null or undefined  
 

// TERNIARY OPERATOR 

// CONDITION ? TRUE : FALSE 

const price = 50

price == 50 ? console.log("yes") : console.log("no")    // yes



 