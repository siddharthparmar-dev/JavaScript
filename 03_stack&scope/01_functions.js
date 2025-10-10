// functions ka basic matlab h ki humne jitne bhi line of code likha ho function ke andar usko hum khi bhi use kr skte h
console.log("u");
console.log("e");
console.log("r");
console.log("h");
console.log("f");
console.log("d");
console.log("g");

// if we want to print this whole set of console log again then we have to re-write again whole.
// here comes function , if we write this whole console log in fuction then we can use it very easily using name 

// how to declare fuction  

function details(){
console.log("u");
console.log("e");
console.log("r");
console.log("h");
console.log("f");
console.log("d");
console.log("g");
}

// this is how function is created

// now if call details  so every thing inside that fucn will be printed


// details is refernce of fuction
// but if we want to execute it then we will insert paranthesis after it  like details()

details()

// In JavaScript:

// details → reference to the function (the function object itself)

// details() → call the function and return its output

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(2,3)   

// function addTwoNumbers(num1,num2)  the thing which is inside paranthesis is called parameter
// addTwoNumbers(2,3) and here the thing which is inside paranthesis is called arguments

// if i declare addTwoNumbers(2,3)  in a variable and then console.log it

// const outp = addTwoNumbers(2,3)   // 5

// console.log(output);   //undefined

// we will write same function in diffrent way

function addTwoNumbers(num1,num2){
    let result = num1+num2
    console.log("hello");
    return result
    
}


const output = addTwoNumbers(2,3)   // 5

console.log(output);

// there is a rule in javascript that once you have written return inside a function after that it will print nothing

// hum function ke andar directly bhi num1+num2 ko return kar sakte hai 

function add2nums(number1,number2){
    console.log("this is the answer");
    
    return number1-number2
}


add2nums(15,12)
const answer = add2nums(10,5)

console.log(answer);

// If you just call a function, the return value is lost unless you use it somewhere.

// If you console.log inside the function, that part will print.

// If you want to see the return value, you must log it outside.


function ccDvD(a,b){
    let finalAnswer = a+b
    return finalAnswer
}

ccDvD(15,5)  // ye koi output show ni krega kyuki humne function ko call kiya hai 
// function ke andar humne return krne ko bola hai but humne use print karne ke liye nahi bola hai  
// aur naa humne use kahi store karne ko bola hai 
// jab hum console.log  krenge tabh wo print hoga

console.log(ccDvD(15,5));    // output:20
// kyuki humne console log ke andar argument pass kiya hai 15,5 so function ke according hamara output aayega

function loginUserMessage(username = "Guest"){
    if(!username){
        console.log("pls enter your username");
        return
        
    }
     return `${username} just logged in!`
}

// console.log(loginUserMessage("siddharth"));   //siddharth just logged in!

// but agar console log me koi argument pass na kre toh

console.log(loginUserMessage("siddharth"));  //undefined just logged in!

// par agar hum chahte hai ki agar kuch bhi enter nhi kiya hai toh show ho pls enter your username

// toh uske liye hum if ka use krenge

// we can use ! also it means "not Operator"

// If username has a truthy value (like "sid", 123, etc.), !username becomes false.

// If username is falsy (like "" empty string, null, undefined, 0, NaN, or false),
// !username becomes true

// or we can username already a value which will be over written by the new value passed while console log

function signupUser(user){
    if(!user){
        console.log("Guest, welcome to Digital World");
        return
        
    }
    return `${user} welcome to Digital World`
}

console.log(signupUser());

// if we are making a shopping cart and user is adding items again and again so how we will get it

function shoppingCart(...TotalPrice){
    return TotalPrice
}

// console.log(shoppingCart(500));   // 500

// but user is adding more items then
// console.log(shoppingCart(200,500,800,1900));  // 200

// it will only print first element , here comes the use of rest operator ...

// if we pass TotalPrice with rest operator in function paramter then,

console.log(shoppingCart(200,500,800,1900));   //[ 200, 500, 800, 1900 ]

// it will return us an array with a set of values and we can perform loops in arrays 

// REST OPERATOR  is very similar to spread operator but its use is diffrent from spread operator


const user = {
    username:"siddharth",
    Price: 500
}
//we have created an object and then we have created a function and then execute that function and pass that object as arg 
function handleobject(anyobject){
    console.log(`thankyou for shopping ${anyobject.username} and your total bill is ${anyobject.Price}`);
}

handleobject(user)

// we can also give username and price by our own by creating an object

handleobject({
    username:"Minsu",
    Price:"1200"
})
// humne jo function banaya hai usme hamne parameter mei anyobject pass kiya fir humne return m refernece diya hai 
// .username aur .price ka . ab hum agar argument mei koi bhi object pass krenge jisme username aur price ho toh 
// hmara function print hoga but ek problem hai agr humare object ke andar typo error hai 
// for eg : price ki jgh prices hai toh hume output m undefined milega 
// that's why  typescript is used as it check the data type first 

const myNewArray = [200,400,500,800]

function printArray(array){
    return array[1]
}

console.log(printArray(myNewArray));
// we can pass our own array also

console.log(printArray([200,400,600]));

function coupon(Object){
    if (!Object.username){
        console.log("pls signup to get your coupon");
        return
    }
    return `${Object.username} you have unlocked your coupon successfully of worth ₹ ${Object.amount}`
}

const userData={
        username:"frank",
        amount:900
    }

const userData2={
    username:"",
    amount:500
}    
console.log(coupon(userData));



function printstring(String){
    if (!String){
        console.log("pls enter a string");
        return
        
    }
    return (String[2])
}

const string1 = ""


console.log(printstring(string1));
