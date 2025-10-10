// for in loop

const obj =  {
    game1 : "bgmi",
    game2 : "cod",
    game3 : "fortnite",
    game4 : "balorant"
}

for (const key in obj) {

    console.log(`${key} : ${obj[key]}`);
    
}

// in for of loop when we log it , it print the values but in for in loop when we print it return keys not values

// examples se smjte h

const array = ["hi","hello","goodbye","welcome","thankyou"]
for (const element of array) {
    console.log(element);
    
}
// output
// hi
// hello
// goodbye
// welcome
// thankyou


// but in for in loop

for (const numbers in array) {
    console.log(array[numbers]);
    
}

// 0
// 1
// 2
// 3
// 4

// for in is not printing values it is printing keys
// if we want  to print the values in for in loop we have to write that object name and inside [] 
// we have to write variable name in which we have inserted that object objectname[variable]


// ******************************************    important    *********************

// for of loop:
// for of loop use hota hai strings,arrays,maps,sets ke liye
// for of loop values ko iterate karta hai 
// for of loops values nikalne ke liye use hoti hai 

// for in loop:
// for in loop use hota hai objects ke liye 
// for in loop keys(property name) ko iterate karta hai 
// for in loop se hum index nikal skte hai aur values bhi

// dono ka ek ek simple example
//for of : arrays, string, maps, sets ke liye
const details = ["sid","22","male"]

for (const det of details) {
    console.log(det);
    
}
// output:
// sid
// 22
// male

//for in : object

const data = {name:"sid",age:"22",gender:"male"}

// for (const key in data) {
//     console.log(key);
    
//     }
    
// sirf index values ko print krega    
// name
// age
// gender

// ab isme object ka naam ke sath [] ke andar key print krte hai 

// for (const key in data) {
//      console.log(data[key]);
    
//     }
    
// sid
// 22
// male    

// properties ya values print hua hai 

// agar hame dono print krna ho toh

for (const key in data) {
     console.log(key,data[key]);
    
    }

// name sid
// age 22
// gender male   

const arr = [1,2,3,4,5]

console.log(arr[2]);
