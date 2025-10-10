// loops on arrays

// for each // ye bhi ek method hai jo arrays m loop lagane mei help krta hai 

const arr = ["BMW","chevrolet","maserati","land rover"]

// arr.forEach(function(values){
//     // console.log(values);
    
// })

//BMW
// chevrolet
// maserati
// land rover
// mercedes
// rolls royce
// Audi
// lamborghini
// porsche

// for each ek method hai jisko direct inject kar diya hai arrays ke method mei loop lagane ke liye 

// for each ke andar hum ek callback function create krenge but usko koi naam nhi denge
//  because for each method bhot smart hai naam dene ki koi jrurat nhi hai 

// fir function k parameter mei kuch bhi krdo like val , values , data , kuch bhi 
// fir as usual jaise function ke andar kuch nhi function ke andar console.log kar do parameter ko

 // we can create arrow function inside for each method

 arr.forEach((items) => {console.log(items); });

//  BMW
// chevrolet
// maserati
// land rover
// mercedes
// rolls royce
// Audi
// lamborghini
// porsche

function printMe(val){
    console.log(val);
    
}

arr.forEach(printMe)

// we can pass multiple parameters inside it like value ,index ,arr

arr.forEach(function(val,index,array){
    console.log(val,index,array);
    
 })
 
//BMW 0 [ 'BMW', 'chevrolet', 'maserati', 'land rover' ]
// chevrolet 1 [ 'BMW', 'chevrolet', 'maserati', 'land rover' ]
// maserati 2 [ 'BMW', 'chevrolet', 'maserati', 'land rover' ]
// land rover 3 [ 'BMW', 'chevrolet', 'maserati', 'land rover' ]


const myCoding = [
    {
        languageName :"javascript",
        languageFileName:"js"
    },
    {
        languageName :"c++",
        languageFileName:"cpp"
    },
    {
        languageName :"python",
        languageFileName:"py"
    }
]

myCoding.forEach((values) => {
    // console.log(values);
    // console.log(values.languageFileName);
    // console.log(Object.keys(values));
    
})

const print = Object.keys(myCoding[2])
console.log(print);

// javascript
// c++
// python

