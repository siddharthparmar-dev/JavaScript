// in js we can write strings in '  ' and " " double quotes.

//basic adding  two strings

const name = "siddharth"

const repocount = 10

console.log(name + repocount + "hello");

// but this is very basic method and its syntax doesn't even look good

console.log(`name is ${name} and my repocount is ${repocount}`);

// this is a mordern way of writing and it will help in backend development also.

// another way of declaring a string 


// writing in this will help us to use methods like constructor and cancatination etc

//by writing in this we can access the key value pairs of string 

// key value pairs is basically position and the element on that position

// newname[0]  => s   //like this so o is the key and s is value 

const newname = new String("siddharth")
console.log(newname[2]);

//these are some methods which we use in java script. if we write const newname = new String("siddharth")
// in google>inspect>console then we console log it we will get list of all methods below it 
console.log(newname.__proto__);
console.log(newname.length);
console.log(newname.toUpperCase());

console.log(`at index position 6 is ${newname[6]}`);


console.log(newname.charAt(4));


console.log(newname.indexOf('a'));

// sub string 

const newString = newname.substring(0,5)
console.log(newString);


// slice method 

const aString = "my name is siddharth"
console.log(aString.slice(8));

console.log(aString.slice(3, 25));

const bString = "AmazonRainforest"

console.log(bString.slice(4,-4));
console.log(bString.slice(-16,5));

// in slice method we can use neagtive values not in substring



console.log(bString.length);
// for finding length 

const cString = "   klyian Mbappe   "
// we have a method called trim we removes the extra space and then print the string
// if we normally console log it it will give us output including those extra space
//some time when we create a form and user unintentionally enters some extra space then 
// using trim method will remove it

console.log(cString);
console.log(cString.trim());


// some time when we write url it make the space between url as %20 which is done by browser
// but we can use replace method and convert that %20 into - or _

const url  = "https://siddharth.com/Siddharth%20parmar"

console.log(url.replace('%20','_'));
// replace method

console.log(url.includes('singh'));
// include method 
// to check wether it includes that or not. if it includes it will give true if not then false.

console.log(bString.italics());

const a = "645616"
const b = "645614"

console.log(a.concat(" ",b));

// we can add two string by this method concat method 
// basically it is used for cancatenation

const nexus = "siddharth is going to become a dev"
console.log(nexus.split(" "));

const nex = nexus.split(" ")

console.log(`This is our splitted string after spaces:${nex}`);

// we can add string by mainly two ways 
// first one is that we use + operator and add the strings and the second one is  by 
// using cancat method 

// syntax of concat is we have to use console.log(string1 concat(string2))
//console.log(string1 concat(" "string2)) if you want space between them 
//console.log(string1 concat("-"string2)) or - or _ . as per your choice
console.log(nexus.substring(9,45));

//let perform some string methods and test it 

const String1 = "lamborghini"

const String2 = "Mercedes"

console.log(String1.concat("_",String2));

console.log(String1.concat(",",String2));

// length of first string

console.log(`length of first string is:${ String1.length}`);

//lets use trim method : for removing unwanted spaces

const string3 = "   hello    "

console.log(string3.trim());

//split method 

const string4 = "hello world"

console.log(string4.split(" "));

//slice method 

const string5 = "qwertyuiopasdfghjklzxcvbnm"

console.log(string5.slice(5));

//substring method

const string6 = "letslearnquickly"

const string7 = "hellomynameissid"

const word1 = string7.substring(0, 5);  
const word2 = string7.substring(5, 7); 
const word3 = string7.substring(7, 11); 
const word4 = string7.substring(11, 13); 
const word5 = string7.substring(13);  

console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(word5);


console.log(string6.substring(4,9));



