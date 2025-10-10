// objects ko ham do tarah se declare karte hai. 1. literals and 2. constructor

// Both methods create objects but the basic diffrence between them is singelton . Literals donot create singelton but constructor create singleton


//there is one way which is called constructor method and singelton is created in this method
// Object.create

// in objects we have keys and values, thats is why data in objects is stored as key-value pair

// in above example name age email these are keys but siddharth 22 sidcvc@gmail.com are values 

// we can access objects keys also and values also 

//Objects Literals : creating object using literal method

// objects ke andar ke elements ko hum do trah se access kar skte hai 
// ek toh simple trike se jse console.log(newObj.email);
// dusra trika hai square notation use kr ke jse console.log(newObj["age"]);

// dono triko mei yeh diffence hai ki kuch elements square notations ke through hi access hote hai

// eg "full name ": "ccDvD" agr hum object ke andar is trah se value enter krte hai toh 
// use bas square notation method se access krenge
// console.log(newObj["full name "]);
 

// agar hume ek symbol create krke object m use krna hai toh symbol ko square notations me declare 
// krna pdega example [newsymbol]: "value" ye syntsx hai other wise normally ye string ki form m rhega

// symbol m use krne ke liye ye syntax use krna pdega

const newsymbol = Symbol("fullName")


const newObj = {
    name:"siddharth",
    [newsymbol]: "value",
    "full name ": "ccDvD",
    age:22,
    email:"sidcvc@gmail.com",
    isLoggedIn:false,
    lastloginDays:["mon","wed"]
}


// console.log(newObj[newsymbol]);

// basically ham symbol ko square notation me declare kar skte hai 

// normal tarike se square notation wali vallue print nhi hogi
// hame console.log ke time square notations ke andar rkhna pdega for eg

// console.log(typeof newObj.newsymbol);    string

//console.log( typeof newObj[newsymbol]);   symbol

// how to change values in object

newObj.email = "siddharth9069@gmail.com"
// console.log(newObj);

// freeze property

// agr hum values ko lock karna chahte hai toh hum uss obj ko freeze krdenge
// further kuch bhi change ka uss object m koi effect nhi hoga

// Object.freeze(newObj)
newObj.email = "siddharth@gmail.com"
// console.log(newObj);

// koi changes nhi hoga kyuki object freezed hai


//function inside object
//Jab hum ek function ko object ke property ki tarah define karte hain, 
// toh usse method kehte hain.

newObj.greetings = function(){
    console.log("hello world");
    
}

// yha pe newobj,greetings ka mtlb hai hmne ek newobj me ek property ko define kiya hai
// .greetings aur uske andar function ko define kiya hai

// ab hum jab bhi newobj.greeting method ko call krenge toh uske andar jo funcn h wo run hoga
// wo run hoga


// console.log(newObj.greetings());


// this keyword : this use krte hai usi object ki kisi property ko refer krne ke liye
newObj.displaymsg = function(){
    console.log(`thankyou Visit again! ${this.name}`);
    
}

newObj.nameupr = function(){
    console.log(`Your ticket has been raised ${this.name}`);
    console.log(`An email has been sent to your email id ${this.email}`);
    
}

console.log(newObj.nameupr());

console.log(newObj.displaymsg());

