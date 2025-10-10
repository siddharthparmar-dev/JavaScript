// object using constructor 

// const tinderUser = new Object()  // singleton object

// console.log(tinderUser);

// object using literal
const tinderuser = {}    // non-singleton object

tinderuser.id = "644694544"
tinderuser.name = "siddharth"
tinderuser.isLoggedIn = true

// hum objects ke andar bhi objects ko create kar sakte hai 
// aur un objects ke andar bhi sub objects create kar sakte hai 


const regularUser = {
    email:"sidcvc@gmail.com",
    fullname:{
        username:{
            firstName: "siddharth",
            lastname: "parmar"
        }
    }
}
// objects ko access karne ke liye console.log() ke andar . dot ka use krke access kr sakte hai 
// for eg :
console.log(regularUser.fullname.username.firstName);

// like in arrays if we want to join or merge two objects 
const obj1 = {1:"hi",2:"welcome"}
const obj2 = {3:"hey",4:"bye"}
const obj6 = {5:"takecare",6:"goodbye"}

console.log(obj1,obj2);  // this will not merge it.  output:  { '1': 'hi', '2': 'welcome' } { '3': 'hey', '4': 'bye' }

const obj3 = {obj1,obj2}
console.log(obj3);
// isme objects merge hore hai but values merge nhi hori hai . ek object ke andar do sub objects show krega
// output:  { obj1: { '1': 'hi', '2': 'welcome' }, obj2: { '3': 'hey', '4': 'bye' }}


// object.assign() ye copy karega objects ko aur ek target object create krega . target object ko return krega 
// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);
// output: { '1': 'hi', '2': 'welcome', '3': 'hey', '4': 'bye' } 
// object.assign() is a method which copies all enumberable properties from one or more source objects and 
// create a target object. and returns that modified target object .

// object.assign() basically hamare source objects ki properties ko copy kar leta hai aur ek taget object me daal 
// deta hai aur jum object.assign ko print krte  hai toh woh hume target object  return krke deta hai


//object.assign() ke syntax mei ek curly braces hota hai starting, although wo result mei koi change ni krega 
// but we should write complete syntax. object.assign({}, obj1, obj2)

// const obj5 = Object.assign({},obj1,obj2)  // {} target object hai aur bake sare source objects

// console.log(obj5);    //{ '1': 'hi', '2': 'welcome', '3': 'hey', '4': 'bye' }
// same output but this is correct syntax

// agar hum {} nhi dete hai toh js first wale ko target maan lega aur sb usme add ho jayenge
// for eg:
const obj8 = Object.assign(obj1,obj2,obj6)  // iss case me ye obj1 ko hi target maan lega
console.log(obj8); 
  // output 
//   {
//   '1': 'hi',
//   '2': 'welcome',
//   '3': 'hey',
//   '4': 'bye',
//   '5': 'takecare',
//   '6': 'goodbye'
//   }

console.log(obj1);
// output
 //{
//   '1': 'hi',
//   '2': 'welcome',
//   '3': 'hey',
//   '4': 'bye',
//   '5': 'takecare',
//   '6': 'goodbye'
// }
console.log(obj1===obj8);  //output: true

// obj 1 mei sb kuch copy hogya kyuki compiler ne obj 1 ko target maan liya , isliye hume syntax mei {} use krna chaiye
 const obj9 = Object.assign({},obj1,obj2,obj6)
 console.log(obj9);
 // output will be same but target object obj1 ni hoga. kyuki hamne ek blank target object diya hai syntax m

console.log(obj1===obj9); // output:false

// so conclusion is object.assign ke syntax mei blank object dalna chaiye jo ki target object hoga
// object.assign({},source objects.........)

// but objects ko merge krne jka ek aur mnethod hai jo arfray mei bhi tha : spread operator  ...

const obj10 = {...obj1,...obj2,...obj6}
console.log(obj10);
// this one is easy and less complicated tha  object.assign


// basics ki hume database se kasie values milti hai


// database  se jab values aayengi toh wo array ke andar ayengi
// database se bhot sare values aayengi arrays ke andar jo ki objects m stored hongi
const users = [
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"1",
        email:"abc@gmail.com"
    },
]

// now if we want email of 1st user that we can use array index position. value which we want

console.log(users[1].email);

// if we want to access value or key of an object so we can do that also 

const clawuser = {
    name:"jazzy",
    age:25,
    id:"jxhs"
}

console.log(Object.keys(clawuser)); // this will print keys only   output:[ 'name', 'age', 'id' ]


console.log(Object.values(clawuser)); // this will only print values  output: [ 'jazzy', 25, 'jxhs' ]

// but there is an imp thing in this that the output comes inside array which is very imp for building projects in future

// if you want to print entries then
console.log(Object.entries(clawuser));  //[ [ 'name', 'jazzy' ], [ 'age', 25 ], [ 'id', 'jxhs' ] ]
// this will give us all the entries inside arrays

/// there are some more method of objects which we can learn

// hasOwnProperty() this method gives result in true or false and tells wether that propert is present o=in object or not 

console.log(clawuser.hasOwnProperty('id')); // output: true

// de-structuring and structuring in js 

const course = {
    courseName : "web Development",
    coursePrice: 999,
    courseInstructor: "sid"
}

console.log(course.courseInstructor);

// De-structurise  : instead of writing long lines we de structurise it and make it short

const {courseInstructor:instruct} = course

console.log(instruct);


//Api introduction

//JSON

// {
//    "playerName":"siddharth",
//     "playerSalary":75000,
//     "playerRole": "EntryFragger"
// }

// this is a basic structure of an API
// API is also declared as an object but we dont give it a name like object . we just declare it inside {}
// in API both keys are also declared in string

[
    {},
    {},
    {}
]
// some API are stored inside an array , there are multiple objects inside that array

// famous API : randomuser.me
// we can take a sample API from this website

// JSON formatter is used to study API .