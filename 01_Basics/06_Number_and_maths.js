//revision of previous lec

const str1 = "hello world"
const str2 = "hello sid    "

// console.log(str1.substring(0,5));

// const str_reverse = str1.split("").reverse().join("")

// const str_revers = str1.split("").reverse().join()

// console.log(str_reverse);

// console.log(str_revers);

// console.log(str1.slice(2));

// console.log(str2.trim());

// console.log(str1.split(" "));

// console.log(str1.charAt(4));

// console.log(str1.indexOf('w'));

// console.log(str1.includes('rld'));

// console.log(str1.replace('world','universe'));

// console.log(str1.toUpperCase());

// console.log(str1.concat(" ",str2));

// console.log(str1.toLocaleUpperCase('en-IN'));
// const score = 400

// console.log(score);

// const Balance = new Number(400)
// console.log(Balance);

// there are some methods in number which we can use 

// to convert in string 


// console.log(score.toString());

// console.log(score.toString().length);

// console.log(typeof score);


// tofixed method : this method is basically used to fix that how many after decimal places value we want

// tofixed method is used so much and especially in creating an ecommerce website 

// console.log(score.toFixed(5));
// console.log(score.toFixed(2));

// toprecision is very important and intresting method basically we can give it value from 1 to 21 only.

// toprecison will gives us by rounding of value and till how many digits we want precised value

const num = 100.6599

// console.log(num.toPrecision(3));
// console.log(num.toPrecision(5));
// console.log(num.toPrecision(8));
// if we give smaller value than number then it will create it into exponential form

// so we have to keep in mind that we have at least the size of number value in toprecised .
// console.log(num.toPrecision(2));


// tolocalestring it basically converts the number into string and put commas according to given locale.

const hundreds = 10000000

// console.log(hundreds.toLocaleString());

// we have given en-IN and it will convert into indian style. put commas acc to  that 
// console.log(hundreds.toLocaleString('en-IN'));


//****************************************************Maths***********************************

// maths me bhi bhot sare methods hai jinko hum use krte hai 

// lets look up to some of the methods

// abs : absolute value ye bas negative value ko positoive ke andar convert kar dega

console.log(Math.abs(-8));

//round : ye basically numbers ko round off krta hai 4.67 ko 5 like this 

console.log(Math.round(4.59));

// ceil and floor 

// ceil m agar value thodi si bhi jyada hogi toh wo round off kr dega eg: 4.2 => 5

//floor m agar value kitni bhi zyada ho wo round off ni krega wo lower value yani first number hi dikhayega

// eg : 4.9 => 4

//lets check it out

console.log(Math.ceil(4.1));  // if thoda sa bhi jyada hai toh round of 
console.log(Math.floor(4.9)); // kitna bhi jyada ho ghnta frk ni pdta

// sqrt() to find square root of any number 

console.log(Math.sqrt(81));

// pow() to find power values of any number 

console.log(Math.pow('7','3'));

console.log(Math.min(4,5,6,9,5,4));
console.log(Math.max(4,5,6,9,5,4));

// Math.random() will return a number randomly but it will give values between 0 to 1.

console.log(Math.random());

// so we will multiply it by 10 so that 1 decimal values increases  eg: 1.254 * 10 = 12.54  eg: 0.54 * 10 = 5.4

console.log(Math.random() *10);

// but there is a problem that what if it gives number 0.00568755666 then we will add +1 to it so that we always get 
// value more than 0

console.log(Math.random()*10 +1);

// we can use math.floor or math.round or math.ceil to round off value 

console.log(Math.floor(Math.random()*10) +1);

const minimum = 10

const maximum = 20

console.log(Math.floor(Math.random()*(maximum-minimum+1)+ minimum));

const min = 35
const max = 40

console.log(Math.floor(Math.random()*(max-min)+min));

const a = 100

const b = 200

console.log(Math.floor(Math.random()*(b-a)+1+a));

const val1 = 500

const val2 = 510

console.log(Math.floor(Math.random()*(val2-val1)+1+val1));








