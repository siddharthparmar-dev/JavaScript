// THIS fucntion

const user = {
    name:"sid",
    price:500,

    welcomeMessage: function(name){
       console.log( `${this.name}  Welcome to website`)
       console.log(this);
       
    }
}

user.welcomeMessage()

// this function se hame context ke baare mei pata chlta hai ki hum kis context m function declare kr rhe h

user.name="siddharth"
user.welcomeMessage()
// yha pr humne username ko change kr diya hai aur fir function ko call kiya hai toh updated value show hori h
// kyuki humne value ko hard code nhi kiya tha humne current context ke hisab se usse print krne ko kaha

// agar hum object ke andar bas console.log(this) ko print kre toh output ye ayega

// sid  Welcome to website
// { name: 'sid', price: 500, welcomeMessage: [Function: welcomeMessage] }
// siddharth  Welcome to website
// {
//   name: 'siddharth',
//   price: 500,
//   welcomeMessage: [Function: welcomeMessage]
// }

// this ne hume pura context print karke de diya hai ki first baar m y context tha aur second baar mei ye context tha 

// agr hum console,log(this) bhr krte hai normally toh wo hume empty object dega 
// console,log(this)  hume global context  dega jo ki node envoirnment me empty h abhi

console.log(this);  //{}

// but hum agar isi ko browser k console m print krte hai toh woh hum windows ke object print krega

// actually m javascript ka jo engine hai wo pehle sirf browsers m hota hai baad jo ki js code ko execute krta tha

// uske baad uss engine ko nikal ke alag alag jgh use kiya aur diffrent names de diya jse node.js deno.js bun.js

// toh browser ke andr this global object print krega jo ki window object hai but node m empty object print krega


// function chai(){
//     let username = "sylas"
//     console.log(this.username);
    
// }

// chai()  // undefined 

// we cannot use this function like this we can use it only in objects

// ARROW FUNCTION

// const chai = () => {
//     let username = "sam"
//     console.log(this.username);
    
// }
// chai()

// we are getting same output in both which is undefined 


// so diffrence between arrow and function is not this function.

// arrow function ka basic syntax

// () => {}

// we can hold it inside a varibale also 

//  const addTwo = (num1,num2) => {
//     return num1 + num2
//  }

//  console.log(addTwo(3,4));
  
// this was example how basic arrow function is used 


const addtwo = (num1,num2) => {return num1+num2}

console.log(addtwo(5,2));

//  but there is one more method which is called implicit return

// in implicit return : in this we dont need to write return 

// this will help while learning react.js


const addthree = (number1, number2) => (number1+number2)

console.log(addthree(2,9));

// basically agar ham arrow function mei curly braces {} use karte hai toh hume return likhna padta hai 
// but agar hum paranthesis ka use karte hai toh hume  return likhne ki jarurat nhi hai 



const namethem = (username) => {return "siddharth"}

console.log(namethem());

console.log(this);


const hasher = new Object();

hasher.name = "siddharth";

hasher.id = "844649"

hasher.print = function(){
    return `welcome ${this.name} and your ticket id is ${this.id}`
}

console.log(hasher.print());

// output: welcome siddharth and your ticket id is 844649

// but if we create arrow fucntion then what will be output

hasher.display = () => {return `welcome ${this.name} your ticket id is ${this.id}`}

console.log(hasher.display());

// output :welcome undefined your ticket id is undefined

// it means we cannot use this in arrow function

hasher.print = () => {return `welcome ${hasher.name} your ticket id is ${hasher.id}`}

console.log(hasher.print());

// when we write like this hasher.name or hasher.id then it gives correct output 

// output : welcome siddharth your ticket id is 844649

// so the conclusion is that we can use this command in normal function not in arrow function 

// one more important thing if we put any object or something inside patranthesis then it can exectued
 const dis = (names) =>({username:"siddharth"})

 console.log(dis()); // undefined 

 // but agar hum uss curly braces ko ek paranthesis ke block mei daal de toh 
// output: { username: 'siddharth' }


// bacially pehle parantheis mei hum function ko define krte hai aur dusre parantheis ka matlab hota hai ki hum usse
// execute kar rahe hai 