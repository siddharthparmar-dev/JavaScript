  // object through literal
 const newobj = {
    username : "sid",
    id : 14643,
    getuser: function(){
        return(this.username)
    }
 }

console.log(newobj.getuser());

// object through constructor 

function printUserDetails(userId,UserCity,userSalary){
    this.id = userId
    this.city = UserCity
    this.salary = userSalary

    return(this)
    
}


const userone = new printUserDetails(4564646,"delhi",646);
const usertwo = new printUserDetails(4564846,"pune",686);
console.log(userone);

// values of usertwo has replaced value of user one 

// so for this problem we use 'new' , new create a new instance


function createUser(username,score){
    this.username = username
    this.score = score 
    
}

createUser.prototype.increaseNumber = function(){
    this.score++    
}
// by this way we can add a new prototype property to a constructor

const user1 = new createUser("siddharth",56)

// new keyword is very important 
// when we create a constructor like function createuser(){} then for using it we have to use new keyword
// new create a new javascript object then this newly created object get linked with prototype of that constructor
// then it has access to the all the the properties and methods defined on constructor prototype


user1.increaseNumber()


// function ko ek constructor ki trah use kr skte hai 
// jab hum new keyword use krte hai toh humara function ek constructor ban jata hai 
// jo humara constructor hai hum uske prototype m ek naya method add kr skte hai 
// function ka naam.prototype.methodkanaam = function(){}
// uss prototype ke andar hum constructor ke parameters ya fir variables ka use kr skte hai 
// par unhe access krne ke liye humesa new keyword use krna pdega 
// new kya krta hai wo ek naya js object bana deta hai usme hamara banaya hua prototype link ho jata hai 
// fir hum usko use kr skte hai 

// example
// humne ek function create kiya hai 
function printIt(marks){
    this.subjectMarks = marks
}
// ab iss function ka ek naya prototype ban ra hai
printIt.prototype.increaseMarks = function(){
    this.subjectMarks++    // this se humne use refernce diya hai iss function ke object ke andar wala subjectMarks
    console.log(this.subjectMarks);
    
}

const studentOne = new printIt(85) // bina new ke we error dega 
studentOne.increaseMarks()


let power = {
    thor : "hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`spiderMan power is ${this.spiderman}`);
        
    }
}

// to create prototype  for all objects 

Object.prototype.printNew = function(){
    console.log(`printNew is available for all objects`);
}

power.printNew()


function powerNew(power1,power2){
    this.thor = power1
    this.spider = power2
}

powerNew.prototype.sid = function(){
    console.log(`we have two powers ${this.thor} & ${this.spider}`);
    
}

const user = new powerNew("hammer","sling")
user.sid()


// we can create a prototype for string also

let str = "siddharth"

String.prototype.splitit = function(){  
    console.log(this);
    console.log(`splitted string is ${this.split('')} `);
    
}

str.splitit()