//if

// if(true){
//     console.log("hello");
    
// }

// example of if and else statement 
const id = "2255"

if( id == 2255){
    console.log("your ticket has been raised"); 
}else{
    console.log("wrong ticket id");
    
}

// we can use some comaparison operator like >,<,<=,>=,==,===,!=,!==
// === and !== also check data types

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`you unlocked a new power: ${power}`);
    
}
// but if we console.log outside the curly braces then?
// console.log(`you unlocked a new power: ${power}`);  //power is not defined
// it will show error because the curly braces defines the scope let and const are blocked scope thats why it is 
// not accessible outside the scope

// we can use if function in single line without using curly braces

const balance = 500

if (balance > 250) console.log("hello"),
console.log("hii");  // like this we can use comma and write it


// but what about scope? so it has implicit scope and it ends in a single line

// you can write it in multiples lines also by using commas but still it will implicit scope and it ends with ;

// ELSE IF

// we can check multiple conditions using else-if statement 

const savings = 1450

if (savings < 500) {
    console.log("your saving is less than 500");
    
} else if (savings < 750) {
    console.log("your saving is less than 750")
}else if (savings < 1000) {
    console.log("your saving is less than 1000")
}else{
    console.log("your saving is less than 1500")
}


// output : your saving is less than 1500

// &&    // And operator

// if we want to more than one condition in an if statement

// supppose if want that if user is loggedin and have gold membership then he can get access

const isLoggedIn = true

const goldMemberShip = true

if (isLoggedIn && goldMemberShip) {
    console.log("welcome!");
    
}
// by using && we can check more than one conditon 

// ||  // Pipe operator

// if we want that if one condition is true but other is false still if works so we use ||

const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedInFromEmail || userLoggedInFromGoogle) {
    console.log("you are logged in ");
    
}
// o/p: you are logged in
// so here one of those two conditon is true still it will log

