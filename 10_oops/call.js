function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
    
}

const user = new createUser("siddharth","sid@example.com","452352")

console.log(user);

createUser("sid","sid@example.com","452782")

// call method is used if we want to use reference of a function variable in our function

// .call() ek function borrow karne ke liye use hota hai aur uske andar this kis object ko refer karega, woh decide karta hai.

// Tere case me, setUsername ka code reuse ho raha hai aur username bhi object me sahi jagah set ho raha hai.


// function newFnc(){
// callme()
// }

// iss case m callme() ke andar ka this kisko refer krega kyuki uske outer layer p newFnc h 

// iss case this global execution context ko refer kr deta hai 

// and as we know that global execution context har jgh diffrent hai 

// windows m window object hai but node envoirnment m {} hai 

// call se wo function call ho jayega 

// but usko ye batane ke liye 

