

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// in let and const console log print not defined but in var value gets printed, 
// thats why var is less used

// console.log(a); // a is not defined 
// console.log(b);  // b is not defined 
// console.log(c);  //30

// ****************** DIFFRENCE BETWEEN LET CONST AND VAR  ************************

// LET : blocked scope ye sirf {} ke andar accessible hai jha ye declare hua hai 
// isko hum re assign kar sakte hai par re declare nahi kar sakte hai

// CONST : ye bhi blocked scope hai let ki tarah but isko naa reassign kar skte hai 
// aur na re declare kar sakte hai 

// VAR :  ye blocked scope nahi hota hai ye function scoped hota hai 
//  agar isko {} ke andar declare kiya hai toh hum isko iske bahar bhi access kar sakte hai
// ye re declare aur re assign dono ho skta hai 

// why is var less used in todays gen

// beacuse it donot respects block scope which can cuase so much bugs in code

// if (true) {
    //     let a = 10
    //     const b = 20
    //     var c = 30
    // }  
    
    // is case mei agar hum var ko dobara re declare krenge toh new value old wale ko overwrite kr dega
    
    var c =300
    
// * node mei global scope alag hai aur windows me alag hai 

// scope leveling

if(true){
    const username ="siddharth"
    if (username==="siddharth"){
        const website = "vercel"
        console.log(username+"",website);
    }
    // console.log(website);
}
// console.log(username);

// dono console.log  error show krenge because first wala scope ke bhar h aur second wala bhi apne scope ke bahar h
// bs  console.log(username+website); print hoga because ye scope ke andar h 


//********************************** MINI HOISTING ******************************* */

// we can declare function by two types one is the normal way and second way is by declaring it inside a variable
// for eg const func = function(num){  }


console.log(addone(5));
function addone(number){
    return number + 1
}

 const addingone = function (number){
    return number + 1
 }
 console.log(addingone(5))


// if we console log both then output comes but what if we excute the function before deceleration would it print

// function addone(number){
//     return number + 1
// }
// in this case we execute the function before intialization then it will print


// but in 2 case the function is stored inside a variable so if we execute before intializatioon then it will show error

