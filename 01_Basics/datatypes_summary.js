// kis basis data ko memory mei store kia jata hai aur kaise use access kiya jata hai



// uss hisab se dataypes ko 2 categories mei divide kiya gaya hai
// 1.) primitive data types 
// 2.) Refrence type (non-primitive data types).




// *********************** PRIMITIVE DATA TYPES *********************************

// 1.String     eg:  "12345"  "abc"
// 2.Null       eg:  Null is not 0 or empty String . Null is basically an empty value . ( khali value )
// 3.undefined  eg: we have declared a variable but we haven't assigned any value to it.  let anyNumber;
// 4.Boolean    eg: boolean gives us value in form of true and false or we can say in the form  of  yes or no
// 5.BigInt     eg: very big number or value or scientific values are declared in BigInt.
// 6.Number     eg: 12345   3.14  
// 7.Symbol     eg: to make a variable unique so that we can identify it easily.





//**************************************  Refrence type (non-primitive data types) **********************************

// 1. Arrays
// 2. Objects
// 3. Functions




const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id);
console.log(anotherId);

console.log( id == anotherId);


// bigInt

const bigNumber = 14616461694631n

console.log(typeof bigNumber);


// Arrrays

const games = ["pubg","codm","dota","csgo","rocketleaugue","moba","assasiancreed"];
// console.log(`games:${games}`);

console.log(typeof games);


//Object

let object = {
    name: "siddharth", age: 25
}

console.log(object);


//function

const myfunction = function (){
    console.log("hello World");
}

// when we print type of ,  for null it will show object
// for non primitive datatypes it will show object