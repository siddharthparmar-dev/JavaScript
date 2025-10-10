// Dates 

// when we use date objects that will show gives us result in miliseconds starting from 1 jan 1970

// we a created an object mydate and given an instance which is new date 
let myDate = new Date

console.log(myDate);

// this will gives us date but that will not so much readable 

// we will convert it into string 

console.log(myDate.toString());  // => Mon Aug 04 2025 18:30:34 GMT+0530 (India Standard Time)

// this will gives us string in readable format 

// there are so many methods which we can use to convert non readable date into readable one 

// lets check some of them

console.log(myDate.toDateString());  // => Mon Aug 04 2025

// toDateString will convert into string but it will remove the time .

console.log(myDate.toISOString())  //=> 2025-08-04T13:03:44.184Z

// toISOString will convert date in iso format 

console.log(myDate.toLocaleString()) // => 8/4/2025, 6:33:44 PM

// it will convert into locale format 

console.log(myDate.toLocaleDateString())  //=>8/4/2025

// it will convert into locale format but will only return date no time

console.log(myDate.toLocaleTimeString())  //=> 6:36:13 PM

// it will convert into locale format but will only return time not date 

// one important thing is that date is considered as object in javascript 

console.log(typeof myDate);

// it is asked in interview that date is which type of datatype




// to create a new date 

// month starts from 0 in js. 0 is january 

// let myNewDate = new Date(2025,7,4)

// console.log(myNewDate.toDateString());
// console.log(myNewDate.toTimeString());

// for time we have to just give commas and write the time 

let myNewDateTime = new Date(2025,0,9,6,44,52)

console.log(myNewDateTime.toLocaleString());

// if we want to declare date in our own format like mm/dd/yyyy
// so we can declare it by this method ("10-6-2025")  

let myNewDate = new  Date("06-09-2025")
console.log(myNewDate.toLocaleString());
console.log(myNewDate.toString());
console.log(myNewDate.toDateString());


// to get perfect time stamp we can use getTime method

console.log(myNewDate.getTime());

// it will gives us time in miliseconds starting from 1 jan 1970 which is arbitrary date 


let timestamp = Date.now()
console.log(timestamp);

// we can compare time in miliseconds 

// but if you want to convert miliseconds into seconds then we have to divide miliseconds by 1000

console.log(Math.floor(Date.now()/1000));

// there are some other methods of object date which we can use to get day time second 


let firstDate = new Date("2025-10-25")
console.log(firstDate.getDay());  // day 0-6 sun-sat
console.log(firstDate.getMinutes());
console.log(firstDate.getMonth());  // months 0-11 jan - dec

// if you are not comfortable with day and month starting with 0. you can add +1 in ypour syntax

console.log(firstDate.getMonth()+1)

console.log(firstDate.getDay()+1);

// toLocaleString this method is very important as we can declare object inside it and it has diffrent parameters

console.log(firstDate.toLocaleString('en-IN',{ day:"2-digit", year:"numeric", month:"long"}));
  
let secondaryDate = new Date("2025-08-05")


console.log(secondaryDate);

console.log(secondaryDate.getDay());

// important thing adding new before a function will convert it into object

// new will convert primitives into object and you will able to use objects methods 

// same thing goes for date function. when we add new before it it will create it into object and we will be able to
// use methods like getday() , getMinutes()  

let anDate = new Date("2025-08-12")
console.log(anDate.toLocaleDateString());

console.log(anDate.getDay());

console.log(Date.now());

const obj = [auth1 = "bycyrpt",
    authentication1 = "nextAuth.js"
]
 
console.log(obj);

console.log(Object.keys(obj));

 












